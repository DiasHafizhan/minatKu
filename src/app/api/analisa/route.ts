import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { together } from "@/lib/together";
import { RIASECResult } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const session = await auth()
    const { hasil } = data as { hasil: string[] };
    const chat = await together.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful career expert that ONLY responds in JSON. Your job is to recommend the most suitable high school specialization (peminatan) for Indonesian SMA students based on quiz results: ${hasil.join(' ')}.`
        }
        ,
        {
          role: 'user',
          content: `
            Anda membantu seseorang yang mengikuti tes RIASEC. Data input berupa variabel hasil bertipe []string, di mana setiap elemen berisi format soal dan jawaban "Ya" atau "Tidak", misal:
          [
            "Saya suka bekerja dengan kendaraan? Ya",
            "Saya suka mengerjakan teka-teki ? Tidak",
            ...
          ]
          Tugas Anda:
          1. Setiap soal terkait dengan salah satu dari 6 kategori RIASEC berikut:
            - Realistic: suka bekerja dengan benda nyata dan kegiatan praktis.
            - Investigative: suka menganalisis dan memecahkan masalah secara logis.
            - Artistic: kreatif dan ekspresif dalam karya seni dan inovasi.
            - Social: suka membantu dan berinteraksi dengan orang lain.
            - Enterprising: senang memimpin, berwirausaha, dan meyakinkan orang lain.
            - Conventional: menyukai keteraturan, administrasi, dan pekerjaan detail.
          2. Hitung skor setiap kategori berdasarkan jawaban:
            - Jawaban "Ya" untuk soal yang terkait kategori tertentu = +10 poin ke kategori tersebut.
            - Jawaban "Tidak" = 0 poin.
            - Jika ada soal yang tidak dikenali, abaikan.
          3. Setelah skor untuk tiap kategori dihitung, buat output dalam format JSON berupa array, di mana setiap elemen memiliki atribut:
            - nama_category: nama tipe RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, Conventional)
            - deskripsi_category: Buatlah penjelasan mendetail mengenai untuk tipe tersebut. Gunakan referensi dari deskripsi di poin 1, namun kembangkan menjadi minimal dua paragraf. Harus menjelaskan gambaran umum tipe tersebut, termasuk karakteristik utamanya, latar belakang, atau konteks penggunaannya. 
            - skor: skor kategori tersebut (angka dari 0 sampai maksimal sesuai perhitungan)
            - alasan_kecocokan: Buatlah penjelasan mendalam untuk alasan_kecocokan berdasarkan skor yang diperoleh pada kategori tertentu. Gunakan kriteria berikut:
                Skor tinggi (≥ 70): sangat cocok, menunjukkan minat dan bakat kuat.
                Skor sedang (40–69): cukup cocok, ada ketertarikan sedang.
                Skor rendah (< 40): kurang cocok, minat rendah.
              Jelaskan arti dari skor yang diperoleh dalam kategori ini secara mendalam. Paragraf pertama membahas bagaimana skor mencerminkan minat, kecenderungan, atau potensi individu, serta alasan psikologis atau praktis di balik tingkat kecocokan tersebut. Paragraf kedua menjelaskan implikasi dari skor tersebut dan berikan rekomendasi apakah kategori ini layak dipertimbangkan, dieksplorasi lebih lanjut, atau sebaiknya dialihkan.
            - rekomendasi_mata_pelajaran (sesuai kategori):,
              * Realistic: ["Fisika", "Kimia"],
              * Investigative: ["Biologi", "Fisika", "Kimia"],
              * Artistic: ["Sosiologi", "Geografi"],
              * Social: ["Sosiologi", "Ekonomi"],
              * Enterprising: ["Ekonomi", "Geografi"],
              * Conventional: ["Ekonomi", "Sosiologi"]
          4. Urutkan array JSON dari skor tertinggi ke skor terendah.
          5. Gunakan bahasa Indonesia yang ringkas dan profesional.
          Contoh output JSON:
          [
            {
              "nama_category": "Investigative",
              "deskripsi_category": "Suka menganalisis dan memecahkan masalah secara logis.",
              "skor": 80,
              "alasan_kecocokan": "Skor tinggi menunjukkan Anda sangat tertarik pada kegiatan riset dan pemecahan masalah.",
              "rekomendasi_mata_pelajaran": ["Biologi", "Fisika", "Kimia"]
            },
          {
              "nama_category": "Artistic",
              "deskripsi_category": "Kreatif dan ekspresif dalam karya seni dan inovasi.",
              "skor": 60,
              "alasan_kecocokan": "Skor sedang menandakan ketertarikan cukup pada bidang kreativitas.",
              "rekomendasi_mata_pelajaran": ["Sosiologi", "Geografi"]
            },
            ...
          ]
          ---
          Berikut data hasil yang harus Anda proses:  
          ${hasil}
          ---
          Berikan hasil dalam format JSON valid. Jangan beri teks pembuka atau penjelasan apa pun. Langsung mulai dari tanda kurung kurawal pembuka dan akhiri dengan kurung kurawal penutup.

          `
        }
      ],
      model: 'meta-llama/Llama-3-70b-chat-hf'
    })
    const rekomendasi = chat.choices[0].message.content
    const hasilRiasec: RIASECResult[] = JSON.parse(rekomendasi!)
    console.log(hasilRiasec)

    const categoryTitle = await together.chat.completions.create({
      messages: [
        {
  role: 'system',
  content: `Anda adalah pakar karier yang hanya merespons dalam format JSON.`
},
{
  role: "user",
  content: `
Tugas Anda adalah menganalisis hasil kuis RIASEC berikut:
${rekomendasi}
Data berisi array dari kategori RIASEC. Setiap item memiliki:
- nama_category: nama tipe RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, atau Conventional)
- skor: angka dari 0 hingga 100 yang menunjukkan skor siswa pada kategori tersebut
Tugas Anda:
1. Saring semua kategori yang memiliki skor antara 70 hingga 90 (inklusif)
2. Dari hasil penyaringan tersebut, pilih satu kategori dengan skor tertinggi
3. Jika ada lebih dari satu kategori dengan skor tertinggi yang sama, pilih salah satu secara acak
Hanya kembalikan respons JSON dengan format berikut:
{
  "title": "nama_category - [tambahan judul]",
  "description": "Penjelasan singkat dalam Bahasa Indonesia"
}
Pastikan Anda memilih kategori dengan skor tertinggi dari daftar yang telah disaring, bukan skor terkecil.
hanya respon menggunakan JSON
`
}
      ],
      model: 'meta-llama/Llama-3-70b-chat-hf'
    })
    const hasilTitle = categoryTitle.choices[0].message.content
    console.log(hasilTitle)
    const categoryTitleJson = JSON.parse(hasilTitle!)
    if(session){
      const categoryresult = await prisma.categoryResult.create({
        data: {
          title: categoryTitleJson.title as string, 
          user_id: parseInt(`${session?.user?.id}`)
        }
      })
      const categoryItemResult = await Promise.all(
      hasilRiasec.map(async (data) => {
        const result = await prisma.categoryResultItems.create({
          data: {
            category_id: categoryresult.id,
            nama_category: data.nama_category,
            deskripsi_category: data.deskripsi_category,
            alasan_kecocokan: data.alasan_kecocokan,
            skor: data.skor,
            rekomendasi_mata_pelajaran: data.rekomendasi_mata_pelajaran
          }
        });
        return result;
      })
    );
      return NextResponse.json({
        categoryId: categoryresult.id,
        hasil: categoryItemResult
      }, {
        status: 200
      })
    }
    return NextResponse.json(hasilRiasec)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      error: 'server error' + error
    }, 
    {
      status: 500
    }
  )
  }
}