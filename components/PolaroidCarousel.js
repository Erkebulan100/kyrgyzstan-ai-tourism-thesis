'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PolaroidCarousel({ 
  places = [],
  title = "Top 10 Places to See",
  subtitle = "Discover the most breathtaking destinations in Kyrgyzstan",
  seeAllLink = "/top-10-places",
  seeAllText = "See All 10 Places"
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Pre-calculated tilts for consistent rendering (avoids hydration mismatch)
  const tilts = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5, -1, 2];

  // Check scroll position
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 280; // Approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 -rotate-6" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4" />
          <p className="text-slate-300 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all duration-200 -ml-4 md:-ml-6 ${
              !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all duration-200 -mr-4 md:-mr-6 ${
              !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {places.map((place, idx) => (
              <Link
                key={idx}
                href={place.link}
                className="flex-shrink-0 group"
                style={{ transform: `rotate(${tilts[idx % tilts.length]}deg)` }}
              >
                {/* Polaroid Card */}
                <div className="bg-white p-3 pb-4 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-0 w-56 md:w-64">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-slate-100">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    {/* Rank Badge */}
                    <div className="absolute top-2 left-2 bg-amber-500 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                      {place.rank}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Caption Area (Polaroid style) */}
                  <div className="pt-3 text-center">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">
                      {place.name}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {place.region}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* See All Button */}
        <div className="text-center mt-8">
          <Link
            href={seeAllLink}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {seeAllText}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}