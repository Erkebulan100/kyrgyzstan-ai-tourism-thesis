import Link from 'next/link';

export const metadata = {
  title: "Top 10 Places to See | Tien Shan Journeys",
  description: "Discover the 10 most breathtaking destinations in Kyrgyzstan - from alpine lakes to ancient Silk Road sites. Plan your Central Asia adventure.",
};

const places = [
  {
    rank: 1,
    name: 'Issyk-Kul Lake',
    slug: 'issyk-kul-lake',
    region: 'Issyk-Kul Region',
    tagline: 'The Pearl of Central Asia',
    description: '[Placeholder: The world\'s second-largest alpine lake, never freezing despite being surrounded by snow-capped peaks. A natural wonder that has captivated travelers for centuries.]',
    image: '/images/top-10/issyk-kul-lake.jpg',
  },
  {
    rank: 2,
    name: 'Song-Kul Lake',
    slug: 'song-kul-lake',
    region: 'Naryn Region',
    tagline: 'Where Nomads Roam',
    description: '[Placeholder: A high-altitude lake at 3,016m surrounded by lush summer pastures where nomadic herders bring their livestock. Experience authentic yurt stays under endless stars.]',
    image: '/images/top-10/song-kul-lake.jpg',
  },
  {
    rank: 3,
    name: 'Ala Archa National Park',
    slug: 'ala-archa',
    region: 'Near Bishkek',
    tagline: 'Gateway to the Tien Shan',
    description: '[Placeholder: Just 40km from the capital, this alpine wonderland offers dramatic peaks, glaciers, and hiking trails for all skill levels. The perfect introduction to Kyrgyz mountains.]',
    image: '/images/top-10/ala-archa.jpg',
  },
  {
    rank: 4,
    name: 'Tash Rabat',
    slug: 'tash-rabat',
    region: 'Naryn Region',
    tagline: 'Ancient Silk Road Caravanserai',
    description: '[Placeholder: A remarkably preserved 15th-century stone caravanserai nestled in a remote mountain valley. Step back in time to when merchants traveled the legendary Silk Road.]',
    image: '/images/top-10/tash-rabat.jpg',
  },
  {
    rank: 5,
    name: 'Burana Tower',
    slug: 'burana-tower',
    region: 'Chuy Region',
    tagline: 'Echoes of a Lost City',
    description: '[Placeholder: The iconic 11th-century minaret is all that remains of the ancient city of Balasagun. Climb to the top and explore the field of mysterious stone figures called balbals.]',
    image: '/images/top-10/burana-tower.jpg',
  },
  {
    rank: 6,
    name: 'Arslanbob Waterfalls',
    slug: 'arslanbob-waterfalls',
    region: 'Jalal-Abad Region',
    tagline: 'Heart of the Walnut Forest',
    description: '[Placeholder: Hidden within the world\'s largest walnut forest, these spectacular waterfalls cascade through lush green valleys. A hiker\'s paradise with warm Uzbek hospitality.]',
    image: '/images/top-10/arslanbob-waterfalls.jpg',
  },
  {
    rank: 7,
    name: 'Skazka Canyon',
    slug: 'skazka-canyon',
    region: 'Issyk-Kul Region',
    tagline: 'The Fairytale Canyon',
    description: '[Placeholder: Otherworldly red and orange rock formations sculpted by wind and water over millions of years. Best visited at sunset when the colors come alive.]',
    image: '/images/top-10/skazka-canyon.jpg',
  },
  {
    rank: 8,
    name: 'Jeti-Oguz Rocks',
    slug: 'jeti-oguz',
    region: 'Issyk-Kul Region',
    tagline: 'The Seven Bulls',
    description: '[Placeholder: Dramatic red sandstone formations resembling seven bulls lying side by side. Kyrgyz legend tells a tragic love story behind these striking rocks.]',
    image: '/images/top-10/jeti-oguz.jpg',
  },
  {
    rank: 9,
    name: 'Sulaiman-Too Mountain',
    slug: 'sulaiman-too',
    region: 'Osh City',
    tagline: 'Sacred Mountain of the Silk Road',
    description: '[Placeholder: A UNESCO World Heritage Site and Central Asia\'s most sacred mountain. For over 3,000 years, pilgrims have climbed its five peaks seeking healing and blessings.]',
    image: '/images/top-10/sulaiman-too.jpg',
  },
  {
    rank: 10,
    name: 'Kel-Suu Lake',
    slug: 'kel-suu-lake',
    region: 'At-Bashy Valley',
    tagline: 'The Hidden Gem',
    description: '[Placeholder: A remote, pristine lake near the Chinese border, accessible only in summer. Its turquoise waters surrounded by sheer cliffs make it one of Kyrgyzstan\'s most dramatic landscapes.]',
    image: '/images/top-10/kel-suu-lake.jpg',
  },
];

export default function Top10PlacesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      
      {/* Hero Section - Editorial Style */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium tracking-widest uppercase mb-4">
              Curated Collection
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Top 10 Places
              <span className="block text-amber-400">to See in Kyrgyzstan</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl">
              From ancient Silk Road caravanserais to pristine alpine lakes, these are the destinations 
              that define the magic of Kyrgyzstan. Each one tells a story of natural wonder and nomadic heritage.
            </p>
          </div>
          
          {/* Decorative large number */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5 leading-none hidden lg:block">
            10
          </div>
        </div>
      </section>

      {/* Places Grid - Magazine Layout */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Featured Place #1 - Full Width */}
        <Link href={`/top-10-places/${places[0].slug}`} className="group block mb-12">
          <article className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-[500px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${places[0].image}')`, backgroundColor: '#d4a574' }}
                />
                {/* Rank Badge */}
                <div className="absolute top-6 left-6 bg-amber-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  {places[0].rank}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-2">
                  {places[0].region}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {places[0].name}
                </h2>
                <p className="text-lg text-stone-500 italic mb-4">{places[0].tagline}</p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {places[0].description}
                </p>
                <span className="inline-flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Explore this destination
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Places #2-3 - Two Column */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {places.slice(1, 3).map((place) => (
            <Link key={place.rank} href={`/top-10-places/${place.slug}`} className="group block">
              <article className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${place.image}')`, backgroundColor: '#8fbc8f' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {place.rank}
                  </div>
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-amber-300 text-sm font-medium tracking-wide uppercase">
                      {place.region}
                    </p>
                    <h2 className="text-2xl font-bold text-white">
                      {place.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-500 italic mb-3">{place.tagline}</p>
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {place.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Places #4-6 - Three Column */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {places.slice(3, 6).map((place) => (
            <Link key={place.rank} href={`/top-10-places/${place.slug}`} className="group block">
              <article className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${place.image}')`, backgroundColor: '#deb887' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* Rank */}
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {place.rank}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h2 className="text-xl font-bold text-white">{place.name}</h2>
                    <p className="text-amber-300 text-xs tracking-wide uppercase">{place.region}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-stone-500 text-sm italic">{place.tagline}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Interlude Quote */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-8 md:p-12 mb-12 text-center">
          <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed max-w-3xl mx-auto">
            &ldquo;In Kyrgyzstan, every mountain pass reveals a new wonder, 
            every valley holds an ancient story.&rdquo;
          </blockquote>
          <p className="text-amber-400 mt-4 tracking-wide uppercase text-sm">— The Spirit of Tien Shan</p>
        </div>

        {/* Places #7-8 - Two Column Reversed */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {places.slice(6, 8).map((place) => (
            <Link key={place.rank} href={`/top-10-places/${place.slug}`} className="group block">
              <article className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col-reverse md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-amber-500 text-white text-lg font-bold w-9 h-9 rounded-full flex items-center justify-center">
                        {place.rank}
                      </span>
                      <p className="text-amber-600 text-xs font-medium tracking-wide uppercase">
                        {place.region}
                      </p>
                    </div>
                    <h2 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-amber-600 transition-colors">
                      {place.name}
                    </h2>
                    <p className="text-stone-500 italic text-sm mb-2">{place.tagline}</p>
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                      {place.description}
                    </p>
                  </div>
                  <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${place.image}')`, backgroundColor: '#cd853f' }}
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Places #9-10 - Final Two */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {places.slice(8, 10).map((place) => (
            <Link key={place.rank} href={`/top-10-places/${place.slug}`} className="group block">
              <article className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${place.image}')`, backgroundColor: '#4682b4' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {place.rank}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-amber-300 text-sm font-medium tracking-wide uppercase">
                      {place.region}
                    </p>
                    <h2 className="text-2xl font-bold text-white">
                      {place.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-500 italic mb-3">{place.tagline}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore These Wonders?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let us craft your perfect Kyrgyzstan adventure, visiting the places that speak to you most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="bg-white text-amber-600 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors shadow-lg"
            >
              Browse Our Tours
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Plan a Custom Trip
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}