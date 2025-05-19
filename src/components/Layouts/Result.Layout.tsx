"use client";

import { RIASECResult } from "@/lib/type";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PieChartComponent } from "../Fragments/PieChart";

export default function HasilQuiz({ data }: { data: string[] }) {
  const [hasil, setHasil] = useState<RIASECResult[] | undefined>(undefined);

  useEffect(() => {
    async function fetchRekomendation() {
      try {
        const res = await axios.post("/api/analisa", { hasil: data });
        console.log(res.data);
        setHasil(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRekomendation();
  }, [data]);

  if (hasil == undefined) {
    return null;
  }

  return (
    <div className="">
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-2xl font-bold">Quiz Selesai! 🎉</h1>
        <p>Tes Identifikasi Minat</p>
      </div>

      <div className="flex flex-wrap gap-6 mb-20 items-center">
        <div className="md:w-[48%] w-full p-3 bg-gray-500 rounded-lg">
          <h2 className="text-2xl font-bold mb-3 ml-4">
            Persentase Tes RIASEC
          </h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-400">
                <th className="py-2 px-4">Mata Pelajaran</th>
                <th className="py-2 px-4">Skor</th>
                <th className="py-2 px-4">Persentase</th>
              </tr>
            </thead>
            <tbody>
              {hasil?.map((value, index) => (
                <tr className="text-white" key={index}>
                  <td className="py-2 px-4">{value.nama_category}</td>
                  <td className="py-2 px-4">{value.skor}</td>
                  <td className="py-2 px-4">{value.skor}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:w-[48%] w-full p-3 bg-gray-500 rounded-lg">
          <h2 className="text-2xl font-bold mb-3 ml-4">
            Persentase Tes Minat RIASEC
          </h2>
          <PieChartComponent data={hasil} />
        </div>
      </div>

      <div className="w-full mb-16 text-center">
        <h3>I E C</h3>
        <p>
          Kamu adalah orang yang berminat pada pekerjaan Investigative, cukup
          menyenangi pekerjaan Enterprising dan agak menyukai pekerjaan
          Conventional.
        </p>
      </div>

      <div className="">
        {hasil.map((value, index) => (
          <div className="mb-10" key={index}>
            <h1 className="mb-6">Investigative</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae reiciendis minus, a ea laborum corrupti harum ab nihil iste
              ipsa fugiat nostrum aut distinctio at animi! Qui esse quas ipsa
              quia, fugiat dicta molestias quasi recusandae vel labore
              exercitationem?
            </p>
          </div>
        ))}
        <div className="mb-10">
          <h1 className="mb-6">Enterprising</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            quae reiciendis minus, a ea laborum corrupti harum ab nihil iste
            ipsa fugiat nostrum aut distinctio at animi! Qui esse quas ipsa
            quia, fugiat dicta molestias quasi recusandae vel labore
            exercitationem?
          </p>
        </div>
        <div className="mb-10">
          <h1 className="mb-6">Conventional</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            quae reiciendis minus, a ea laborum corrupti harum ab nihil iste
            ipsa fugiat nostrum aut distinctio at animi! Qui esse quas ipsa
            quia, fugiat dicta molestias quasi recusandae vel labore
            exercitationem?
          </p>
        </div>

        <Link
          href="/ai"
          className="px-5 py-3 bg-[#3C3D37] transition duration-300 ease-in-out hover:bg-[#181C14] rounded-full"
        >
          Konsultasi dengan AI
        </Link>
      </div>
      {/* {data.map((value,index) => (
        <p key={index}>
          {value}
        </p>
      ))} */}
    </div>
  );
}
