"use client";

import { useEffect, useState } from "react";
import {
  ChevronUp,
  Ellipsis,
  PanelLeftClose,
  PanelRightOpen,
  Pencil,
  PencilLine,
  Trash2,
  User2,
} from "lucide-react";
import Link from "next/link";
import { CategoryResult } from "@prisma/client";
import { useSession } from "next-auth/react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const [category, setCategory] = useState<CategoryResult[]>([]);
  const { data: session } = useSession();

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/category/${id}`);
      console.log(response.data);
      setCategory((prevCategory) =>
        prevCategory.filter((item) => item.id !== parseInt(id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fecthCategory = async () => {
      try {
        const response = await axios.get("/api/category");
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (session) {
      fecthCategory();
      console.log(category);
    }
  }, [session]);

  return (
    <div className="min-h-screen relative">
      {/* Sidebar (Fixed) */}
      <div
        className={`
          fixed top-0 left-0 h-full 
          ${showSidebar ? "w-64" : "w-0"} 
          bg-[#096964] text-white overflow-hidden
          transition-all duration-300 ease-in-out z-50
        `}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg text-white font-bold">
              <Link href="/">MinatKu</Link>
            </h1>
            <button
              onClick={() => setShowSidebar(false)}
              className="md:inline-block "
            >
              <PanelLeftClose size={20} />
            </button>
          </div>

          <div className="space-y-3 mb-6">
            {pathname.startsWith("/ai/quiz") ? (
              <button
                className="bg-white text-black flex justify-center items-center py-2 rounded w-full"
                onClick={() => window.location.reload()}
              >
                Quiz Baru
              </button>
            ) : (
              <Link
                href="/ai/quiz"
                className="bg-white text-black flex justify-center items-center py-2 rounded"
              >
                Quiz Baru
              </Link>
            )}
            <div className="flex flex-col mt-10 gap-3">
              <p className="">Obrolan</p>
              <div className="h-[300px] overflow-y-auto hide-scrollbar">
                {category
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((value, index) => (
                    <div
                      key={index}
                      className={`group py-2 px-2 rounded-md max-w-2xl hover:bg-[#BFDDFC]/50 flex items-center justify-between ${
                        pathname.startsWith(`/ai/hasil/${value.id}`)
                          ? "bg-[#BFDDFC]/50"
                          : ""
                      }`}
                    >
                      {/* Bagian Link ke detail hasil */}
                      <Link
                        href={`/ai/hasil/${value.id}`}
                        className="truncate flex-1"
                      >
                        {value.title}
                      </Link>

                      {/* Dropdown hanya muncul saat hover */}
                      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="p-0 h-6 w-6"
                            >
                              <Ellipsis />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="top" align="end">
                            <DropdownMenuItem>
                              <span className="flex items-center gap-3">
                                <Pencil />
                                Ganti nama
                              </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(value.id.toString())}
                            >
                              <span className="flex items-center gap-3 text-red-400">
                                <Trash2 className="text-red-400" />
                                Hapus
                              </span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {session ? (
            <div className="mt-auto py-2 rounded-md">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <User2 />
                      <span>{session.user.username}</span>
                    </div>
                    <ChevronUp />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  align="end"
                  className="w-[--radix-popper-anchor-width] bg-white"
                >
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("click");
                      signOut({ redirectTo: "/" });
                    }}
                  >
                    <button>Sign out</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="mt-auto text-center text-sm">
              <p className="mb-3">Masuk untuk simpan riwayat</p>
              <button className="bg-[#265572] text-white px-4 py-2 rounded">
                Masuk
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Konten Utama */}
      <div
        className={`
          transition-all duration-300 ease-in-out 
          ${showSidebar ? "md:ml-64" : "ml-0"}
        `}
      >
        {/* Tombol Toggle Sidebar */}
        {!showSidebar && (
          <div className="p-4">
            <button onClick={() => setShowSidebar(true)}>
              <PanelRightOpen className="text-[#141414] fixed" />
            </button>
          </div>
        )}

        {/* Isi konten */}
        <div className="p-6 text-white">{children}</div>
      </div>
    </div>
  );
}
