"use client"

import { useState } from "react";
import { PanelLeftClose, PanelRightOpen } from "lucide-react";

export default function LayoutWithAnimatedSidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen bg-[#202123] transition-all duration-300 ease-in-out">
      
      {/* Sidebar */}
      <div
        className={`
          ${showSidebar ? 'w-64' : 'w-0'}
          overflow-hidden bg-[#202123] text-white transition-all duration-300 ease-in-out
        `}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Header Sidebar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-bold">MinatKu</h1>
            <button onClick={() => setShowSidebar(false)} className="md:inline-block hidden">
              <PanelLeftClose size={20} />
            </button>
          </div>

          {/* Tombol chat/file */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-white text-black px-4 py-2 rounded">Chat Baru</button>
            <button className="w-full bg-white text-black px-4 py-2 rounded">File Baru</button>
          </div>

          {/* Sisa konten sidebar */}
          <div className="mt-auto text-center text-sm">
            <p className="mb-3">Masuk untuk simpan riwayat</p>
            <button className="bg-[#265572] text-white px-4 py-2 rounded">Masuk</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Toggle Button */}
        {!showSidebar && (
          <div className="p-4">
            <button onClick={() => setShowSidebar(true)}>
              <PanelRightOpen />
            </button>
          </div>
        )}

        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Konten Utama</h2>
          <p>
            Konten ini akan melebar sepenuhnya saat sidebar disembunyikan, dan akan menyempit otomatis jika sidebar tampil.
          </p>
        </div>
      </div>
    </div>
  );
}
