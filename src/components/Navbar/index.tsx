"use client";

import { BotMessageSquare, Menu, X } from "lucide-react";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function qqqNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="w-full px-8 md:px-20 py-5 flex items-center justify-between text-[#141414] bg-[#ffffff] border-b border-b-[#efe8e8] relative">
      <ul className="hidden md:flex gap-7">
        <li>
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <BotMessageSquare />
        <h1 className="text-2xl font-semibold">MinatKu</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <button
              onClick={() => {
                console.log("click");
                signOut({ redirectTo: "/" });
              }}
              className="hidden md:block bg-[#141414] text-white py-2 px-5 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="hidden md:block">
                Sign In
              </Link>
              <Link
                href="/register"
                className="hidden md:block bg-[#141414] text-white py-2 px-5 rounded-lg"
              >
                Sign Up free
              </Link>
            </>
          )}
        </div>

        <div
          className={`absolute left-0 w-full bg-[#515151] text-white shadow-md flex flex-col items-center space-y-4 py-4 z-50 pb-10 md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-full translate-y-0 opacity-100"
              : "top-full -translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold"
          >
            About
          </Link>
          <div className="mt-10">
            <Link
              href="/login"
              className="bg-[#181C14] text-white font-semibold py-3 px-24 rounded-xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
