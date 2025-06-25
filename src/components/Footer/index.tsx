import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-6 sm:px-8 md:px-10">
      <div className="w-full bg-[#096964] rounded-lg p-6 sm:p-10 mb-5 mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-semibold mb-4">
          Start Your <span className="text-[#AAFFA9]">Journey</span> with
          MinatKu
        </h1>
        <p className="text-white text-sm sm:text-base">
          Let AI help you choose the right subjects for a brighter and clearer
          future.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/ai/quiz"
            className="px-10 py-2 bg-white text-[#141414] text-center rounded-lg transition duration-300 ease-in-out hover:bg-[#c1c1c1]"
          >
            Start for free
          </Link>
          <Link
            href="/ai/quiz"
            className="px-10 py-2 bg-[#141414] text-white text-center transition duration-300 ease-in-out hover:bg-[#262626] rounded-lg"
          >
            Try MinatKu
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between text-white mt-10 gap-6 text-sm sm:text-base">
          <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
          </ul>
          <p className="text-white">MinatKu 2025. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
