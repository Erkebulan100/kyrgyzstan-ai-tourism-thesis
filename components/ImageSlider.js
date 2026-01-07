'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider({ images, interval = 7000, autoHeight = false }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, current]);

  const goLeft = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goRight = () => setCurrent((prev) => (prev + 1) % images.length);

  // Auto-height version (image determines container size)
  if (autoHeight) {
    return (
      <div className="relative w-full overflow-hidden">
        {/* Images */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-full transition-opacity duration-1000 ${
              idx === current ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-auto" />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={goLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Original fixed-height version
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
          src={img} 
          alt={`Slide ${idx + 1}`} 
          className={`w-full h-full object-cover object-bottom ${
            idx === 6 ? 'object-right md:object-center' : ''
          }`}
        />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={goLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}