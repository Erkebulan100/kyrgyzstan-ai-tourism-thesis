'use client';

import Link from 'next/link';
import { ArrowLeft, Sun, Cloud, Snowflake, Leaf, ThermometerSun, Droplets, Mountain, Waves, Camera, Users } from 'lucide-react';

const seasons = [
  {
    id: 1,
    name: 'Spring',
    months: 'March – May',
    temp: '8°C to 20°C',
    icon: '🌸',
    weather: 'Mild days, cool nights. Snow melting in mountains. Occasional rain.',
    highlights: [
      'Blooming valleys and green hills',
      'Fewer tourists, peaceful sites',
      'Nowruz festival (March 21)',
      'Waterfalls at peak flow',
    ],
    considerations: 'High passes still closed. Some yurt camps not yet open.',
    crowd: 'Low',
    rating: 3,
    gradient: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
  },
  {
    id: 2,
    name: 'Summer',
    months: 'June – August',
    temp: '18°C to 32°C',
    icon: '☀️',
    weather: 'Warm and sunny. Perfect for mountains. Hot in valleys.',
    highlights: [
      'All passes and trails open',
      'Yurt camps fully operating',
      'Swimming in Issyk-Kul',
      'Horse games and festivals',
    ],
    considerations: 'Peak tourist season. Book accommodations early.',
    crowd: 'High',
    rating: 5,
    gradient: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    best: true,
  },
  {
    id: 3,
    name: 'Autumn',
    months: 'September – November',
    temp: '5°C to 18°C',
    icon: '🍂',
    weather: 'Crisp and clear. Golden colors. Cool evenings.',
    highlights: [
      'Stunning fall foliage',
      'Walnut harvest in Arslanbob',
      'Clear mountain views',
      'World Nomad Games (some years)',
    ],
    considerations: 'High passes close by late October. Days getting shorter.',
    crowd: 'Medium',
    rating: 4,
    gradient: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
  },
  {
    id: 4,
    name: 'Winter',
    months: 'December – February',
    temp: '-10°C to 5°C',
    icon: '❄️',
    weather: 'Cold and snowy. Mountains covered in white.',
    highlights: [
      'Skiing at Karakol & Jyrgalan',
      'Frozen waterfalls',
      'Eagle hunting season',
      'Authentic local life',
    ],
    considerations: 'Many tourist sites closed. Limited transport to remote areas.',
    crowd: 'Very Low',
    rating: 2,
    gradient: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
];

const activities = [
  { name: 'Trekking & Hiking', icon: Mountain, best: 'Jun – Sep', possible: 'May, Oct' },
  { name: 'Lake Swimming', icon: Waves, best: 'Jul – Aug', possible: 'Jun, Sep' },
  { name: 'Photography', icon: Camera, best: 'Jun – Oct', possible: 'Year-round' },
  { name: 'Horse Riding', icon: '🐎', best: 'May – Oct', possible: 'Apr, Nov' },
  { name: 'Yurt Stays', icon: '⛺', best: 'Jun – Sep', possible: 'May, Oct' },
  { name: 'Cultural Festivals', icon: Users, best: 'Jul – Sep', possible: 'Mar (Nowruz)' },
];

export default function BestTimePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section - Cool blue gradient with weather motif */}
      <section className="relative bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600 text-white overflow-hidden">
        {/* Animated weather elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] text-6xl opacity-10 animate-pulse">☀️</div>
          <div className="absolute top-20 right-[15%] text-5xl opacity-10">🌤️</div>
          <div className="absolute bottom-20 left-[20%] text-4xl opacity-10">🌙</div>
          <div className="absolute top-1/2 right-[10%] text-5xl opacity-10 animate-pulse">⭐</div>
          {/* Cloud shapes */}
          <div className="absolute top-16 left-[30%] w-32 h-12 bg-white/5 rounded-full blur-xl" />
          <div className="absolute top-24 left-[35%] w-24 h-10 bg-white/5 rounded-full blur-xl" />
          <div className="absolute bottom-32 right-[25%] w-40 h-14 bg-white/5 rounded-full blur-xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sky-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <p className="text-cyan-200 uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-3">
            <ThermometerSun className="w-4 h-4" />
            Plan Your Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best Time to Visit
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl leading-relaxed mb-8">
            Kyrgyzstan offers unique experiences year-round, but timing your visit 
            can make all the difference.
          </p>
          
          {/* Quick answer box */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <p className="text-cyan-200 text-sm uppercase tracking-wide mb-1">Best Overall</p>
            <p className="text-2xl font-bold flex items-center gap-3">
              <span className="text-3xl">☀️</span>
              June – September
            </p>
          </div>
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f0f9ff"/>
          </svg>
        </div>
      </section>

      {/* Seasons Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Seasons at a Glance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each season offers something special — from summer adventures to winter wonderlands
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <div 
              key={season.id}
              className={`relative rounded-2xl overflow-hidden ${season.bg} border-2 ${season.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Best badge */}
              {season.best && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ BEST
                </div>
              )}
              
              {/* Season header */}
              <div className={`bg-gradient-to-r ${season.gradient} p-6 text-white`}>
                <div className="text-4xl mb-2">{season.icon}</div>
                <h3 className="text-2xl font-bold">{season.name}</h3>
                <p className="text-white/80 text-sm">{season.months}</p>
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Temperature */}
                <div className="flex items-center gap-2 mb-4">
                  <ThermometerSun className={`w-5 h-5 ${season.text}`} />
                  <span className="font-semibold text-gray-800">{season.temp}</span>
                </div>
                
                {/* Weather */}
                <p className="text-gray-600 text-sm mb-4">{season.weather}</p>
                
                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {season.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className={season.text}>✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Crowd level */}
                <div className={`text-xs font-medium ${season.text} uppercase tracking-wide`}>
                  Crowds: {season.crowd}
                </div>
              </div>
              
              {/* Rating bar */}
              <div className="px-5 pb-5">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div 
                      key={star}
                      className={`h-2 flex-1 rounded-full ${
                        star <= season.rating 
                          ? `bg-gradient-to-r ${season.gradient}` 
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center">Travel Rating</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Calendar */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Best Time by Activity</h2>
            <p className="text-slate-300">Plan around what you want to do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                    {typeof activity.icon === 'string' ? (
                      <span className="text-xl">{activity.icon}</span>
                    ) : (
                      <activity.icon className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg">{activity.name}</h3>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Best:</span>
                    <span className="text-cyan-300 font-medium">{activity.best}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Possible:</span>
                    <span className="text-slate-300">{activity.possible}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Quick Reference */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Month-by-Month</h2>
        
        <div className="overflow-x-auto">
          <div className="flex gap-3 pb-4 min-w-max">
            {[
              { month: 'Jan', temp: '-6°C', icon: '❄️', status: 'off' },
              { month: 'Feb', temp: '-3°C', icon: '❄️', status: 'off' },
              { month: 'Mar', temp: '5°C', icon: '🌱', status: 'shoulder' },
              { month: 'Apr', temp: '12°C', icon: '🌸', status: 'shoulder' },
              { month: 'May', temp: '17°C', icon: '🌷', status: 'shoulder' },
              { month: 'Jun', temp: '22°C', icon: '☀️', status: 'peak' },
              { month: 'Jul', temp: '26°C', icon: '☀️', status: 'peak' },
              { month: 'Aug', temp: '25°C', icon: '☀️', status: 'peak' },
              { month: 'Sep', temp: '19°C', icon: '🍂', status: 'peak' },
              { month: 'Oct', temp: '11°C', icon: '🍁', status: 'shoulder' },
              { month: 'Nov', temp: '3°C', icon: '🌧️', status: 'off' },
              { month: 'Dec', temp: '-4°C', icon: '❄️', status: 'off' },
            ].map((m, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center p-4 rounded-xl min-w-[80px] ${
                  m.status === 'peak' 
                    ? 'bg-gradient-to-b from-cyan-500 to-teal-600 text-white shadow-lg' 
                    : m.status === 'shoulder'
                    ? 'bg-cyan-100 text-cyan-800'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <span className="text-2xl mb-1">{m.icon}</span>
                <span className="font-bold">{m.month}</span>
                <span className="text-sm opacity-75">{m.temp}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-cyan-500 to-teal-600"></div>
            <span className="text-gray-600">Peak Season</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-cyan-100"></div>
            <span className="text-gray-600">Shoulder Season</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-100"></div>
            <span className="text-gray-600">Off Season</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-cyan-100 mb-8">
            Our tours run from May to October — the perfect window for exploration
          </p>
          <Link 
            href="/tours"
            className="inline-block bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
          >
            View Our Tours
          </Link>
        </div>
      </section>
    </main>
  );
}