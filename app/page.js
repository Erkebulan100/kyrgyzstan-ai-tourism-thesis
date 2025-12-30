
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider text-white">
            TIEN SHAN JOURNEYS
          </h1>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm inline-block px-8 py-3 mt-4 rounded-lg">
            <p className="text-lg md:text-xl tracking-wide uppercase text-blue-50">
              Bespoke travel in Kyrgyzstan and Central Asia
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section 
        className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 min-h-[900px]"
        style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', position: 'relative' }}
      >
        <div className="relative w-full max-w-[1400px] mx-auto h-[700px]">

          
          {/* Central Logo & Text */}
          <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <img 
              src="/images/mountain.svg" 
              alt="Mountain" 
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 object-contain opacity-80"
              style={{ filter: 'invert(1) brightness(1)' }}
            />
            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
              Five paths.<br />
              One land.<br />
              Infinite memories.
            </h2>
          </div>

          {/* Tour Circles */}
          {[
            { name: "Classic\nKyrgyzstan", href: "/tours/classic-kyrgyzstan", pos: { left: '8%', top: '15%' } },
            { name: "Nomads of\nTien Shan", href: "/tours/nomads-tien-shan", pos: { left: '46%', top: '8%' } },
            { name: "Treasures of\nTien Shan", href: "/tours/treasures-tien-shan", pos: { right: '8%', top: '22%' } },
            { name: "Golden circle of\nKyrgyzstan", href: "/tours/golden-circle", pos: { left: '22%', bottom: '10%' } },
            { name: "Where Tien Shan\nmeets Pamir", href: "/tours/tien-shan-meets-pamir", pos: { right: '19%', bottom: '18%' } },
          ].map((tour, idx) => (
            <Link key={idx} href={tour.href} className="absolute z-30 hover:scale-105 transition-transform" style={tour.pos}>
              <div className="bg-white/95 rounded-full w-28 h-28 md:w-36 md:h-36 flex items-center justify-center shadow-2xl border border-white/10 p-4 text-center">
                <h3 className="font-bold text-gray-800 text-xs md:text-sm whitespace-pre-line leading-tight">{tour.name}</h3>
              </div>
            </Link>
          ))}

          {/* Decorative Icons (Eagle, Horse, Camel, Yurt, Leopard) */}
          

          {/* Eagle SVG - Realistic Flying Eagle Silhouette */}
          <div className="absolute top-[1%] right-[21%] z-10">
            <img 
              src="/images/eagle.svg" 
              alt="Eagle" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Horse 1 - Between Classic Kyrgyzstan and Golden Circle */}
          <div className="absolute top-[55%] left-[15%] z-10">
            <img 
              src="/images/horse.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Horse 2 - Next to Horse 1 */}
          <div className="absolute top-[45%] left-[21%] z-10">
            <img 
              src="/images/horse1.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Camel 1 - the big one - Bottom right area */}
          <div className="absolute bottom-[19%] right-[11%] z-10">
            <img 
              src="/images/camel.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 2 -the slim one- Next to Camel 1 */}
          <div className="absolute bottom-[5%] right-[25%] z-10">
            <img 
              src="/images/camel1.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 3 with a rider- Third camel */}
          <div className="absolute bottom-[5%] right-[15%] z-10">
            <img 
              src="/images/camels.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Snow Leopard - Right side of the page */}
          <div className="absolute top-[45%] right-[8%] z-10">
            <img 
              src="/images/snow-leopard.svg" 
              alt="Snow Leopard" 
              className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Yurt 1 - Left of "Nomads of Tien Shan" */}
          <div className="absolute top-[9%] left-[29%] z-10">
            <img 
              src="/images/yurt.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 2 - Next to Yurt 1 */}
          <div className="absolute top-[1%] left-[33%] z-10">
            <img 
              src="/images/yurt1.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 3 - Third yurt */}
          <div className="absolute top-[9%] left-[37%] z-10">
            <img 
              src="/images/yurt2.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Winding Map Dots */}
          {[
            // Trail 1
            { top: '15%', left: '20%' }, { top: '13%', left: '25%' }, { top: '11%', left: '30%' }, { top: '10%', left: '35%' }, { top: '10%', left: '40%' },
            // Trail 2
            { top: '12%', right: '35%' }, { top: '15%', right: '30%' }, { top: '18%', right: '25%' }, { top: '22%', right: '20%' },
            // Trail 3
            { top: '25%', left: '12%' }, { top: '35%', left: '15%' }, { top: '45%', left: '18%' }, { top: '55%', left: '21%' }, { top: '65%', left: '23%' },
            // Trail 4
            { bottom: '25%', right: '35%' }, { bottom: '20%', right: '30%' }, { bottom: '30%', right: '25%' }, { bottom: '40%', right: '22%' },
            // Scatter
            { top: '50%', left: '35%' }, { top: '45%', right: '35%' }, { bottom: '15%', left: '40%' }, { top: '5%', left: '55%' }
          ].map((pos, i) => (
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-white/25" style={pos} />
          ))}
        </div>
      </section>
    </main>
  );
}