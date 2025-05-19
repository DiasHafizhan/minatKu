import CardHome from "@/components/Fragments/CardHome";
import {
  Brain,
  ClipboardList,
  Compass,
  Globe,
  HeartHandshake,
  HomeIcon,
  Microscope,
  Palette,
  ShieldCheck,
  Target,
  UserRoundCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-8 md:px-20 bg-[#0F1214] text-white">
      {/* Section 1 */}
      <div className="md:py-36 py-20 text-center">
        <p className="text-lg font-semibold mb-6">MinatKu</p>
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">
          Selamat Datang di Sistem Rekomendasi{" "}
          <span className="text-[#cac5c5]">MinatKu</span>
        </h1>
        <p className="md:max-w-[750px] text-[#cac5c5] text-base m-auto">
          Solusi AI canggih untuk membantu siswa memilih mata pelajaran yang
          paling sesuai secara akurat dan personal demi masa depan pendidikan
          yang lebih terarah.
        </p>
        <div className="mt-10">
          <Link
            href="/ai/quiz"
            className="px-5 py-3 bg-[#3C3D37] transition duration-300 ease-in-out hover:bg-[#181C14] rounded-full"
          >
            Try MinatKu
          </Link>
        </div>
      </div>
      {/* Section 1 */}

      {/* Section 2 */}
      <div className="flex flex-wrap mb-20">
        <div className="w-full md:w-[45%]">
          <p className="text-lg text-center md:text-left font-semibold mb-5">
            Hanya Selangkah Lagi!
          </p>
          <h2 className="text-4xl md:text-left font-semibold text-center md:max-w-[85%]">
            Gunakan teknologi untuk mendukung masa depanmu!
          </h2>
          <p className=" md:text-left max-w-[85%] md:max-w-[85%] mt-8">
            Temukan mata pelajaran yang paling sesuai dengan minat dan potensimu
            melalui sistem rekomendasi berbasis AI. Belajar jadi lebih terarah,
            keputusan jadi lebih yakin, masa depan jadi lebih cerah!
          </p>
        </div>
        <div className="w-full mt-10 md:w-[55%] flex flex-wrap">
          <div className="flex w-1/2 pb-10">
            <UserRoundCheck className="w-40" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Rekomendasi Personal
              </h3>
              <p className="text-base text-[#cac5c5]">
                Memberikan saran mata pelajaran sesuai minat dan kemampuan.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 pb-10">
            <Compass className="w-40" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Pengambilan Keputusan Lebih Terarah
              </h3>
              <p className="text-base text-[#cac5c5]">
                Membantu siswa memilih pelajaran berdasarkan data, bukan
                ikut-ikutan.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 pb-10">
            <Zap className="w-40" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Meningkatkan Motivasi Belajar
              </h3>
              <p className="text-base text-[#cac5c5]">
                Pilihan yang sesuai membuat siswa lebih semangat belajar.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 pb-10">
            <Brain className="w-40" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Mengenal Potensi Diri Lebih Awal
              </h3>
              <p className="text-base text-[#cac5c5]">
                Membantu siswa mengetahui bakat dan minat mereka sejak dini.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 pb-10">
            <ShieldCheck className="w-40" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Mengurangi Risiko Pindah Jurusan
              </h3>
              <p className="text-base text-[#cac5c5]">
                Pilihan yang tepat menghindarkan siswa dari perasaan salah
                jurusan.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 pb-10">
            <Globe className="w-32" />
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Akses Mudah dan Cepat
              </h3>
              <p className="text-base text-[#cac5c5]">
                Website bisa diakses kapan saja dan di mana saja.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}

      {/* section 3 */}
      <div className="w-full my-20">
        <h1 className="text-3xl text-center font-bold mb-10 max-w-[500px] mx-auto">
          Kenalan dengan RIASEC: Kunci Menemukan Minat & Potensimu!
        </h1>
        <p className="text-[#cac5c5] mb-16 max-w-[700px] mx-auto text-center">
          Temukan potensi dan jalur belajarmu yang paling cocok dengan Tes
          RIASEC—praktis, cepat, dan bantu kamu melangkah lebih yakin ke masa
          depan!
        </p>
        <div className="flex flex-wrap gap-3">
          <CardHome
            classname="md:w-[32%]"
            title="Realistic (R)"
            desc="Suka kerja fisik & alat. Cocok di teknik, mesin, atau lapangan."
          >
            <Wrench className="w-28" />
          </CardHome>
          <CardHome
            classname="md:w-[32%]"
            title="Investigative (I)"
            desc="Analitis & suka riset. Cocok di sains, IT, atau medis."
          >
            <Microscope className="w-28" />
          </CardHome>
          <CardHome
            classname="md:w-[32%]"
            title="Artistic (A)"
            desc="Kreatif & ekspresif. Cocok di seni, desain, atau media."
          >
            <Palette className="w-28" />
          </CardHome>
          <CardHome
            classname="md:w-[32%]"
            title="Social (S)"
            desc="Suka bantu orang. Cocok di pendidikan & layanan sosial."
          >
            <HeartHandshake className="w-28" />
          </CardHome>
          <CardHome
            classname="md:w-[32%]"
            title="Enterprising (E)"
            desc="Pemimpin & persuasif. Cocok di bisnis & manajemen."
          >
            <Target className="w-28" />
          </CardHome>
          <CardHome
            classname="md:w-[32%]"
            title="Conventional (C)"
            desc="Rapi & suka aturan. Cocok di administrasi & akuntansi."
          >
            <ClipboardList className="w-28" />
          </CardHome>
        </div>
        <div className=""></div>
      </div>
      {/* section 3 */}
      {/* Sectoin 4 */}
      <div className="bg-[#1D232A] py-12 px-8 md:px-24 rounded-3xl">
        <h1 className="text-center text-3xl font-semibold mb-16">
          Pertanyaan yang Sering Diajukan
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-lg font-semibold">
            Apakah data siswa aman digunakan di website ini?
          </p>
          <p className="text-[#cac5c5]">
            Tentu. Data yang dimasukkan oleh siswa hanya digunakan untuk
            keperluan rekomendasi dan tidak akan dibagikan ke pihak ketiga.
            Privasi pengguna menjadi prioritas kami.
          </p>
        </div>
        <div className="mb-8">
          <p className="mb-4 text-lg font-semibold">
            Bisakah sistem ini menggantikan peran guru BK?
          </p>
          <p className="text-[#cac5c5]">
            Tidak. Sistem ini dirancang sebagai alat bantu, bukan pengganti.
            Peran guru BK tetap penting dalam memberikan arahan dan konsultasi
            lanjutan.
          </p>
        </div>
        <div className="mb-8">
          <p className="mb-4 text-lg font-semibold">
            Apakah sistem ini berbayar?
          </p>
          <p className="text-[#cac5c5]">
            Tidak. Website ini disediakan secara gratis untuk mendukung
            pembelajaran siswa dan membantu mereka meraih masa depan yang lebih
            cerah.
          </p>
        </div>
      </div>
      {/* Sectoin 4 */}
    </div>
  );
}
