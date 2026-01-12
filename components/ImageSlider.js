'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function ImageSlider({ 
  images = [], 
  slides = null,  // NEW: array of { image, title, subtitle, link }
  interval = 7000, 
  height = "h-[60vh] md:h-[105vh]",
  positions = [],
  defaultPosition = "center center",
}) {
  // Determine data source: slides (clickable) or images (simple)
  const data = slides || images.map(img => ({ image: img }));
  const isClickable = !!slides;
  const [current, setCurrent] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);  // ← Add this
  // Auto-slide - resets when resetTimer changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, interval);
    return () => clearInterval(timer);
  }, [data.length, interval, resetTimer]);// ← Add resetTimer dependency
  // Navigation functions that reset timer  
  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
    setResetTimer((prev) => prev + 1);
  };
  const goRight = () => {
    setCurrent((prev) => (prev + 1) % data.length);
    setResetTimer((prev) => prev + 1);
  };
  const goToSlide = (idx) => {
    setCurrent(idx);
    setResetTimer((prev) => prev + 1);  // ← Reset timer
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      
      {/* Slides/Images as backgrounds */}
      {data.map((item, idx) => {
        const slideContent = (
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: positions[idx] || defaultPosition,
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Title/Subtitle overlay for clickable slides */}
            {isClickable && item.title && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">{item.title}</h2>
                  {item.subtitle && (
                    <p className="text-lg md:text-xl text-blue-100">{item.subtitle}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        );

        // Wrap in Link if clickable
        return isClickable && item.link ? (
          <Link key={idx} href={item.link} className="cursor-pointer">
            {slideContent}
          </Link>
        ) : (
          <div key={idx}>{slideContent}</div>
        );
      })}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left Arrow */}
      <button
        onClick={goLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}