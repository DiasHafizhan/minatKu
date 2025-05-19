import { together } from "@/lib/together";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
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
          - deskripsi_category: penjelasan singkat tipe tersebut (gunakan deskripsi di poin 1)
            - skor: skor kategori tersebut (angka dari 0 sampai maksimal sesuai perhitungan)
            - alasan_kecocokan: penjelasan singkat mengapa tipe ini cocok atau tidak, berdasarkan skor yang diperoleh:
                * Skor tinggi (≥ 70): sangat cocok, menunjukkan minat dan bakat kuat di kategori ini.
                * Skor sedang (40-69): cukup cocok, ada ketertarikan sedang terhadap kategori ini.
                * Skor rendah (< 40): kurang cocok, minat di kategori ini rendah.
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

          Tolong hasilkan JSON sesuai instruksi di atas.
          `
        }
      ],
      model: 'meta-llama/Llama-3-70b-chat-hf'
    })
    const rekomendasi = chat.choices[0].message.content
    const rekomendasiJson = JSON.parse(rekomendasi!)
    return NextResponse.json(rekomendasiJson, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({
      error: 'server error' + error
    }, 
    {
      status: 500
    }
  )
  }
}