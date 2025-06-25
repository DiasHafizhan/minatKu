"use client";

import HasilQuiz from "@/components/Layouts/Result.Layout";
import { useState } from "react";

const quizData = [
  { question: "Aku suka bongkar pasang barang elektronik atau motor" },
  {
    question:
      "Aku senang ikut bantu saat ada kegiatan kerja bakti atau bersih-bersih",
  },
  { question: "Aku lebih suka praktek langsung daripada belajar dari buku" },
  {
    question:
      "Aku suka kegiatan seperti berkebun, beternak, atau memelihara tanaman",
  },
  { question: "Aku tertarik dengan hal-hal berbau teknik atau permesinan" },

  {
    question: "Aku suka cari tahu kenapa sesuatu bisa terjadi, kayak detektif",
  },
  { question: "Aku suka nonton video eksperimen atau sains di YouTube" },
  { question: "Aku betah ngerjain soal matematika atau logika yang menantang" },
  { question: "Aku pernah googling sesuatu hanya karena penasaran banget" },
  {
    question:
      "Aku lebih suka tugas yang butuh mikir daripada kerja kelompok ramai-ramai",
  },

  { question: "Aku suka bikin doodle, gambar, atau desain di waktu luang" },
  { question: "Aku pernah nulis puisi, cerita, atau lirik lagu sendiri" },
  { question: "Aku suka banget ngedit foto, video, atau bikin konten" },
  { question: "Aku lebih suka tugas kreatif daripada tugas hitungan" },
  { question: "Aku ngerasa punya cara berpikir yang beda dari orang lain" },

  { question: "Aku suka bantu temanku yang kesulitan ngerjain tugas" },
  { question: "Aku senang ngobrol dan dengerin curhat orang" },
  { question: "Aku aktif ikut organisasi atau kegiatan sosial di sekolah" },
  { question: "Aku senang ngajarin teman sampai dia ngerti" },
  { question: "Aku suka jadi tempat curhat atau tempat tanya" },

  { question: "Aku suka jadi ketua kelompok atau ngatur jalannya diskusi" },
  { question: "Aku tertarik buka bisnis sendiri suatu hari nanti" },
  { question: "Aku pernah bikin ide acara atau kegiatan di sekolah" },
  {
    question:
      "Aku suka ikut lomba debat, presentasi, atau yang butuh tampil percaya diri",
  },
  { question: "Aku suka ngajak orang ikut ide atau proyek yang aku buat" },

  { question: "Aku suka menyusun jadwal belajarku sendiri" },
  { question: "Aku suka mencatat pelajaran dengan rapi dan lengkap" },
  { question: "Aku nyaman dengan pekerjaan yang punya aturan jelas" },
  { question: "Aku teliti banget kalau ngerjain soal atau tugas" },
  { question: "Aku suka ngatur data, file, atau dokumen biar rapi" },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [hasil, setHasil] = useState<string[]>([]);

  const handleAnswer = (answer: any) => {
    console.log(`Jawaban untuk soal ${current + 1}:`, answer);
    setAnswered(true);
    setHasil((prev) => [...prev, `${quizData[current].question} ${answer}`]);
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setAnswered(false);
    }, 500);
  };

  if (current >= quizData.length) {
    return <HasilQuiz data={hasil} />;
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex justify-between items-center w-full bg-[#096964]/70 p-7 rounded-lg">
        <h3 className="text-xl text-white font-bold">
          Soal {current + 1} dari {quizData.length}
        </h3>
        <h3 className="text-xl font-bold">Tes RIASEC</h3>
      </div>
      <div className="min-h-[450px] flex flex-col gap-14 justify-center items-center">
        <h1 className="text-2xl md:text-3xl max-w-[750px] text-black font-bold text-center mb-8">
          {quizData[current].question}
        </h1>
        <div className="flex justify-center items-center gap-12 max-w-[750px]">
          <button
            className="px-24 py-4 bg-white text-lg font-semibold text-black rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#096964] cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={() => handleAnswer("Ya")}
            disabled={answered}
          >
            Ya
          </button>
          <button
            className="px-24 py-4 bg-white text-lg font-semibold text-black rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#096964] cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onClick={() => handleAnswer("Tidak")}
            disabled={answered}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
}
