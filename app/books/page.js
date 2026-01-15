'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Star, Globe, Clock } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'Jamilia',
    author: 'Chingiz Aitmatov',
    year: '1958',
    description: 'A beautiful love story set in a Kyrgyz village during World War II. Called "the world\'s most beautiful love story" by Louis Aragon. A young woman defies tradition to follow her heart.',
    whyRead: 'The most famous Kyrgyz novel — a must-read before visiting',
    pages: '120',
    genre: 'Fiction',
    color: 'from-emerald-600 to-green-700',
  },
  {
    id: 2,
    title: 'The Day Lasts More Than a Hundred Years',
    author: 'Chingiz Aitmatov',
    year: '1980',
    description: 'An epic novel weaving together a railroad worker\'s journey to bury his friend with Kyrgyz legends and even a science fiction subplot about contact with aliens.',
    whyRead: 'Aitmatov\'s masterpiece — deep insight into Central Asian soul',
    pages: '368',
    genre: 'Fiction',
    color: 'from-green-700 to-teal-700',
  },
  {
    id: 3,
    title: 'The Epic of Manas',
    author: 'Traditional / Various translators',
    year: '1000+ years old',
    description: 'The national epic of Kyrgyzstan — 20 times longer than the Odyssey. Tales of the hero Manas uniting the Kyrgyz tribes. Performed by manaschi storytellers.',
    whyRead: 'UNESCO masterpiece — the heart of Kyrgyz identity',
    pages: 'Varies',
    genre: 'Epic Poetry',
    color: 'from-amber-700 to-yellow-700',
  },
  {
    id: 4,
    title: 'Farewell, Gulsary!',
    author: 'Chingiz Aitmatov',
    year: '1966',
    description: 'The story of an old herdsman and his beloved horse Gulsary, reflecting on a lifetime of Soviet collectivization in the Kyrgyz mountains.',
    whyRead: 'Understand the bond between Kyrgyz people and horses',
    pages: '200',
    genre: 'Fiction',
    color: 'from-stone-600 to-stone-700',
  },
  {
    id: 5,
    title: 'Land of Forty Tribes',
    author: 'Various / Travel Literature',
    year: 'Modern',
    description: 'Contemporary travel writing about Kyrgyzstan — its landscapes, people, and the experience of journeying through this remarkable country.',
    whyRead: 'Modern perspective on traveling in Kyrgyzstan',
    pages: 'Varies',
    genre: 'Travel',
    color: 'from-cyan-700 to-blue-700',
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      {/* Hero Section - Library/Literary Theme */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-stone-900 text-white overflow-hidden">
        {/* Bookshelf pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 42px
            )`
          }} />
        </div>
        
        {/* Decorative book icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-[10%] text-6xl opacity-10">📚</div>
          <div className="absolute top-24 right-[15%] text-5xl opacity-10">📖</div>
          <div className="absolute bottom-20 left-[20%] text-4xl opacity-10">📕</div>
          <div className="absolute bottom-16 right-[25%] text-5xl opacity-10">📗</div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <p className="text-emerald-300 uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-3">
            <BookOpen className="w-4 h-4" />
            Before You Go
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Recommended Reading
          </h1>
          <p className="text-xl text-green-100 max-w-2xl leading-relaxed">
            Immerse yourself in Kyrgyz literature and culture before your journey — 
            these books will deepen your experience tenfold.
          </p>
        </div>
      </section>

      {/* Books List - Stacked Book Spines Design */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {books.map((book, index) => (
            <article 
              key={book.id}
              className="group relative"
            >
              {/* Book card with spine effect */}
              <div className="flex bg-white rounded-r-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-x-2">
                {/* Book spine */}
                <div className={`w-4 md:w-6 bg-gradient-to-b ${book.color} flex-shrink-0`} />
                
                {/* Main content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Book cover placeholder */}
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-36 md:w-32 md:h-48 bg-gradient-to-br ${book.color} rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden`}>
                        {/* Book texture */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute left-2 top-0 bottom-0 w-px bg-white/50" />
                        </div>
                        <div className="text-center text-white p-3">
                          <p className="text-4xl mb-2">📖</p>
                          <p className="text-xs font-medium opacity-75">Cover</p>
                        </div>
                        {/* Number badge */}
                        <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {book.id}
                        </div>
                      </div>
                    </div>
                    
                    {/* Book details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="text-emerald-700 text-sm font-medium uppercase tracking-wide mb-1">
                            {book.genre}
                          </p>
                          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 font-serif group-hover:text-emerald-700 transition-colors">
                            {book.title}
                          </h2>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 mb-1">
                        by <span className="font-semibold text-stone-800">{book.author}</span>
                      </p>
                      <p className="text-stone-400 text-sm mb-4">{book.year}</p>
                      
                      <p className="text-stone-600 leading-relaxed mb-4">
                        {book.description}
                      </p>
                      
                      {/* Why read badge */}
                      <div className="inline-flex items-start gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                        <Star className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <p className="text-emerald-800 text-sm font-medium">
                          {book.whyRead}
                        </p>
                      </div>
                      
                      {/* Meta info */}
                      <div className="flex items-center gap-4 mt-4 text-sm text-stone-500">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {book.pages} pages
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase tracking-widest text-sm mb-2">Featured Author</p>
            <h2 className="text-3xl font-bold font-serif">Chingiz Aitmatov</h2>
            <p className="text-stone-400 mt-2">1928 – 2008</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">✍️</span>
              </div>
              <div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  Kyrgyzstan's most celebrated writer, Aitmatov wrote in both Kyrgyz and Russian, 
                  bringing Central Asian stories to the world. His works explore the tension between 
                  tradition and modernity, the bond between humans and nature, and the universal 
                  themes of love, loss, and identity.
                </p>
                <p className="text-emerald-400 font-medium">
                  "He who fears his own memories is a slave to them."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Tips */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center font-serif">Where to Find These Books</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🌐', title: 'Online', desc: 'Amazon, Book Depository, and local online bookstores' },
            { icon: '📚', title: 'In Bishkek', desc: 'Raritet Bookshop, Akademkniga, and hotel gift shops' },
            { icon: '📱', title: 'E-Books', desc: 'Kindle, Apple Books — most Aitmatov works available digitally' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready for Your Journey?
          </h2>
          <p className="text-emerald-100 mb-8">
            Pack a book and explore the land that inspired these stories
          </p>
          <Link 
            href="/tours"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            View Our Tours
          </Link>
        </div>
      </section>
    </main>
  );
}