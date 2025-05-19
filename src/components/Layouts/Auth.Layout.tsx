import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout(props: any) {
  const { title, type, children } = props;
  return (
    <div className="text-white flex justify-center items-center h-screen px-8">
      <div className="md:max-w-[500px] bg-[#3C3D37] rounded-2xl p-5 md:p-10">
        <Link href="/" className="text-center flex items-center">
          <ChevronLeft />
          MinatKu
        </Link>
        <h1 className="text-center font-semibold text-3xl my-3 md:text-4xl">{title}</h1>
        <p className="text-[#cac5c5] text-center my-6">
          {/* {type === "login"
            ? "Masuk untuk mulai menemukan mata pelajaran yang paling cocok dengan minat dan potensimu."
            : "Buat akun untuk mulai menjelajahi rekomendasi mata pelajaran yang sesuai dengan minat dan potensimu."} */}
        </p>

        {children}

        <p className="text-[#cac5c5] text-center">
          {type === "login"
            ? "Belum memiliki akun ? "
            : "Sudah memiliki akun ? "}
          {type === "login" && (
            <Link href="/register" className="text-white font-semibold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link href="/login" className="text-white font-semibold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
