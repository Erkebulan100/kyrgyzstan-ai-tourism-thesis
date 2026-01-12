'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider({ 
  images, 
  interval = 7000, 
  height = "h-[60vh] md:h-[85vh]",
  positions = [],
  defaultPosition = "center center",
  objectFit = "cover"
}) {
  const [current, setCurrent] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);  // ← Add this

  // Auto-slide - resets when resetTimer changes, pauses on hover
  useEffect(() => {
    if (isPaused) return;  // ← Don't run timer if paused
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, resetTimer, isPaused]);  // ← Add isPaused dependency

  // Navigation functions that reset timer  
  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setResetTimer((prev) => prev + 1);
  };

  const goRight = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setResetTimer((prev) => prev + 1);
  };

  const goToSlide = (idx) => {
    setCurrent(idx);
    setResetTimer((prev) => prev + 1);
  };

  return (
    <div 
      className={`relative w-full ${height} overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}   // ← Pause on hover
      onMouseLeave={() => setIsPaused(false)}  // ← Resume on leave
    >
      {/* Images as backgrounds */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: objectFit,
            backgroundPosition: positions[idx] || defaultPosition,
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}  // ← Fixed: was setCurrent, now uses goToSlide for timer reset
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}