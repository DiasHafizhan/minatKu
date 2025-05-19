"use client";

import { useState } from "react";
import { PanelLeftClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen bg-[#202123] relative">
      {/* Sidebar (Fixed) */}
      <div
        className={`
          fixed top-0 left-0 h-full 
          ${showSidebar ? "w-64" : "w-0"} 
          bg-[#202123] text-white overflow-hidden
          transition-all duration-300 ease-in-out z-50
        `}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-bold">
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
            <button className="w-full bg-white text-black px-4 py-2 rounded">
              Quiz Baru
            </button>
          </div>

          <div className="mt-auto text-center text-sm">
            <p className="mb-3">Masuk untuk simpan riwayat</p>
            <button className="bg-[#265572] text-white px-4 py-2 rounded">
              Masuk
            </button>
          </div>
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
              <PanelRightOpen className="text-white fixed" />
            </button>
          </div>
        )}

        {/* Isi konten */}
        <div className="p-6 text-white">{children}</div>
      </div>
    </div>
  );
}
