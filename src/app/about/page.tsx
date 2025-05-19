import { Bot, Code, Database } from "lucide-react";

export default function About() {
  return (
    <div className="px-8 md:px-20">
      <p className="text-white font-semibold text-lg my-10">About Us</p>
      <h2 className="text-white text-4xl font-semibold mb-14">Our Story</h2>

      {/* section 1 */}
      <div className="flex flex-wrap items-center">
        <div className="pr-10 mb-8 w-full md:w-[492px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661779091139-7c8caf3d41ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0dWRlbnR8ZW58MHwwfDB8fHww"
            className="w-full rounded-2xl"
            alt=""
          />
        </div>
        <div className="w-full md:max-w-[55%]">
          <h1 className="text-2xl font-semibold text-white mb-8">
            Menyatukan teknologi dan empati untuk membantu siswa memilih masa
            depan yang tepat
          </h1>
          <p className="text-[#cac5c5]">
            Kami menggabungkan kecerdasan buatan dan pemahaman mendalam tentang
            pendidikan untuk menghadirkan solusi cerdas bagi siswa. Dengan
            pendekatan berbasis data dan AI generatif, Minatku membantu
            mengarahkan siswa pada pilihan mata pelajaran dan peminatan yang
            paling sesuai dengan potensi dan minat mereka demi masa depan yang
            lebih cerah dan terarah.
          </p>
        </div>
      </div>
      {/* section 1 */}

      {/* section 2 */}
      <div className="mt-28 flex flex-wrap items-center">
        <div className="flex flex-col w-full md:w-[45%] ">
          <h2 className="text-4xl font-semibold text-white mb-8">
            Teknologi Kami
          </h2>
          <p className="text-[#cac5c5] max-w-[85%]">
            Dengan menjunjung tinggi inovasi, kolaborasi, dan keandalan, kami
            membangun teknologi cerdas yang dirancang untuk memberikan
            pengalaman belajar yang personal, relevan, dan bermakna bagi setiap
            siswa.
          </p>
        </div>
        <div className="flex flex-wrap md:w-1/2 mt-8">
          <div className="bg-[#1D232A] flex items-center rounded-2xl py-5 px-5 mb-3">
            <Code className="text-white w-[100px]" />
            <div className="text-white">
              <h3 className="mb-2 text-xl font-semibold">Next.js</h3>
              <p className="text-[#cac5c5]">
                Framework web modern berbasis React yang cepat, efisien, dan
                mendukung rendering server-side.
              </p>
            </div>
          </div>
          <div className="bg-[#1D232A] flex items-center rounded-2xl py-5 px-5 mb-3">
            <Bot className="text-white w-[100px]" />
            <div className="text-white">
              <h3 className="mb-2 text-xl font-semibold">AI Generatif</h3>
              <p className="text-[#cac5c5]">
                Teknologi kecerdasan buatan yang menghasilkan rekomendasi
                personal berdasarkan pola dan data pengguna.
              </p>
            </div>
          </div>
          <div className="bg-[#1D232A] flex items-center rounded-2xl py-5 px-5 mb-3">
            <Database className="text-white w-[100px]" />
            <div className="text-white">
              <h3 className="mb-2 text-xl font-semibold">
                Rekomendasi Berbasis Data
              </h3>
              <p className="text-[#cac5c5]">
                Sistem analitik yang memberikan saran mata pelajaran berdasarkan
                data nilai, minat, dan preferensi siswa.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
    </div>
  );
}
