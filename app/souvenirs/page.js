'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const souvenirs = [
  {
    id: 1,
    name: 'Shyrdak',
    subtitle: 'Felt Carpet',
    description: 'Traditional felt rug with bold geometric patterns. Each piece is handmade by Kyrgyz women using ancient techniques — wool is dyed with natural colors, cut into shapes, and stitched together.',
    priceRange: '$50 - $300',
    whereToBy: 'Osh Bazaar (Bishkek), local artisan workshops',
    craftTime: '2-4 weeks to make',
    image: '/images/souvenirs/shyrdak.jpg',
  },
  {
    id: 2,
    name: 'Ak-Kalpak',
    subtitle: 'White Felt Hat',
    description: 'The iconic Kyrgyz hat — a symbol of national identity. Made from white felt with black embroidered patterns representing mountains, eagles, and the sun. Every Kyrgyz man owns one.',
    priceRange: '$15 - $80',
    whereToBy: 'Any bazaar, souvenir shops in Bishkek',
    craftTime: '1-2 days to make',
    image: '/images/souvenirs/ak-kalpak.jpg',
  },
  {
    id: 3,
    name: 'Silver Jewelry',
    subtitle: 'Traditional Ornaments',
    description: 'Handcrafted earrings, bracelets, and pendants featuring ancient Kyrgyz motifs — crescent moons, tulips, and protective symbols. Often set with carnelian or turquoise stones.',
    priceRange: '$20 - $150',
    whereToBy: 'Artisan shops, Bishkek galleries, museum gift shops',
    craftTime: 'Varies by complexity',
    image: '/images/souvenirs/jewelry.jpg',
  },
];

export default function SouvenirsPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      {/* Hero Section - Rich burgundy with Kyrgyz pattern overlay */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white overflow-hidden">
        {/* Kyrgyz pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="kyrgyz-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="3" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#kyrgyz-pattern)"/>
          </svg>
        </div>
        
        {/* Decorative stitched border effect */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-white/20 rounded-lg pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-amber-300/50"></span>
            Handcrafted Treasures
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kyrgyz Souvenirs
          </h1>
          <p className="text-xl text-red-100 max-w-2xl leading-relaxed">
            Take home a piece of nomadic heritage — each item tells a story of 
            craftsmanship passed down through generations.
          </p>
        </div>
      </section>

      {/* Souvenirs Display - Artisan Gallery Style */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        
        <div className="grid gap-12 md:gap-16">
          {souvenirs.map((item, index) => (
            <article 
              key={item.id}
              className="relative"
            >
              {/* Large item number */}
              <div className="absolute -top-6 -left-2 md:-left-8 text-[120px] md:text-[180px] font-bold text-stone-200/50 leading-none pointer-events-none select-none z-0">
                {item.id}
              </div>
              
              <div className={`relative z-10 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}>
                
                {/* Image with craft tag styling */}
                <div className="md:w-1/2">
                  <div className="relative">
                    {/* Stitched border effect */}
                    <div className="absolute -inset-3 border-2 border-dashed border-red-300/30 rounded-lg" />
                    
                    {/* Main image container */}
                    <div className="relative h-72 md:h-96 bg-gradient-to-br from-red-100 to-amber-100 rounded-lg overflow-hidden shadow-xl">
                      {/* Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-red-800/30">
                          <div className="text-7xl mb-3">
                            {item.id === 1 ? '🧶' : item.id === 2 ? '🎩' : '💎'}
                          </div>
                          <p className="text-sm font-medium">Image: {item.name}</p>
                        </div>
                      </div>
                      {/* Uncomment for real images:
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                    
                    {/* Price tag */}
                    <div className="absolute -bottom-4 -right-4 bg-red-800 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                      <p className="text-xs uppercase tracking-wide opacity-75">Price Range</p>
                      <p className="font-bold text-lg">{item.priceRange}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 py-4">
                  <p className="text-red-700 text-sm font-semibold uppercase tracking-widest mb-2">
                    {item.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
                    {item.name}
                  </h2>
                  <p className="text-stone-600 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  {/* Info boxes with stitched style */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-dashed border-stone-200">
                      <p className="text-red-700 text-xs font-bold uppercase tracking-wide mb-1">
                        Where to Buy
                      </p>
                      <p className="text-stone-600 text-sm">
                        {item.whereToBy}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-dashed border-stone-200">
                      <p className="text-red-700 text-xs font-bold uppercase tracking-wide mb-1">
                        Craft Time
                      </p>
                      <p className="text-stone-600 text-sm">
                        {item.craftTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying Tips Section */}
      <section className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Tips for Buying Authentic Souvenirs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✋', title: 'Check Handmade', text: 'Real crafts have slight imperfections — that\'s their charm' },
              { icon: '🏪', title: 'Visit Workshops', text: 'Buy directly from artisans to support local families' },
              { icon: '💬', title: 'Ask the Story', text: 'Every pattern has meaning — sellers love to explain' },
            ].map((tip, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-stone-400 text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-red-800 to-amber-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shop During Your Tour
          </h2>
          <p className="text-red-100 mb-8">
            Our guides know the best artisan workshops and can help you find authentic treasures
          </p>
          <Link 
            href="/tours"
            className="inline-block bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            View Our Tours
          </Link>
        </div>
      </section>
    </main>
  );
}