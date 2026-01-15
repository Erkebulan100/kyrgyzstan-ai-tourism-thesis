import Link from 'next/link';
import { MapPin, Clock, Calendar, Car, Mountain, Sun, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const metadata = {
  title: "Jeti-Oguz Rocks - The Seven Bulls | Top 10 Places | Tien Shan Journeys",
  description: "Discover Jeti-Oguz, the dramatic red sandstone formations known as the Seven Bulls. Ancient legends, stunning hiking trails, and one of Kyrgyzstan's most iconic landscapes.",
};

// ============================================
// PLACE DATA
// ============================================
const placeData = {
  rank: 7,
  name: 'Jeti-Oguz Rocks',
  tagline: 'The Seven Bulls',
  region: 'Issyk-Kul Region',
  regionLink: '/destinations/issyk-kul-lake',
  
  heroImage: '/images/top-10/jeti-oguz.jpg',
  
  quickFacts: {
    location: 'Jeti-Oguz District, south of Karakol',
    altitude: '2,200 - 2,800 meters',
    bestTime: 'May - October',
    duration: 'Half day to full day',
    fromKarakol: '~30 minutes by car',
    fromBishkek: '~5-6 hours by car',
  },
  
  description: [
    '[Placeholder: Jeti-Oguz, meaning "Seven Bulls" in Kyrgyz, is one of the country\'s most iconic natural landmarks. These dramatic red sandstone formations rise from a lush green valley like the backs of seven massive bulls lying side by side. The striking contrast of red rock against green meadows and snow-capped peaks beyond creates one of Central Asia\'s most photographed scenes.]',
    '[Placeholder: According to Kyrgyz legend, the rocks were formed from seven bulls that were slaughtered at a great funeral feast. A heartbroken khan, whose beloved wife had died, ordered the bulls killed and their blood stained the rocks red forever. The nearby "Broken Heart" rock formation adds to the tragic romance of the legend.]',
    '[Placeholder: Beyond the famous viewpoint, Jeti-Oguz offers excellent hiking through flower-filled alpine meadows and dense spruce forests. The valley extends deep into the Tien Shan mountains, with trails leading to waterfalls, yurt camps, and panoramic viewpoints. It\'s an easy day trip from Karakol or a perfect stop on the way around Issyk-Kul Lake.]',
  ],
  
  gallery: [
    { src: '/images/top-10/jeti-oguz/gallery-1.jpg', alt: 'Seven Bulls rock formation' },
    { src: '/images/top-10/jeti-oguz/gallery-2.jpg', alt: 'Broken Heart rock' },
    { src: '/images/top-10/jeti-oguz/gallery-3.jpg', alt: 'Valley hiking trails' },
    { src: '/images/top-10/jeti-oguz/gallery-4.jpg', alt: 'Alpine meadows with flowers' },
    { src: '/images/top-10/jeti-oguz/gallery-5.jpg', alt: 'Sunrise at Jeti-Oguz' },
    { src: '/images/top-10/jeti-oguz/gallery-6.jpg', alt: 'Yurt camp in the valley' },
  ],
  
  activities: [
    {
      title: 'Photograph the Seven Bulls',
      description: '[Placeholder: The classic viewpoint offers stunning photos, especially in morning light when the rocks glow deep red against green meadows.]',
    },
    {
      title: 'Hike to the Flower Valley',
      description: '[Placeholder: A moderate 2-3 hour hike takes you through spruce forest to alpine meadows carpeted with wildflowers in summer.]',
    },
    {
      title: 'Visit Broken Heart Rock',
      description: '[Placeholder: Just a short walk from the main formation, this heart-shaped rock adds to the romantic legend of Jeti-Oguz.]',
    },
    {
      title: 'Stay at a Yurt Camp',
      description: '[Placeholder: Several yurt camps in the valley offer authentic overnight stays with home-cooked meals and mountain hospitality.]',
    },
  ],
  
  relatedTours: [
    {
      name: 'Classic Kyrgyzstan',
      slug: 'classic-kyrgyzstan',
      duration: '12 days',
      description: 'Visit Jeti-Oguz as part of a comprehensive journey around Issyk-Kul Lake and beyond.',
    },
    {
      name: 'Golden Circle of Kyrgyzstan',
      slug: 'golden-circle',
      duration: '8 days',
      description: 'Experience the iconic Seven Bulls on this popular circuit through Kyrgyzstan\'s highlights.',
    },
    {
      name: 'Treasures of Tien Shan',
      slug: 'treasures-tien-shan',
      duration: '10 days',
      description: 'Discover Jeti-Oguz alongside other natural wonders of the Tien Shan mountains.',
    },
  ],
  
  prevPlace: { name: 'Altyn-Arashan', slug: 'altyn-arashan', rank: 6 },
  nextPlace: { name: 'Tash Rabat', slug: 'tash-rabat', rank: 8 },
};
// ============================================
// END PLACE DATA
// ============================================

export default function JetiOguzPage() {
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
            backgroundColor: '#C25B4A' // Fallback red-rock color
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

      {/* Legend Banner */}
      <section className="bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <Camera className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Iconic Photo Location</p>
              <p className="text-red-700 text-sm">
                One of Kyrgyzstan&apos;s most photographed landmarks. Best light is early morning when the 
                red rocks glow against the green valley and distant snowy peaks.
              </p>
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

            {/* The Legend Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-bold text-stone-800 mb-3">The Legend of Jeti-Oguz</h3>
              <p className="text-stone-600 leading-relaxed italic">
                &ldquo;Long ago, a powerful khan fell deeply in love with a beautiful woman who was already married. 
                He kidnapped her, but her husband raised an army to rescue her. Facing defeat, the khan decided 
                that if he couldn&apos;t have her, no one would. He ordered a great feast with seven bulls slaughtered—and 
                secretly killed his beloved. Her blood and that of the bulls stained the rocks red, where they 
                remain to this day as seven petrified bulls mourning her death.&rdquo;
              </p>
              <p className="text-stone-500 text-sm mt-3">— Traditional Kyrgyz Legend</p>
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
                        backgroundColor: '#D4886B'
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
                    <p className="text-stone-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Quick Facts Sidebar */}
          <div className="lg:col-span-1">
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
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Recommended Duration</p>
                    <p className="text-stone-700 font-medium">{place.quickFacts.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Getting There</p>
                    <p className="text-stone-700 text-sm">From Karakol: {place.quickFacts.fromKarakol}</p>
                    <p className="text-stone-700 text-sm">From Bishkek: {place.quickFacts.fromBishkek}</p>
                  </div>
                </div>
              </div>

              {/* Tip Note */}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-amber-800 text-xs font-medium">📸 Photography Tip</p>
                <p className="text-amber-700 text-xs mt-1">Arrive early morning for the best light. The rocks face east and glow brightest at sunrise.</p>
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
                This destination is perfect for a custom itinerary. 
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
                {place.name} is located in the {place.region}
              </h3>
              <p className="text-stone-600 mt-2">
                Combine with nearby Karakol, Altyn-Arashan hot springs, and Issyk-Kul Lake beaches.
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