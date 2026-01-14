import Link from 'next/link';
import { MapPin, Clock, Calendar, Car, Mountain, Sun, ChevronLeft, ChevronRight } from 'lucide-react';

export const metadata = {
  title: "Issyk-Kul Lake - The Pearl of Central Asia | Top 10 Places | Tien Shan Journeys",
  description: "Discover Issyk-Kul Lake, the world's second-largest alpine lake surrounded by snow-capped Tien Shan mountains. Plan your visit to this natural wonder of Kyrgyzstan.",
};

// ============================================
// PLACE DATA
// ============================================
const placeData = {
  rank: 1,
  name: 'Issyk-Kul Lake',
  tagline: 'The Pearl of Central Asia',
  region: 'Issyk-Kul Region',
  regionLink: '/destinations/issyk-kul-lake',
  
  // Hero image
  heroImage: '/images/top-10/issyk-kul-lake.jpg',
  
  // Quick facts
  quickFacts: {
    location: 'Issyk-Kul Region, Eastern Kyrgyzstan',
    altitude: '1,607 meters',
    bestTime: 'June - September',
    duration: '2-5 days recommended',
    fromBishkek: '~4 hours by car',
    fromNaryn: '~5 hours by car',
  },
  
  // Main description paragraphs
  description: [
    '[Placeholder: Issyk-Kul is the world\'s second-largest alpine lake after Titicaca, stretching 182 km long and 60 km wide. Its name means "Hot Lake" in Kyrgyz because it never freezes despite being surrounded by snow-capped peaks of the Tien Shan mountains.]',
    '[Placeholder: The lake\'s crystal-clear waters shimmer in shades of deep blue and turquoise, changing color with the weather and time of day. Ancient legends speak of submerged cities beneath its surface, and archaeological discoveries have revealed settlements dating back thousands of years.]',
    '[Placeholder: The northern shore offers sandy beaches and resort towns, while the southern shore remains more wild and untouched. The entire region is a paradise for outdoor enthusiasts, offering hiking, horseback riding, eagle hunting demonstrations, and visits to ancient petroglyphs.]',
  ],
  
  // Gallery images (placeholders)
  gallery: [
    { src: '/images/top-10/issyk-kul-lake/gallery-1.jpg', alt: 'Issyk-Kul Lake panoramic view' },
    { src: '/images/top-10/issyk-kul-lake/gallery-2.jpg', alt: 'Beach on northern shore' },
    { src: '/images/top-10/issyk-kul-lake/gallery-3.jpg', alt: 'Snow-capped mountains backdrop' },
    { src: '/images/top-10/issyk-kul-lake/gallery-4.jpg', alt: 'Sunset over the lake' },
    { src: '/images/top-10/issyk-kul-lake/gallery-5.jpg', alt: 'Traditional yurt camp' },
    { src: '/images/top-10/issyk-kul-lake/gallery-6.jpg', alt: 'Crystal clear waters' },
  ],
  
  // What to do
  activities: [
    {
      title: 'Beach Relaxation',
      description: '[Placeholder: Enjoy sandy beaches along the northern shore with swimming in the warm, slightly saline waters.]',
    },
    {
      title: 'Visit Skazka Canyon',
      description: '[Placeholder: Explore the nearby "Fairytale Canyon" with its otherworldly red rock formations.]',
    },
    {
      title: 'See Jeti-Oguz Rocks',
      description: '[Placeholder: Witness the famous "Seven Bulls" - dramatic red sandstone formations with a tragic legend.]',
    },
    {
      title: 'Eagle Hunting Demo',
      description: '[Placeholder: Watch traditional Kyrgyz eagle hunters demonstrate this ancient nomadic practice.]',
    },
  ],
  
  // Related tours
  relatedTours: [
    {
      name: 'Classic Kyrgyzstan',
      slug: 'classic-kyrgyzstan',
      duration: '12 days',
      description: 'Spend multiple days exploring Issyk-Kul\'s highlights including Skazka Canyon and Jeti-Oguz.',
    },
    {
      name: 'Golden Circle of Kyrgyzstan',
      slug: 'golden-circle',
      duration: '8 days',
      description: 'Experience the best of Issyk-Kul combined with Song-Kul Lake and nomadic culture.',
    },
    {
      name: 'Treasures of Tien Shan',
      slug: 'treasures-tien-shan',
      duration: '10 days',
      description: 'Discover Issyk-Kul as part of a journey through Kyrgyzstan\'s natural treasures.',
    },
  ],
  
  // Navigation to previous/next places
  prevPlace: null, // First place, no previous
  nextPlace: { name: 'Song-Kul Lake', slug: 'song-kul-lake', rank: 2 },
};
// ============================================
// END PLACE DATA
// ============================================

export default function IssykKulLakePage() {
  const place = placeData;
  const hasTours = place.relatedTours && place.relatedTours.length > 0;

  return (
    <main className="min-h-screen bg-stone-50">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${place.heroImage}')`,
            backgroundColor: '#4A90A4' // Fallback blue color
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
            {/* Rank Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-lg">#{place.rank}</span>
              <span className="text-amber-100">in Top 10</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
              {place.name}
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-4">
              {place.tagline}
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>{place.region}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-amber-500"></span>
                About {place.name}
              </h2>
              <div className="prose prose-lg prose-stone max-w-none">
                {place.description.map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-amber-500"></span>
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {place.gallery.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-square rounded-lg overflow-hidden bg-stone-200 hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('${photo.src}')`,
                        backgroundColor: '#87CEEB'
                      }}
                      title={photo.alt}
                    />
                  </div>
                ))}
              </div>
              <p className="text-stone-400 text-sm mt-3 italic">
                [Placeholder: Owner will provide actual photos]
              </p>
            </div>

            {/* Things to Do */}
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-amber-500"></span>
                What to Do
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {place.activities.map((activity, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-stone-800 mb-2">{activity.title}</h3>
                    <p className="text-stone-600 text-sm">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Facts Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-stone-800 mb-4 pb-3 border-b border-stone-100">
                Quick Facts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Location</p>
                    <p className="text-stone-700 font-medium">{place.quickFacts.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mountain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Altitude</p>
                    <p className="text-stone-700 font-medium">{place.quickFacts.altitude}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Sun className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Best Time to Visit</p>
                    <p className="text-stone-700 font-medium">{place.quickFacts.bestTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Time Needed</p>
                    <p className="text-stone-700 font-medium">{place.quickFacts.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Getting There</p>
                    <p className="text-stone-700 text-sm">From Bishkek: {place.quickFacts.fromBishkek}</p>
                    <p className="text-stone-700 text-sm">From Naryn: {place.quickFacts.fromNaryn}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Tours Section */}
      <section className="bg-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {hasTours ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">
                Tours Featuring {place.name}
              </h2>
              <p className="text-stone-400 mb-8">
                Experience {place.name} as part of a guided journey through Kyrgyzstan
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {place.relatedTours.map((tour, idx) => (
                  <Link 
                    key={idx}
                    href={`/tours/${tour.slug}`}
                    className="group bg-stone-700/50 rounded-xl p-6 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {tour.name}
                      </h3>
                      <span className="bg-amber-500/20 text-amber-400 text-sm px-3 py-1 rounded-full">
                        {tour.duration}
                      </span>
                    </div>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      {tour.description}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 font-semibold px-6 py-3 rounded-full hover:bg-stone-100 transition-colors"
                >
                  View All Tours
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Request Custom Itinerary
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Visit {place.name}
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                This destination is perfect for a day trip or can be included in a custom itinerary. 
                Tell us about your travel plans and we&apos;ll help you experience {place.name} 
                in the best way possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  Request a Custom Tour
                </Link>
                <Link 
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Browse Existing Tours
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Explore Region Section */}
      <section className="bg-gradient-to-r from-stone-100 to-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-stone-500 text-sm uppercase tracking-wide mb-1">Explore the Region</p>
              <h3 className="text-2xl font-bold text-stone-800">
                {place.name} is located in {place.region}
              </h3>
              <p className="text-stone-600 mt-2">
                Discover more attractions, activities, and travel information for this region.
              </p>
            </div>
            <Link 
              href={place.regionLink}
              className="inline-flex items-center gap-2 bg-stone-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-stone-700 transition-colors whitespace-nowrap"
            >
              Discover {place.region}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Previous/Next Navigation */}
      <section className="bg-white border-t border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Previous */}
            {place.prevPlace ? (
              <Link 
                href={`/top-10-places/${place.prevPlace.slug}`}
                className="group flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Previous</p>
                  <p className="font-semibold">#{place.prevPlace.rank} {place.prevPlace.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Back to List */}
            <Link 
              href="/top-10-places"
              className="hidden md:flex items-center gap-2 text-stone-500 hover:text-stone-700 transition-colors"
            >
              <span className="text-sm">View All 10 Places</span>
            </Link>

            {/* Next */}
            {place.nextPlace ? (
              <Link 
                href={`/top-10-places/${place.nextPlace.slug}`}
                className="group flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors"
              >
                <div className="text-right">
                  <p className="text-xs text-stone-400 uppercase tracking-wide">Next</p>
                  <p className="font-semibold">#{place.nextPlace.rank} {place.nextPlace.name}</p>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}

          </div>
        </div>
      </section>

    </main>
  );
}