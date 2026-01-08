"use client";
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}