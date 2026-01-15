import Link from 'next/link';
import { MapPin, Clock, Calendar, Car, Mountain, Sun, ChevronLeft, ChevronRight } from 'lucide-react';

export const metadata = {
  title: "Song-Kul Lake - Where Nomads Roam | Top 10 Places | Tien Shan Journeys",
  description: "Experience Song-Kul Lake, a high-altitude paradise at 3,016m where nomadic herders spend their summers. Yurt stays, horseback riding, and endless starry skies.",
};

// ============================================
// PLACE DATA
// ============================================
const placeData = {
  rank: 3,
  name: 'Song-Kul Lake',
  tagline: 'Where Nomads Roam',
  region: 'Naryn Region',
  regionLink: '/destinations/naryn',
  
  heroImage: '/images/top-10/song-kul-lake.jpg',
  
  quickFacts: {
    location: 'Naryn Region, Central Kyrgyzstan',
    altitude: '3,016 meters',
    bestTime: 'June - September',
    duration: '2-3 days recommended',
    fromBishkek: '~6-7 hours by car',
    fromNaryn: '~3 hours by car',
  },
  
  description: [
    '[Placeholder: Song-Kul is the second-largest lake in Kyrgyzstan and one of the most magical places in all of Central Asia. Sitting at 3,016 meters above sea level, this high-altitude lake is surrounded by rolling jailoos (summer pastures) where Kyrgyz nomads have brought their herds for centuries.]',
    '[Placeholder: From June to September, the shores of Song-Kul transform into a temporary village of yurts. Nomadic families migrate here with their horses, sheep, and yaks to take advantage of the lush summer grazing. Visitors can stay in these yurts, sharing meals with families and experiencing a way of life unchanged for generations.]',
    '[Placeholder: The landscape is hauntingly beautiful—emerald grasslands stretching to distant snow-dusted peaks, herds of horses galloping freely, and a silence broken only by birdsong and wind. At night, the lack of light pollution reveals a spectacular canopy of stars reflected in the still waters below.]',
  ],
  
  gallery: [
    { src: '/images/top-10/song-kul-lake/gallery-1.jpg', alt: 'Song-Kul Lake panorama' },
    { src: '/images/top-10/song-kul-lake/gallery-2.jpg', alt: 'Yurt camps on the shore' },
    { src: '/images/top-10/song-kul-lake/gallery-3.jpg', alt: 'Horses grazing by the lake' },
    { src: '/images/top-10/song-kul-lake/gallery-4.jpg', alt: 'Sunset over Song-Kul' },
    { src: '/images/top-10/song-kul-lake/gallery-5.jpg', alt: 'Nomadic shepherds' },
    { src: '/images/top-10/song-kul-lake/gallery-6.jpg', alt: 'Starry night at the lake' },
  ],
  
  activities: [
    {
      title: 'Stay in a Yurt',
      description: '[Placeholder: Sleep in a traditional felt yurt with nomadic families, enjoying home-cooked meals and warm hospitality.]',
    },
    {
      title: 'Horseback Riding',
      description: '[Placeholder: Explore the vast jailoos on horseback—the traditional Kyrgyz way to experience the landscape.]',
    },
    {
      title: 'Watch Kumys Making',
      description: '[Placeholder: Learn how nomads make kumys (fermented mare\'s milk), a drink central to Kyrgyz culture for 5,000 years.]',
    },
    {
      title: 'Stargazing',
      description: '[Placeholder: With zero light pollution, Song-Kul offers some of the best stargazing in Central Asia.]',
    },
  ],
  
  relatedTours: [
    {
      name: 'Golden Circle of Kyrgyzstan',
      slug: 'golden-circle',
      duration: '8 days',
      description: 'Spend two nights at Song-Kul with a full day to explore the lake, ride horses, and experience nomadic life.',
    },
    {
      name: 'Nomads of Tien Shan',
      slug: 'nomads-tien-shan',
      duration: '9 days',
      description: 'Immerse yourself in nomadic culture with an overnight yurt stay at Song-Kul\'s pristine shores.',
    },
    {
      name: 'Treasures of Tien Shan',
      slug: 'treasures-tien-shan',
      duration: '10 days',
      description: 'Experience Song-Kul as part of a journey through Kyrgyzstan\'s most spectacular natural treasures.',
    },
  ],
  
  prevPlace: { name: 'Ala-Archa National Park', slug: 'ala-archa', rank: 2 },
  nextPlace: { name: 'Kel-Suu Lake', slug: 'kel-suu-lake', rank: 4 },
};
// ============================================
// END PLACE DATA
// ============================================

export default function SongKulLakePage() {
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
            backgroundColor: '#6B8E6B' // Fallback green pasture color
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
                        backgroundColor: '#88B788'
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