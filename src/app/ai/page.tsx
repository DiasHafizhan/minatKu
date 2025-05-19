"use client"

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const botReply = {
      role: "assistant",
      content: `Kamu berkata: "${input}". Ini respons dari AI.`,
    };

    setMessages([...newMessages, botReply]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl flex flex-col relative">
        {/* Chat area */}
        <div className="overflow-y-auto p-4 pb-28  space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-pre-wrap break-words ${
                msg.role === "user"
                  ? "bg-amber-500 self-end ml-auto text-right"
                  : "bg-amber-500 self-start text-left"
              }`}
              style={{ maxWidth: "75%", width: "fit-content" }}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Fixed form input */}
        <div className="fixed bottom-0 left-0 right-0 p-4 z-10 bg-[#202123] flex justify-center">
          <div className="w-full max-w-2xl mb-12 flex">
            <input
              type="text"
              className="flex-grow border rounded-xl px-4 py-2 mr-2 focus:outline-none"
              placeholder="Tulis sesuatu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
