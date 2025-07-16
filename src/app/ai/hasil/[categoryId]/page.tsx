"use client";

import { RIASECResult } from "@/lib/type";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParams } from "next/navigation";
import { PieChartComponent } from "@/components/Fragments/PieChart";
import Link from "next/link";
import { CategoryResultItems } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useReactToPrint } from "react-to-print";

export default function HasilCategory() {
  const params = useParams<{ categoryId: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasil, setHasil] = useState<RIASECResult[] | undefined>(undefined);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({ contentRef: printRef });

  useEffect(() => {
    async function fetchRekomendation() {
      setIsLoading(true);
      try {
        const res = await axios.get<CategoryResultItems[]>(
          `/api/analisa/${params.categoryId}`
        );
        setHasil(res.data.sort((a, b) => b.skor - a.skor));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRekomendation();
  }, []);

  if (hasil == undefined) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen py-8">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
        <span className="ml-2 text-sm text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Print
        </button>
      </div>
      <div className="mb-20 p-[20px]" ref={printRef}>
        <div className="flex justify-between items-center mb-20 text-black">
          <h1 className="text-2xl font-bold">
            You Did It! Here’s What We Found
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 mb-20">
          <div className="md:w-[48%] h-[340px] w-full p-3 bg-[#096964]/70 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 ml-4">
              Persentase Tes RIASEC
            </h2>
            <Table className="w-full text-left text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead className="py-2 px-4 text-black/70 font-semibold">
                    Mata Pelajaran
                  </TableHead>
                  <TableHead className="py-2 px-4 text-black/70 font-semibold">
                    Skor
                  </TableHead>
                  <TableHead className="text-center py-2 text-black/70 font-semibold">
                    Persentase
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hasil?.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell className="py-2 px-4 font-medium">
                      {value.nama_category}
                    </TableCell>
                    <TableCell className="py-2 px-4">
                      {value.skor / 100}
                    </TableCell>
                    <TableCell className="py-2 px-4 text-center">
                      {value.skor}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="md:w-[48%] w-full rounded-lg">
            <PieChartComponent data={hasil} />
          </div>
        </div>

        <div className="text-black">
          <h2 className="text-xl font-semibold underline underline-offset-8 decoration-[#096964] mb-10">
            Recommended Learning Paths
          </h2>
          {hasil.slice(0, 3).map((value, index) => (
            <div
              className="mb-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-7 rounded-lg"
              key={index}
            >
              <h1 className="mb-6">{value.nama_category}</h1>
              <p>{value.alasan_kecocokan}</p>
              <p>{value.deskripsi_category}</p>
              <p>{value.rekomendasi_mata_pelajaran.join(", ")}</p>
            </div>
          ))}

          <Link
            href={`/ai/chatBot/${params.categoryId}`}
            className="px-5 py-3 bg-[#096964] text-white transition duration-300 ease-in-out hover:bg-[#447f7c] text-center rounded-full"
          >
            Chat with MinatKu
          </Link>
        </div>
      </div>
    </>
  );
}
