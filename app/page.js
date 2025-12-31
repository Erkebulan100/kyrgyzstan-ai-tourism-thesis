
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 90px)', marginTop: '0' }}>
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-no-repeat bg-bottom"
    style={{ 
      backgroundImage: "url('/images/hero/hero-yurt-night.jpg')",
      // backgroundPosition: 'center bottom'
    }}
  ></div>
  
  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
  {/* Logo - Top Left */}
<div className="absolute top-2 left-4 md:top-8 md:left-8 z-10">
  <img 
    src="/images/logo/logo_without_slogan.png" 
    alt="Tien Shan Journeys" 
    className="w-32 md:w-56 h-auto opacity-90"
  />
</div>
  {/* Content - Tagline Only */}
<div className="absolute top-16 right-4 md:top-8 md:right-8 z-10 text-white">
  <div className="px-3 py-1 md:px-6 md:py-3 rounded text-center" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))' }}>
    <p className="text-xs md:text-base font-light tracking-wider uppercase">
      Bespoke Travel in Kyrgyzstan and Central Asia
    </p>
  </div>
</div>
</section>
      

      {/* Tours Section */}
      <section 
        className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 min-h-[900px]"
        
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
              <div className="bg-white/95 rounded-full w-20 h-20 md:w-36 md:h-36 flex items-center justify-center shadow-2xl border border-white/10 p-2 md:p-4 text-center">
                <h3 className="font-bold text-gray-800 text-[10px] md:text-sm whitespace-pre-line leading-tight">{tour.name}</h3>
              </div>
            </Link>
          ))}

          {/* Decorative Icons (Eagle, Horse, Camel, Yurt, Leopard) */}
          

          {/* Eagle SVG - Realistic Flying Eagle Silhouette */}
          <div className="absolute top-[8%] right-[6%] md:top-[7%] md:right-[25%] z-10">
            <img 
              src="/images/eagle.svg" 
              alt="Eagle" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Horse 1 - With a cap - Between Classic Kyrgyzstan and Golden Circle */}
          <div className="absolute top-[55%] left-[8%] md:top-[55%] md:left-[15%] z-10">
            <img 
              src="/images/horse.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Horse 2 - Next to Horse 1 */}
          <div className="absolute top-[45%] left-[11%] z-10">
            <img 
              src="/images/horse1.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Camel 1 - the big one - Bottom right area */}
          <div className="absolute bottom-[15%] right-[2%] md:bottom-[19%] md:right-[11%] z-10">
            <img 
              src="/images/camel.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 2 -the slim one- Next to Camel 1 */}
          <div className="absolute bottom-[7%] right-[33%] md:bottom-[5%] md:right-[25%] z-10">
            <img 
              src="/images/camel1.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 3 with a rider- Third camel */}
          <div className="absolute bottom-[5%] right-[16%] md:bottom-[7%] md:right-[15%] z-10">
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
          {/* Yurt 1 - yurt frame - Left of "Nomads of Tien Shan" */}
          <div className="absolute top-[5%] left-[19%] md:top-[5%] md:left-[21%] z-10">
            <img 
              src="/images/yurt.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 2 - filled icon */}
          <div className="absolute top-[1%] left-[33%] md:top-[1%] md:left-[28%] z-10">
            <img 
              src="/images/yurt1.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 3 - Mongolian yurt */}
          <div className="absolute top-[9%] left-[29%] md:top-[1%] md:left-[37%] z-10">
            <img 
              src="/images/yurt2.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
{/* Winding Map Dots - Curved paths connecting tour circles */}
{[
  // Path from Classic Kyrgyzstan down to Golden Circle (left side)
  { top: '18%', left: '12%' }, { top: '21%', left: '12.5%' }, { top: '24%', left: '13%' },
  { top: '26%', left: '11%' }, { top: '29%', left: '11.5%' }, { top: '32%', left: '12%' },
  { top: '35%', left: '12.5%' }, { top: '38%', left: '13%' }, { top: '41%', left: '13.5%' },
  { top: '44%', left: '14%' }, { top: '47%', left: '15%' }, { top: '50%', left: '16%' },
  { top: '53%', left: '17%' }, { top: '56%', left: '18%' }, { top: '59%', left: '19%' },
  { top: '62%', left: '20%' }, { top: '65%', left: '21%' }, { top: '68%', left: '22%' },
  { top: '71%', left: '23%' }, { top: '74%', left: '24%' }, { top: '77%', left: '25%' },
  
  // Path from Golden Circle curving right toward bottom center
  { bottom: '18%', left: '30%' }, { bottom: '19%', left: '33%' }, { bottom: '20%', left: '36%' },
  { bottom: '21%', left: '39%' }, { bottom: '22%', left: '42%' }, { bottom: '22.5%', left: '45%' },
  { bottom: '22%', left: '48%' }, { bottom: '21.5%', left: '51%' }, { bottom: '21.7%', left: '54%' },
  { bottom: '22%', left: '57%' }, { bottom: '22.5%', left: '60%' }, { bottom: '23%', left: '63%' },
  { bottom: '23.5%', left: '66%' }, { bottom: '24%', left: '69%' }, { bottom: '24.5%', left: '72%' },
  { bottom: '25%', left: '75%' }, { bottom: '25.5%', left: '78%' },
  
  
  // Path from Where Tien Shan meets Pamir up to Treasures of Tien Shan
  { bottom: '25%', right: '25%' }, { bottom: '28%', right: '24%' }, { bottom: '31%', right: '23%' },
  { bottom: '34%', right: '22%' }, { bottom: '37%', right: '21%' }, { bottom: '40%', right: '20%' },
  { bottom: '43%', right: '19%' }, { bottom: '46%', right: '18%' }, { bottom: '49%', right: '17%' },
  { bottom: '52%', right: '16%' }, { bottom: '55%', right: '15%' }, { bottom: '58%', right: '14%' },
  { bottom: '61%', right: '13%' }, { bottom: '64%', right: '12%' }, { bottom: '67%', right: '11%' },
  { bottom: '70%', right: '10%' },
 
  // Path from Treasures curving left toward Nomads
  { top: '30%', right: '16%' }, { top: '28%', right: '19%' }, { top: '26%', right: '22%' },
  { top: '24%', right: '25%' }, { top: '22%', right: '28%' }, { top: '21%', right: '31%' },
  { top: '20%', right: '34%' }, { top: '19%', right: '37%' }, { top: '18%', right: '40%' },
  { top: '17%', right: '43%' }, { top: '16%', right: '46%' }, { top: '15%', right: '49%' },
  
  
  // Path from Nomads curving left toward Classic Kyrgyzstan
  { top: '11.5%', left: '57%' }, { top: '11%', left: '54%' },
  { top: '14%', left: '55%' }, {top:'15%', left: '56%'}, { top: '13.5%', left: '53%' }, {top: '13.3%', left: '52%'}, { top: '13%', left: '51%' }, 
  { top: '13%', left: '49%'}, { top: '12.5%', left: '47.5%' }, { top: '12%', left: '46%' },{ top: '11.5%', left: '44.5%' }, { top: '11%', left: '43%' },
  { top: '10.5%', left: '40%' }, { top: '10.75%', left: '39%' }, { top: '11%', left: '37%' }, { top: '12%', left: '34%' },
  { top: '13%', left: '31%' }, { top: '13.5%', left: '29.5%' }, { top: '14%', left: '28%' }, { top: '15%', left: '25%' },
  { top: '16%', left: '22%' }, { top: '17%', left: '19%' }, { top: '18.5%', left: '16%' },
  { top: '20%', left: '13%' }, { top: '21.5%', left: '10%' },
  
].map((pos, i) => (
  <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-white/30" style={pos} />
))}
          
        </div>
      </section>
    </main>
  );
}