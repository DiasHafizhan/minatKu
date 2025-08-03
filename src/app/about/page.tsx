import CardHome from "@/components/Fragments/CardHome";
import { ChartPie, Cpu, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="px-6 sm:px-10 md:px-20 mt-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5">
          We’re Redefining How <span className="text-[#096964]">Students</span>{" "}
          <br className="hidden sm:block" />
          Discover Their Interests
        </h1>
        <p className="max-w-[90%] md:max-w-[700px] text-[#141414] text-base m-auto font-medium">
          MinatKu helps students find the right subjects through smart,
          personalized recommendations powered by AI and proven psychological
          models.
        </p>
      </div>

      <Image width={100} height={100} src="/about.png" alt="" className="w-full rounded-xl mb-24" />

      <div className="my-24 sm:my-32 bg-[#BFDDFC]/50 p-6 sm:p-10 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-5">
            Why Trust MinatKu
          </h2>
          <p className="max-w-[90%] md:max-w-[600px] text-[#141414] text-base m-auto font-medium">
            We’re committed to guiding students through data-driven insights,
            making subject selection smarter and more meaningful.
          </p>
        </div>

        <div className="w-full mt-10 flex flex-wrap justify-center gap-6">
          <CardHome
            title="Backed by Science & AI"
            desc="Uses the proven RIASEC model and Generative AI to provide accurate and personalized subject recommendations."
          >
            <Cpu className="w-32 sm:w-36 md:w-40" />
          </CardHome>
          <CardHome
            title="Clear Visual Insights"
            desc="Understand your results easily with interactive tables, charts, and percentages that highlight your strengths and interests."
          >
            <ChartPie className="w-32 sm:w-36 md:w-40" />
          </CardHome>
          <CardHome
            title="Built for Students"
            desc="Designed to be simple, friendly, and easy to use — helping students make smarter, more confident learning decisions."
          >
            <GraduationCap className="w-32 sm:w-36 md:w-40" />
          </CardHome>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 my-24 sm:my-32">
        {/* LEFT TEXT */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            How MinatKu Works
          </h2>
          <p className="max-w-[100%] md:max-w-[450px] text-[#141414] text-base font-medium">
            MinatKu helps you discover the right subjects through a simple
            process — take a short quiz, chat with our AI assistant, and get
            personalized learning recommendations based on your interests.
          </p>
        </div>

        {/* RIGHT STEP LIST */}
        <div className="flex flex-col gap-6">
          {/* STEP 1 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#096964] flex items-center justify-center text-white z-10">
                1
              </div>
              <div className="h-12 w-[2px] bg-[#096964]"></div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Log In to Your Account
              </h4>
              <p className="text-sm max-w-[500px]">
                Create or log in to your MinatKu account to start your
                personalized journey.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#096964] flex items-center justify-center text-white z-10">
                2
              </div>
              <div className="h-12 w-[2px] bg-[#096964]"></div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Take the RIASEC Quiz
              </h4>
              <p className="text-sm max-w-[500px]">
                Answer a short set of questions to explore your interests and
                potential subject matches.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#096964] flex items-center justify-center text-white z-10">
                3
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                See Your Results & Get Recommendations
              </h4>
              <p className="text-sm max-w-[500px]">
                See your scores with visual insights and consult with our AI to
                get personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
