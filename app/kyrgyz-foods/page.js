'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const foods = [
  {
    id: 1,
    name: 'Beshbarmak',
    meaning: '"Five Fingers"',
    description: 'The national dish — boiled meat (lamb or horse) served over flat noodles with onion sauce. Traditionally eaten by hand.',
    ingredients: 'Lamb or horse meat, flat noodles, onions, broth',
    origin: 'Ancient nomadic dish for honored guests',
    image: '/images/foods/beshbarmak.jpg',
  },
  {
    id: 2,
    name: 'Plov',
    meaning: '"Osh"',
    description: 'Central Asian pilaf — rice layered with carrots and tender meat, slow-cooked in a kazan over open fire.',
    ingredients: 'Rice, lamb, carrots, onions, cumin, garlic',
    origin: 'Celebratory dish cooked by men for weddings',
    image: '/images/foods/plov.jpg',
  },
  {
    id: 3,
    name: 'Lagman',
    meaning: 'Hand-Pulled Noodles',
    description: 'Thick hand-stretched noodles in savory broth with vegetables and meat. Can be served as soup or fried.',
    ingredients: 'Hand-pulled noodles, beef, tomatoes, peppers',
    origin: 'Silk Road heritage from China',
    image: '/images/foods/lagman.jpg',
  },
  {
    id: 4,
    name: 'Manti',
    meaning: 'Steamed Dumplings',
    description: 'Large steamed dumplings filled with spiced meat and onions. Served with sour cream.',
    ingredients: 'Dough, lamb or beef, onions, black pepper',
    origin: 'Shared across Central Asia and Turkey',
    image: '/images/foods/manti.jpg',
  },
  {
    id: 5,
    name: 'Kuurdak',
    meaning: 'Fried Meat',
    description: 'Simple fried meat with onions and potatoes — the ultimate nomad comfort food made over open fire.',
    ingredients: 'Lamb or liver, potatoes, onions',
    origin: 'Quick meal for shepherds on pastures',
    image: '/images/foods/kuurdak.jpg',
  },
  {
    id: 6,
    name: 'Samsa',
    meaning: 'Meat Pastry',
    description: 'Flaky triangular pastries filled with seasoned meat, baked golden in a tandoor oven.',
    ingredients: 'Puff pastry, lamb, onions, cumin, sesame',
    origin: 'Bazaar staple for centuries',
    image: '/images/foods/samsa.jpg',
  },
  {
    id: 7,
    name: 'Kumys',
    meaning: 'Fermented Mare\'s Milk',
    description: 'Traditional drink of the nomads — slightly sour, mildly alcoholic. Believed to have healing properties.',
    ingredients: 'Fresh mare\'s milk, natural fermentation',
    origin: 'Sacred drink of Kyrgyz nomads for 5000+ years',
    image: '/images/foods/kumys.jpg',
  },
];

export default function KyrgyzFoodsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section - Warm earthy tones */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4">
            Taste of the Silk Road
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kyrgyz Cuisine
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl leading-relaxed">
            Hearty dishes born from nomadic life — simple ingredients transformed 
            into soul-warming meals passed down through generations.
          </p>
        </div>
      </section>

      {/* Foods List - Alternating Editorial Layout */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        
        {foods.map((food, index) => (
          <article 
            key={food.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 mb-16 pb-16 ${
              index !== foods.length - 1 ? 'border-b border-stone-200' : ''
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <div 
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-200 to-orange-200 shadow-lg"
              >
                {/* Placeholder pattern - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-amber-800/50">
                    <div className="text-6xl mb-2">🍽️</div>
                    <p className="text-sm">Image: {food.name}</p>
                  </div>
                </div>
                {/* Uncomment when you have images:
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                */}
                
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {food.id}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-amber-700 text-sm font-medium uppercase tracking-wide mb-2">
                {food.meaning}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                {food.name}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                {food.description}
              </p>
              
              {/* Details in subtle boxes */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide min-w-[80px]">
                    Made with
                  </span>
                  <span className="text-stone-600 text-sm">
                    {food.ingredients}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide min-w-[80px]">
                    Origin
                  </span>
                  <span className="text-stone-600 text-sm italic">
                    {food.origin}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Taste These Dishes on Your Journey
          </h2>
          <p className="text-amber-200 mb-8">
            Our tours include authentic home-cooked meals and local restaurant experiences
          </p>
          <Link 
            href="/tours"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors"
          >
            View Our Tours
          </Link>
        </div>
      </section>
    </main>
  );
}