"use client";

import CardHome from "@/components/Fragments/CardHome";
import {
  Brain,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Handshake,
  Microscope,
  Palette,
  Rocket,
  Target,
  Terminal,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className="w-full px-4 sm:px-8 md:px-20 bg-white text-[#141414]">
      {/* Section 1 */}
      <div className="py-16 md:py-36 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-5">
          Personalize Your <br />
          <span className="text-[#096964]">Passion</span>
        </h1>
        <p className="max-w-xl md:max-w-[750px] mx-auto text-base font-medium">
          Personalized subject recommendations, just for you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/rules"
            className="px-10 py-3 bg-[#141414] text-white rounded-lg transition duration-300 ease-in-out hover:bg-[#262626] text-center"
          >
            Start for free
          </Link>
          <Link
            href={session ? `/ai/quiz` : `/login`}
            className="px-10 py-3 bg-[#096964] text-white transition duration-300 ease-in-out hover:bg-[#447f7c] rounded-lg text-center"
          >
            Try MinatKu
          </Link>
        </div>
        <div className="mt-10">
          <p>Using these technologies</p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Terminal />
              <p className="font-bold text-lg sm:text-xl">Next.js</p>
            </div>
            <div className="flex items-center gap-3">
              <Database />
              <p className="font-bold text-lg sm:text-xl">PostgreSQL</p>
            </div>
            <div className="flex items-center gap-3">
              <BrainCircuit />
              <p className="font-bold text-lg sm:text-xl">Generative AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-20">
        <div className="w-full bg-[#BFDDFC]/50 mx-auto flex flex-col items-center justify-center text-center rounded-lg p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-3xl">
            Find What Fits You Best!
          </h2>
          <p className="mt-5 max-w-xl md:max-w-[50%] text-center">
            Use smart tech to discover subjects that match your interests and
            potential. Make learning feel right, and your future feel brighter.
          </p>
          <div className="w-full mt-10 flex flex-col md:flex-row flex-wrap justify-center gap-6">
            <CardHome
              title="More Focused Decisions"
              desc="Helping students choose subjects based on data not just following the crowd."
            >
              <Target className="w-32 md:w-40" />
            </CardHome>
            <CardHome
              title="Know Yourself Sooner"
              desc="Helping students discover their strengths and interests early on."
            >
              <Brain className="w-32 md:w-40" />
            </CardHome>
            <CardHome
              title="Boost Learning Motivation"
              desc="The right choices make learning more exciting and meaningful."
            >
              <Rocket className="w-32 md:w-40" />
            </CardHome>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full mt-20 mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-14 mx-auto">
          See What Matters <br /> Backed by Data
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-[50%] px-4">
              <h1 className="text-2xl md:text-3xl mb-4 font-bold">
                Subject Preference Breakdown
              </h1>
              <p className="text-black/60">
                See how your interests are distributed across different
                subjects. This table shows the percentage and score for each
                subject area based on your quiz results helping you understand
                where your strengths and preferences truly lie.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center">
              <Image
                unoptimized
                width={100}
                height={100}
                src="/tablePersentase.png"
                alt="Tabel Persentase"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="w-full lg:w-[50%] px-4">
              <h1 className="text-2xl md:text-3xl mb-4 font-bold">
                Subject Interest Distribution
              </h1>
              <p className="text-black/60">
                This pie chart visualizes how your interests are spread across
                various subjects. Each section represents how strongly you align
                with a subject area, based on your quiz results — giving you a
                quick and clear overview of your strengths.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center">
              <Image
                unoptimized
                width={100}
                height={100}
                src="/persentasePie.png"
                alt="Tabel Persentase"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIASEC Section */}
      <div className="mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-5">
          Get to Know Yourself <br /> with RIASEC
        </h1>
        <p className="text-center mx-auto max-w-xl text-black/60 mb-10">
          RIASEC is a proven personality framework used to help students
          discover what subjects and careers match their natural interests and
          abilities.
        </p>

        <div className="flex flex-col items-center gap-6 px-4">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <CardHome
              title="Realistic – The Doers"
              desc="Solving problems by doing, not sitting still — hands-on and practical."
            >
              <Wrench className="w-32 md:w-40" />
            </CardHome>
            <CardHome
              title=" Investigative – The Thinkers"
              desc="Loves asking why and how — thinks deeply, explores with curiosity."
            >
              <Microscope className="w-32 md:w-40" />
            </CardHome>
            <CardHome
              title="Artistic – The Creators"
              desc="Expresses through ideas and imagination — free, creative, and original."
            >
              <Palette className="w-32 md:w-40" />
            </CardHome>
          </div>

          <div className="flex flex-wrap justify-center gap-4 w-full">
            <CardHome
              title="Social – The Helpers"
              desc="Finds joy in helping others — friendly, caring, and people-oriented."
            >
              <Handshake className="w-32 md:w-40" />
            </CardHome>
            <CardHome
              title="Enterprising – The Persuaders"
              desc="Leads with energy and confidence — persuasive, ambitious, goal-driven."
            >
              <BriefcaseBusiness className="w-32 md:w-40" />
            </CardHome>
          </div>
        </div>
      </div>
    </div>
  );
}
