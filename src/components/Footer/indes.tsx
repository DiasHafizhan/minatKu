import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-16 w-full px-8 md:px-20 py-16 bg-[#1D232A]">
      <div className="flex flex-wrap items-center justify-between border-b border-b-[#595959] pb-10">
        <h2 className="text-3xl font-semibold text-white text-center">MinatKu</h2>
        <div className="md:flex md:gap-10 items-center text-white font-semibold">
          <Link href="" className="mr-3">Home</Link>
          <Link href="" className="mr-3">About</Link>
          <Link href="" className="mr-3">Blog</Link>
        </div>
        <div className="md:flex text-white gap-5 items-center hidden">
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Twitter />
          </Link>
          <Link href="">
            <Linkedin />
          </Link>
          <Link href="">
            <Instagram />
          </Link>
        </div>
        <div className="mx-auto mt-10 md:hidden text-white flex gap-5 items-center">
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Twitter />
          </Link>
          <Link href="">
            <Linkedin />
          </Link>
          <Link href="">
            <Instagram />
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-lg text-white">© 2025 MinatKu AI.</h1>
      </div>
    </div>
  );
}
