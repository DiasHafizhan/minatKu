"use client";

import axios from "axios";
import { SendHorizontal } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const params = useParams<{ categoryId: string }>()
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      
     const newUserMessage = { role: "user", content: input };

      // 1. Tambahkan pesan user ke messages
      setMessages((prevMessages) => {
        const updated = [...prevMessages, newUserMessage];
        return updated;
      });

      // 2. Kosongkan input
      setInput("");

      // 3. Kirim array messages + newUserMessage ke server
      const response = await axios.post(`/api/chatBot/${params.categoryId}`, {
        message: [...messages, newUserMessage], 
      });

      // 4. Tambahkan bot response ke messages
      const botReply = {
        role: "assistant",
        content: response.data.message,
      };
      
      setMessages((prev) => [...prev, botReply]);

    
    } catch (error) {
      console.log(error)
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl h-full  flex flex-col relative">
        {/* Chat area */}
        <div className="overflow-y-auto p-4 pb-28 space-y-4 flex-1">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-pre-wrap break-words ${
                msg.role === "user"
                  ? "bg-[#D1E2FA] text-black font-medium self-end ml-auto text-right"
                  : "bg-[#D1E2FA] text-black font-medium self-start text-left"
              }`}
              style={{ maxWidth: "75%", width: "fit-content" }}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input bar */}
        <div className="fixed bottom-0 max-w-3xl mx-auto w-full">
          <div
            className={` p-4 bg-white/80 z-10 w-full flex justify-center pb-5 transition-all duration-300`}
          >
            <div className="w-full mb-4 flex items-center gap-2 border border-black/60 rounded-2xl px-4 py-4 shadow-lg">
              <input
                type="text"
                className="flex-grow bg-transparent text-black placeholder-gray-400 focus:outline-none"
                placeholder="Let’s explore your future..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <SendHorizontal
                onClick={handleSend}
                className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
