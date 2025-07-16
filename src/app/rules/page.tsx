import { auth } from "@/auth";
import CardHome from "@/components/Fragments/CardHome";
import Link from "next/link";

export default async function RulePage() {
  const session = await auth();
  return (
    <div className="px-8 md:px-20 my-24">
      <h1 className="text-5xl text-center font-bold mb-4">
        Discover Your Interests & Strengths
      </h1>
      <p className="text-lg text-center font-medium">
        Take the Interest & Talent Quiz
      </p>
      <div className="full mt-10 flex flex-wrap justify-between items-center gap-4 mb-16">
        <CardHome
          title="Read Carefully"
          desc="30 quick statements — read each one carefully and pick what feels right for you."
        >
          <h1 className="text-3xl mx-auto font-bold">1</h1>
        </CardHome>
        <CardHome
          title="Choose Your Answer"
          desc="30 quick statements — read each one carefully and pick what feels right for you."
        >
          <h1 className="text-3xl mx-auto font-bold">2</h1>
        </CardHome>
        <CardHome
          title="Be Honest"
          desc="Don’t worry, there are no wrong answers — just be honest and be yourself!."
        >
          <h1 className="text-3xl mx-auto font-bold">3</h1>
        </CardHome>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={session ? `/ai/quiz` : `/login`}
          className="px-14 py-5 bg-[#141414] text-white rounded-lg transition duration-300 ease-in-out hover:bg-[#262626]"
        >
          Explore My Potential
        </Link>
      </div>
    </div>
  );
}
