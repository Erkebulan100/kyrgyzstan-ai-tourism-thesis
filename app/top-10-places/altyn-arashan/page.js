import Link from 'next/link';
import { MapPin, Clock, Calendar, Car, Mountain, Sun, ChevronLeft, ChevronRight, Droplets } from 'lucide-react';

export const metadata = {
  title: "Altyn-Arashan - Golden Hot Springs | Top 10 Places | Tien Shan Journeys",
  description: "Discover Altyn-Arashan, a remote valley famous for natural hot springs and stunning mountain scenery. Trek through spruce forests to healing waters beneath glacial peaks.",
};

// ============================================
// PLACE DATA
// ============================================
const placeData = {
  rank: 6,
  name: 'Altyn-Arashan',
  tagline: 'Golden Hot Springs',
  region: 'Issyk-Kul Region',
  regionLink: '/destinations/issyk-kul-lake',
  
  heroImage: '/images/top-10/altyn-arashan.jpg',
  
  quickFacts: {
    location: 'Ak-Suu District, near Karakol',
    altitude: '2,500 - 3,000 meters',
    bestTime: 'June - September (trekking), Year-round (hot springs)',
    duration: '1-3 days',
    fromKarakol: '~2-3 hours (4x4 + hiking)',
    fromBishkek: '~6-7 hours to Karakol, then 2-3 hrs',
  },
  
  description: [
    '[Placeholder: Altyn-Arashan means "Golden Spa" in Kyrgyz, and this remote valley has been drawing visitors to its natural hot springs for centuries. Nestled at 3,000 meters in a spectacular alpine valley, the hot springs range from pleasantly warm to almost too hot, with minerals said to have healing properties.]',
    '[Placeholder: The journey to Altyn-Arashan is an adventure in itself. From the town of Karakol, a rough 4x4 track winds through dense Tien Shan spruce forests before giving way to alpine meadows. Many visitors choose to hike the final stretch—about 3-4 hours through some of Kyrgyzstan\'s most beautiful scenery.]',
    '[Placeholder: The valley offers much more than hot springs. Surrounded by 4,000+ meter peaks including the majestic Palatka (Tent) Mountain, it\'s a base for serious treks to Ala-Kul Lake and beyond. But even a simple overnight stay, soaking in hot pools under a canopy of stars, is unforgettable.]',
  ],
  
  gallery: [
    { src: '/images/top-10/altyn-arashan/gallery-1.jpg', alt: 'Altyn-Arashan valley panorama' },
    { src: '/images/top-10/altyn-arashan/gallery-2.jpg', alt: 'Natural hot springs pools' },
    { src: '/images/top-10/altyn-arashan/gallery-3.jpg', alt: 'Tien Shan spruce forest trail' },
    { src: '/images/top-10/altyn-arashan/gallery-4.jpg', alt: 'Palatka peak view' },
    { src: '/images/top-10/altyn-arashan/gallery-5.jpg', alt: 'Rustic guesthouse accommodation' },
    { src: '/images/top-10/altyn-arashan/gallery-6.jpg', alt: 'Starry night over the valley' },
  ],
  
  activities: [
    {
      title: 'Soak in Hot Springs',
      description: '[Placeholder: Multiple natural hot spring pools offer varying temperatures. Some are enclosed in rustic wooden huts, others open to the sky.]',
    },
    {
      title: 'Trek to Ala-Kul Lake',
      description: '[Placeholder: A challenging but rewarding 2-day trek over a 3,800m pass to the stunning turquoise Ala-Kul alpine lake.]',
    },
    {
      title: 'Hike from Karakol',
      description: '[Placeholder: The 15km trail from Ak-Suu village through spruce forests is one of Kyrgyzstan\'s most scenic day hikes.]',
    },
    {
      title: 'Stargazing',
      description: '[Placeholder: With no electricity in most guesthouses, the night sky here is spectacular. Soak in a hot pool and watch for shooting stars.]',
    },
  ],
  
  relatedTours: [
    {
      name: 'Classic Kyrgyzstan',
      slug: 'classic-kyrgyzstan',
      duration: '12 days',
      description: 'This comprehensive tour includes time in the Karakol area with options to visit Altyn-Arashan\'s famous hot springs.',
    },
    {
      name: 'Treasures of Tien Shan',
      slug: 'treasures-tien-shan',
      duration: '10 days',
      description: 'Experience the natural wonders of the Issyk-Kul region including the healing waters of Altyn-Arashan.',
    },
  ],
  
  prevPlace: { name: 'Sary-Chelek Lake', slug: 'sary-chelek', rank: 5 },
  nextPlace: { name: 'Jeti-Oguz Rocks', slug: 'jeti-oguz', rank: 7 },
};
// ============================================
// END PLACE DATA
// ============================================

export default function AltynArashanPage() {
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
            backgroundColor: '#4A7C6F' // Fallback alpine-green color
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

      {/* Hot Springs Banner */}
      <section className="bg-sky-50 border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <Droplets className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sky-800 font-medium">Natural Hot Springs</p>
              <p className="text-sky-700 text-sm">
                The valley features multiple natural hot spring pools with temperatures ranging from 30°C to 50°C. 
                Locals believe the mineral-rich waters have healing properties for joints and skin.
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
                        backgroundColor: '#6B9E8A'
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

              {/* Access Note */}
              <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-100">
                <p className="text-sky-800 text-xs font-medium">🚙 4x4 or Hiking Required</p>
                <p className="text-sky-700 text-xs mt-1">The final section requires a 4x4 vehicle or a scenic 3-4 hour hike.</p>
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
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                Discover nearby Karakol, Jeti-Oguz, and the southern shores of Issyk-Kul Lake.
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