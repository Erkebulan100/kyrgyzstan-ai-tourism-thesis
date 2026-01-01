import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';


// ## folder structure:
// project/
// ├── components/
// │   └── imageslider.js      ← create this
// ├── public/images/destinations/slider/
// │   ├── slide-1.jpg         ← download from old site
// │   ├── slide-2.jpg
// │   └── slide-3.jpg
// └── app/destinations/page.js ← update this
export const metadata = {
  title: "Destinations | Tienshan Journeys | Explore Kyrgyzstan",
  description: "Discover Kyrgyzstan's most beautiful destinations - from Issyk-Kul lake to Arslanbob walnut forests. Plan your Central Asia adventure.",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
        <section className="relative h-[100vh] max-h-[600px]">
        <ImageSlider 
            images={[
            '/images/destinations/slider/slide-1.jpg',
            '/images/destinations/slider/slide-2.jpg',
            '/images/destinations/slider/slide-3.jpg',
            '/images/destinations/slider/slide-4.jpg',
            '/images/destinations/slider/slide-5.jpg',
            '/images/destinations/slider/slide-6.jpg',
            '/images/destinations/slider/slide-7.jpg',
            ]}
            
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-5">
            <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Destinations</h1>
            <p className="text-xl text-blue-100">Explore the wonders of Kyrgyzstan</p>
            </div>
        </div>
        </section>
      

      {/* Destinations Constellation Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 min-h-[900px]">
        <div className="relative w-full max-w-[1400px] mx-auto h-[750px]">

          {/* Central Text */}
          <div className="absolute left-1/2 top-[39%] md:top-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <img 
              src="/images/mountain.svg" 
              alt="Mountain" 
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 object-contain opacity-80"
              style={{ filter: 'invert(1) brightness(1)' }}
            />
            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
              Nine <br />
              regions.<br />
              Endless beauty.<br />
              Your adventure awaits.
            </h2>
          </div>

          {/* Destination Circles */}
          {[
            { name: "Issyk-Kul", subtitle: "The Hot Lake", href: "/destinations/issyk-kul", className: "left-[5%] top-[8%] md:left-[11%] md:top-[12%]" },
            { name: "Bishkek", subtitle: "Capital City", href: "/destinations/bishkek", className: "left-[36%] top-[1%] md:left-[30%] md:top-[5%]" },
            { name: "Arslanbob", subtitle: "Walnut Forest", href: "/destinations/arslanbob", className: "right-[2%] top-[15%] md:right-[25%] md:top-[8%]" },
            { name: "Naryn", subtitle: "Mountain Heart", href: "/destinations/naryn", className: "right-[2%] top-[31%] md:right-[5%] md:top-[20%]" },
            { name: "Song Kul", subtitle: "Alpine Lake", href: "/destinations/song-kul", className: "left-[1%] top-[25%] md:left-[5%] md:top-[39%]" },
            { name: "Chong-Kemin", subtitle: "Green Valley", href: "/destinations/chong-kemin", className: "right-[1%] top-[49%] md:right-[8%] md:top-[49%]" },
            { name: "Suusamyr", subtitle: "High Pastures", href: "/destinations/suusamyr", className: "left-[1%] bottom-[43%] md:left-[15%] md:bottom-[11%]" },
            { name: "At-Bashy", subtitle: "Wild Valley", href: "/destinations/at-bashy", className: "left-[15%] bottom-[27%] md:left-[37%] md:bottom-[3%]" },
            { name: "Osh", subtitle: "Silk Road City", href: "/destinations/osh", className: "right-[25%] bottom-[25%] md:right-[22%] md:bottom-[5%]" },
            ].map((dest, idx) => (
            <Link key={idx} href={dest.href} className={`absolute z-30 group ${dest.className}`}>
              <div className="bg-white/95 rounded-full w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-2xl border border-white/10 p-2 md:p-4 text-center hover:scale-105 transition-transform">
                <h3 className="font-bold text-gray-800 text-xs md:text-base">{dest.name}</h3>
                <p className="text-gray-500 text-[8px] md:text-xs mt-1">{dest.subtitle}</p>
              </div>
            </Link>
          ))}

          {/* Decorative Icons */}
          <div className="absolute top-[5%] right-[15%] md:top-[8%] md:right-[43%] z-10">
            <img src="/images/eagle.svg" alt="Eagle" className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-70" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>
          
          <div className="absolute top-[35%] left-[25%] md:top-[39%] md:left-[25%] z-10">
            <img src="/images/horse.svg" alt="Horse" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>
          {/* Camel 1 - the big one - Bottom right area */}
          <div className="absolute bottom-[67%] right-[29%] md:bottom-[49%] md:right-[31%] z-10">
            <img 
              src="/images/camel.svg" 
              alt="Camel" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          <div className="absolute bottom-[59%] right-[27%] md:bottom-[31%] md:right-[27%] z-10">
            <img src="/images/yurt.svg" alt="Yurt" className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-70" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>

          <div className="absolute bottom-[41%] left-[45%] md:bottom-[25%] md:left-[35%] z-10">
            <img src="/images/snow-leopard.svg" alt="Snow Leopard" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>

          {/* Decorative Dots */}
          {/* between Suusamyr and At-Bashy */}
          <div className="block md:hidden absolute top-[62%] left-[16%] md:top-[83.9%] md:left-[36%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[61%] left-[15%] md:top-[83%] md:left-[29%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[60%] left-[14%] md:top-[83.3%] md:left-[31%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[59%] left-[13%] md:top-[83.6%] md:left-[33%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[58%] left-[11.5%] md:top-[83.9%] md:left-[35%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[57%] left-[10%] md:top-[83.9%] md:left-[36%] w-1.5 h-1.5 rounded-full bg-white/30" />
          

          {/* between Song Kul and Suusamyr */}
          <div className="absolute top-[43%] left-[8.6%] md:top-[63%] md:left-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[41%] left-[8.6%] md:top-[18%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[39%] left-[8.6%] md:top-[18%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[37.3%] left-[8.6%] md:top-[18%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Song Kul and Issyk-Kul */}
          <div className="absolute top-[21%] left-[12.5%] md:top-[38.5%] md:left-[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="block md:hidden absolute top-[22.5%] left-[12%] md:top-[18%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="block md:hidden absolute top-[24%] left-[11.5%] md:top-[24%] md:left-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Issyk-Kul and Bishkek */}
          <div className="absolute top-[9%] left-[34%] md:top-[21%] md:left-[29%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[10%] left-[31.5%] md:top-[22%] md:left-[27.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[29%] md:top-[23%] md:left-[26%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Bishkek and Arslanbob*/}
          <div className="absolute top-[9%] left-[61%] md:top-[21%] md:left-[59%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[10%] left-[63%] md:top-[21%] md:left-[57%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[65%] md:top-[21%] md:left-[55%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[12%] left-[67%] md:top-[21%] md:left-[53%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13%] left-[69%] md:top-[21%] md:left-[51%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[14%] left-[71%] md:top-[21%] md:left-[49%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[15%] left-[73%] md:top-[21%] md:left-[47%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[16%] left-[75%] md:top-[21%] md:left-[45%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* <div className="absolute top-[17%] left-[77%] md:top-[53%] md:left-[19%] w-1.5 h-1.5 rounded-full bg-white/30" /> */}

          {/* between Arslanbob and Naryn*/}
          <div className="absolute top-[28%] left-[85%] md:top-[23%] md:left-[76%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[29%] left-[85%] md:top-[25%] md:left-[78%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[30%] left-[85%] md:top-[27%] md:left-[80%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Naryn and Chong-Kemin */}
          <div className="block md:hidden absolute top-[44%] left-[85%] md:top-[23%] md:left-[75%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[45%] left-[85%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[46%] left-[85%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[47%] left-[85%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[48%] left-[85%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Chong-Kemin and Osh on mobile only*/}
          <div className="absolute top-[62%] left-[85%] md:top-[47%] md:left-[85%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[63%] left-[83%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[64%] left-[81%] md:top-[49%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* between Chong-Kemin and Osh on desktop and on mobile */}
          <div className="absolute top-[65%] left-[79%] md:top-[77%] md:left-[83%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[66%] left-[77%] md:top-[79%] md:left-[81%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[67%] left-[75%] md:top-[79%] md:left-[79%] w-1.5 h-1.5 rounded-full bg-white/30" /> 


          

          {/* between Osh and At-Bashy*/}
          <div className="absolute top-[69%] left-[48%] md:top-[89%] md:left-[63%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[68.75%] left-[45%] md:top-[90%] md:left-[60%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[68.5%] left-[42%] md:top-[90%] md:left-[57%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[68.25%] left-[39%] md:top-[90%] md:left-[54%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block absolute top-[68.25%] left-[39%] md:top-[90%] md:left-[51%] w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Kyrgyzstan</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Kyrgyzstan is a beautiful country with many sunny days and exceptionally friendly people. Kyrgyzstan is a small Central Asian state with population close to 6 million people and growing market economy. Kyrgyzstan is a mountainous country; 94% of its area is covered by mountain ranges of Tien Shan and Pamir. Rich highland pastures allowed Kyrgyz people to keep nomadic life for centuries; they became settled only in the last century. However, in Kyrgyzstan, some people still lead nomadic way of life in the summer due to the needs of animal husbandry. Their seasonal nomadic lifestyle is very similar to what was several centuries ago.

            Kyrgyz lands witnessed many historical events. The most famous invaders as Alexander the Great, Genghis Khan, and Tamerlane marched through Kyrgyzstan. Kyrgyzstan had an important segment of the Silk Road which connected Asia with Europe. In the XIX century when Russian and British Empires had fought for the Central Asia Kyrgyzstan joined Russia. The XX century was a turning point in Kyrgyz history as the country became part of the Soviet Union. Today Kyrgyzstan is an independent and democratic country.

            Massive gorges and passes, highland pastures, beautiful valleys, crystalline lakes, swift rivers, and snow-capped mountains are only some of numerous attractions in Kyrgyzstan. Horseback-riding, hiking, camping, and rafting are but some options for the tourist.
            Tien Shan Journeys offers you bespoke travel in Kyrgyzstan providing experiences which would best fit your tastes and interests. If you want to get to know this wonderful country, visit our Itineraries page. After that contact us today to start planning your unforgettable journey to Kyrgyzstan!
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all">
            Plan Your Journey
          </Link>
        </div>
      </section>

    </main>
  );
}