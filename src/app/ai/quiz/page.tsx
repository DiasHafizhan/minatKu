"use client";

import HasilQuiz from "@/components/Layouts/Result.Layout";
import { useState } from "react";

const quizData = [
  { question: "Saya suka bekerja dengan kendaraan?"},
  { question: "Saya suka mengerjakan teka-teki?" },
  { question: "Saya suka bekerja dalam tim?" },
  { question: "Saya orang yang ambisius, saya menetapkan tujuan untuk diri saya sendiri" },
  { question: "Saya suka mengatur sesuatu (berkas, meja/kantor)" },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [hasil, setHasil] = useState<string[]>([])

  const handleAnswer = (answer: any) => {
    console.log(`Jawaban untuk soal ${current + 1}:`, answer);
    setAnswered(true);
    setHasil((prev) => [...prev, `${quizData[current].question} ${answer}`])
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setAnswered(false);
    }, 500);
  };

  if (current >= quizData.length) {
    return (
      <HasilQuiz data={hasil} />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg text-[#14B8A6] font-bold md:mb-2">
          Soal {current + 1} dari {quizData.length}
        </p>
        <h3 className="text-xl font-bold">Tes RIASEC</h3>
      </div>
      <div className="min-h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl max-w-[750px] font-bold text-center mb-8">
          {quizData[current].question}
        </h1>
        <div className="flex justify-center items-center gap-12">
          <button
            className="bg-white hover:bg-[#6366F1] text-[#1B1B1B] hover:text-white px-6 py-2 rounded-lg text-lg shadow-md transition cursor-pointer"
            onClick={() => handleAnswer("Ya")}
            disabled={answered}
          >
            Ya
          </button>
          <button
            className="bg-white hover:bg-[#6366F1] text-[#1B1B1B] hover:text-white px-6 py-2 rounded-lg text-lg shadow-md transition cursor-pointer"
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
