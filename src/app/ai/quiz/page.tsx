"use client";

import HasilQuiz from "@/components/Layouts/Result.Layout";
import { Statement } from "@/types/type";
import { useState } from "react";

const quizData: Statement[] = [
  {
    question: "Aku suka bongkar pasang barang elektronik atau motor",
    type: "Realistic",
    answer: false,
  },
  {
    question:
      "Aku senang ikut bantu saat ada kegiatan kerja bakti atau bersih-bersih",
    type: "Realistic",
    answer: false,
  },
  {
    question: "Aku lebih suka praktek langsung daripada belajar dari buku",
    type: "Realistic",
    answer: false,
  },
  {
    question:
      "Aku suka kegiatan seperti berkebun, beternak, atau memelihara tanaman",
    type: "Realistic",
    answer: false,
  },
  {
    question: "Aku tertarik dengan hal-hal berbau teknik atau permesinan",
    type: "Realistic",
    answer: false,
  },
  {
    question: "Aku suka cari tahu kenapa sesuatu bisa terjadi, kayak detektif",
    type: "Investigative",
    answer: false,
  },
  {
    question: "Aku suka nonton video eksperimen atau sains di YouTube",
    type: "Investigative",
    answer: false,
  },
  {
    question: "Aku betah ngerjain soal matematika atau logika yang menantang",
    type: "Investigative",
    answer: false,
  },
  {
    question: "Aku pernah googling sesuatu hanya karena penasaran banget",
    type: "Investigative",
    answer: false,
  },
  {
    question:
      "Aku lebih suka tugas yang butuh mikir daripada kerja kelompok ramai-ramai",
    type: "Investigative",
    answer: false,
  },
  {
    question: "Aku suka bikin doodle, gambar, atau desain di waktu luang",
    type: "Artistic",
    answer: false,
  },
  {
    question: "Aku pernah nulis puisi, cerita, atau lirik lagu sendiri",
    type: "Artistic",
    answer: false,
  },
  {
    question: "Aku suka banget ngedit foto, video, atau bikin konten",
    type: "Artistic",
    answer: false,
  },
  {
    question: "Aku lebih suka tugas kreatif daripada tugas hitungan",
    type: "Artistic",
    answer: false,
  },
  {
    question: "Aku ngerasa punya cara berpikir yang beda dari orang lain",
    type: "Artistic",
    answer: false,
  },
  {
    question: "Aku suka bantu temanku yang kesulitan ngerjain tugas",
    type: "Social",
    answer: false,
  },
  {
    question: "Aku senang ngobrol dan dengerin curhat orang",
    type: "Social",
    answer: false,
  },
  {
    question: "Aku aktif ikut organisasi atau kegiatan sosial di sekolah",
    type: "Social",
    answer: false,
  },
  {
    question: "Aku senang ngajarin teman sampai dia ngerti",
    type: "Social",
    answer: false,
  },
  {
    question: "Aku suka jadi tempat curhat atau tempat tanya",
    type: "Social",
    answer: false,
  },
  {
    question: "Aku suka jadi ketua kelompok atau ngatur jalannya diskusi",
    type: "Enterprising",
    answer: false,
  },
  {
    question: "Aku tertarik buka bisnis sendiri suatu hari nanti",
    type: "Enterprising",
    answer: false,
  },
  {
    question: "Aku pernah bikin ide acara atau kegiatan di sekolah",
    type: "Enterprising",
    answer: false,
  },
  {
    question:
      "Aku suka ikut lomba debat, presentasi, atau yang butuh tampil percaya diri",
    type: "Enterprising",
    answer: false,
  },
  {
    question: "Aku suka ngajak orang ikut ide atau proyek yang aku buat",
    type: "Enterprising",
    answer: false,
  },
  {
    question: "Aku suka menyusun jadwal belajarku sendiri",
    type: "Conventional",
    answer: false,
  },
  {
    question: "Aku suka mencatat pelajaran dengan rapi dan lengkap",
    type: "Conventional",
    answer: false,
  },
  {
    question: "Aku nyaman dengan pekerjaan yang punya aturan jelas",
    type: "Conventional",
    answer: false,
  },
  {
    question: "Aku teliti banget kalau ngerjain soal atau tugas",
    type: "Conventional",
    answer: false,
  },
  {
    question: "Aku suka ngatur data, file, atau dokumen biar rapi",
    type: "Conventional",
    answer: false,
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [hasil, setHasil] = useState<Statement[]>([]);

  const handleAnswer = (jawaban: string) => {
    setAnswered(true);

    setHasil((prev) => [
      ...prev,
      {
        question: quizData[current].question,
        type: quizData[current].type,
        answer: jawaban === "Ya" ? true : false,
      },
    ]);

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
