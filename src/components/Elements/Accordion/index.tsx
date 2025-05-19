"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string | React.ReactNode;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border rounded-xl overflow-hidden shadow transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-100 transition"
      >
        <span className="font-medium text-left text-gray-800">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden bg-gray-50"
      >
        <div className="px-4 py-3 text-sm text-gray-700">{content}</div>
      </div>
    </div>
  );
}
