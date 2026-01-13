
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      <section 
  className="relative h-96 flex items-end justify-center pb-[45%] md:pb-[23%]"
  style={{
    backgroundImage: "url('/images/hero/hero-yurt-night.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center 99%'
  }}
>
  {/* Logo - Top Left */}
  <div className="absolute top-5 left-4 md:top-7 md:left-7 z-10">
    <img 
      src="/images/logo/logo_without_slogan.png" 
      alt="Tien Shan Journeys" 
      className="w-32 md:w-63 h-auto"
      style={{ filter: 'brightness(3)' }}
    />
  </div>
  
  {/* Tagline - Top Right */}
  <div className="absolute top-20 right-4 md:top-14 md:right-8 z-10 text-white">
    <div className="px-3 py-1 rounded text-center" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))' }}>
      <p className="text-xs md:text-base font-light tracking-wider uppercase">
        Bespoke Travel in Kyrgyzstan and Central Asia
      </p>
    </div>
  </div>
</section>
      

      {/* Tours Section */}
      <section 
        className="relative pt-7 pb-7 overflow-hidden bg-gradient-to-r from-blue-950 to-green-950 min-h-[630px] md:min-h-[730px] max-h-[630px] md:max-h-[730px]"
        
      >
        <div className="relative w-full max-w-[1400px] mx-auto h-[700px]">

          
          {/* Central Logo & Text */}
          <div className="absolute top-[39%] left-1/2 md:top-[52%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
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
  { name: "Classic\nKyrgyzstan", href: "/tours/classic-kyrgyzstan", className: "left-[8%] top-[15%] md:left-[8%] md:top-[15%]" },
  { name: "Nomads of\nTien Shan", href: "/tours/nomads-tien-shan", className: "left-[46%] top-[8%] md:left-[46%] md:top-[8%]" },
  { name: "Treasures of\nTien Shan", href: "/tours/treasures-tien-shan", className: "right-[8%] top-[22%] md:right-[8%] md:top-[22%]" },
  { name: "Golden circle of\nKyrgyzstan", href: "/tours/golden-circle", className: "left-[9%] bottom-[30%] md:left-[22%] md:bottom-[10%]" },
  { name: "Where Tien Shan\nmeets Pamir", href: "/tours/tien-shan-meets-pamir", className: "right-[15%] bottom-[28%] md:right-[19%] md:bottom-[18%]" },
].map((tour, idx) => (
  <Link key={idx} href={tour.href} className={`absolute z-30 hover:scale-105 transition-transform ${tour.className}`}>
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
          <div className="absolute top-[31%] left-[1%] md:top-[55%] md:left-[15%] z-10">
            <img 
              src="/images/horse.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Horse 2 - standart-  */}
          <div className="absolute top-[45%] left-[11%] z-10">
            <img 
              src="/images/horse1.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Camel 1 - the big one - Bottom right area */}
          <div className="absolute bottom-[21%] right-[2%] md:bottom-[19%] md:right-[11%] z-10">
            <img 
              src="/images/camel.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 2 -the slim one- Next to Camel 1 */}
          <div className="absolute bottom-[23%] right-[53%] md:bottom-[5%] md:right-[25%] z-10">
            <img 
              src="/images/camel1.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 3 with a rider- Third camel */}
          <div className="absolute bottom-[19%] right-[29%] md:bottom-[7%] md:right-[15%] z-10">
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

          {/* Path from Classic Kyrgyzstan down to Golden Circle (left side) */}
          <div className="absolute top-[18%] left-[12%] md:top-[18%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[21%] left-[12.5%] md:top-[21%] md:left-[12.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[24%] left-[13%] md:top-[24%] md:left-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[26%] left-[11%] md:top-[26%] md:left-[11%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[29%] left-[11.5%] md:top-[29%] md:left-[11.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[32%] left-[12%] md:top-[32%] md:left-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[35%] left-[12.5%] md:top-[35%] md:left-[12.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[38%] left-[13%] md:top-[38%] md:left-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[41%] left-[13.5%] md:top-[41%] md:left-[13.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[44%] left-[14%] md:top-[44%] md:left-[14%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[47%] left-[15%] md:top-[47%] md:left-[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[50%] left-[16%] md:top-[50%] md:left-[16%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[53%] left-[17%] md:top-[53%] md:left-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[56%] left-[18%] md:top-[56%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[59%] left-[19%] md:top-[59%] md:left-[19%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[62%] left-[20%] md:top-[62%] md:left-[20%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block">
            <div className="absolute top-[65%] left-[21%] md:top-[65%] md:left-[21%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute top-[68%] left-[22%] md:top-[68%] md:left-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute top-[71%] left-[23%] md:top-[71%] md:left-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute top-[74%] left-[24%] md:top-[74%] md:left-[24%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute top-[77%] left-[25%] md:top-[77%] md:left-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          {/* Path from Golden Circle curving right toward Where Tien Shan meets Pamir */}
          <div className="absolute bottom-[35%] left-[30%] md:bottom-[18%] md:left-[30%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[35.5%] left-[33%] md:bottom-[19%] md:left-[33%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[36%] left-[36%] md:bottom-[20%] md:left-[36%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[35.5%] left-[39%] md:bottom-[21%] md:left-[39%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[35%] left-[42%] md:bottom-[22%] md:left-[42%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[34.5%] left-[45%] md:bottom-[22.5%] md:left-[45%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[34%] left-[48%] md:bottom-[22%] md:left-[48%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[33.5%] left-[51%] md:bottom-[21.5%] md:left-[51%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[33.7%] left-[54%] md:bottom-[21.7%] md:left-[54%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[33.9%] left-[57%] md:bottom-[22%] md:left-[57%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[33.5%] left-[60%] md:bottom-[22.5%] md:left-[60%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[33%] left-[63%] md:bottom-[23%] md:left-[63%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block">
            <div className="absolute bottom-[23.5%] left-[66%] md:bottom-[23.5%] md:left-[66%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[24%] left-[69%] md:bottom-[24%] md:left-[69%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[24.5%] left-[72%] md:bottom-[24.5%] md:left-[72%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[25%] left-[75%] md:bottom-[25%] md:left-[75%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[25.5%] left-[78%] md:bottom-[25.5%] md:left-[78%] w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          {/* Path from Where Tien Shan meets Pamir up to Treasures of Tien Shan */}
          <div className='hidden md:block'>
            <div className="absolute bottom-[25%] right-[25%] md:bottom-[25%] md:right-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[28%] right-[24%] md:bottom-[28%] md:right-[24%] w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="absolute bottom-[31%] right-[23%] md:bottom-[31%] md:right-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
          <div className="absolute bottom-[34%] right-[22%] md:bottom-[34%] md:right-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[37%] right-[21%] md:bottom-[37%] md:right-[21%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[40%] right-[20%] md:bottom-[40%] md:right-[20%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[43%] right-[19%] md:bottom-[43%] md:right-[19%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[46%] right-[18%] md:bottom-[46%] md:right-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[49%] right-[17%] md:bottom-[49%] md:right-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[52%] right-[16%] md:bottom-[52%] md:right-[16%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[55%] right-[15%] md:bottom-[55%] md:right-[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[58%] right-[14%] md:bottom-[58%] md:right-[14%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[61%] right-[13%] md:bottom-[61%] md:right-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[64%] right-[12%] md:bottom-[64%] md:right-[12%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[67%] right-[11%] md:bottom-[67%] md:right-[11%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[70%] right-[10%] md:bottom-[70%] md:right-[10%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* Path from Treasures curving left toward Nomads */}
          <div className="absolute top-[30%] right-[16%] md:top-[32%] md:right-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[30%] right-[16%] md:top-[30%] md:right-[16%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[28%] right-[19%] md:top-[28%] md:right-[19%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[28%] right-[19%] md:top-[27%] md:right-[20.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[26%] right-[22%] md:top-[26%] md:right-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[25%] right-[23.5%] md:top-[25%] md:right-[23.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[24%] right-[25%] md:top-[24%] md:right-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[23%] right-[26.5%] md:top-[23%] md:right-[26.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[22%] right-[28%] md:top-[22%] md:right-[28%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[21.5%] right-[29.5%] md:top-[21.5%] md:right-[29.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[21%] right-[31%] md:top-[21%] md:right-[31%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[20.5%] right-[32.5%] md:top-[20.5%] md:right-[32.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[20%] right-[34%] md:top-[20%] md:right-[34%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[19.5%] right-[35.5%] md:top-[19.5%] md:right-[35.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[19%] right-[37%] md:top-[19%] md:right-[37%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block absolute top-[19%] right-[37%] md:top-[18.5%] md:right-[38.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[18%] right-[40%] md:top-[18%] md:right-[40%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[17%] right-[43%] md:top-[17%] md:right-[43%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[16%] right-[46%] md:top-[16%] md:right-[46%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[15%] right-[49%] md:top-[15%] md:right-[49%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* Path from Nomads curving left toward Classic Kyrgyzstan */}
          <div className="absolute top-[11.5%] left-[57%] md:top-[11.5%] md:left-[57%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[54%] md:top-[11%] md:left-[54%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[14%] left-[55%] md:top-[14%] md:left-[55%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[15%] left-[56%] md:top-[15%] md:left-[56%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13.5%] left-[53%] md:top-[13.5%] md:left-[53%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13.3%] left-[52%] md:top-[13.3%] md:left-[52%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13%] left-[51%] md:top-[13%] md:left-[51%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13%] left-[49%] md:top-[13%] md:left-[49%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[12.5%] left-[47.5%] md:top-[12.5%] md:left-[47.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[12.25%] left-[46%] md:top-[12.25%] md:left-[46%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11.5%] left-[44.5%] md:top-[11.5%] md:left-[44.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[43%] md:top-[11%] md:left-[43%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[10.75%] left-[41.5%] md:top-[10.75%] md:left-[41.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[10.5%] left-[40%] md:top-[10.5%] md:left-[40%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[10.6%] left-[38.5%] md:top-[10.6%] md:left-[38.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[37%] md:top-[11%] md:left-[37%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11.5%] left-[35.5%] md:top-[11.5%] md:left-[35.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[12%] left-[34%] md:top-[12%] md:left-[34%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[12.5%] left-[32.5%] md:top-[12.5%] md:left-[32.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13%] left-[31%] md:top-[13%] md:left-[31%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[13.5%] left-[29.5%] md:top-[13.5%] md:left-[29.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[14%] left-[28%] md:top-[14%] md:left-[28%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[14.5%] left-[26.5%] md:top-[14.5%] md:left-[26.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[15%] left-[25%] md:top-[15%] md:left-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[15.5%] left-[23.5%] md:top-[15.5%] md:left-[23.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[16%] left-[22%] md:top-[16%] md:left-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[16.5%] left-[20.5%] md:top-[16.5%] md:left-[20.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[17%] left-[19%] md:top-[17%] md:left-[19%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[18.5%] left-[16%] md:top-[18.5%] md:left-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[20%] left-[13%] md:top-[20%] md:left-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[21.5%] left-[10%] md:top-[21.5%] md:left-[10%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
        </div>
      </section>
      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Explore</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Itineraries Card */}
            <Link href="/tours" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url('/images/home/itineraries-placeholder.jpg')" }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Itineraries
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expertly crafted tours through Kyrgyzstan and Central Asia.
                  </p>
                </div>
              </div>
            </Link>

            {/* Destinations Card */}
            <Link href="/destinations" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url('/images/home/destinations-placeholder.jpg')" }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Destinations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover the wonders of Kyrgyzstan&apos;s nine regions.
                  </p>
                </div>
              </div>
            </Link>

            {/* About Us Card */}
            <Link href="/about" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url('/images/home/about-placeholder.jpg')" }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    About Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Meet the team behind Tien Shan Journeys.
                  </p>
                </div>
              </div>
            </Link>

            {/* Contact Us Card */}
            <Link href="/contact" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url('/images/home/contact-placeholder.jpg')" }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Start planning your unforgettable journey today.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What Our Travelers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/home/reviews/reviewer-1-placeholder.jpg" 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">[Reviewer Name]</h4>
                  <p className="text-gray-500 text-sm">[Country]</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                [Placeholder for review text. The owner will provide actual testimonials from past travelers.]
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/home/reviews/reviewer-2-placeholder.jpg" 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">[Reviewer Name]</h4>
                  <p className="text-gray-500 text-sm">[Country]</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                [Placeholder for review text. The owner will provide actual testimonials from past travelers.]
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/home/reviews/reviewer-3-placeholder.jpg" 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">[Reviewer Name]</h4>
                  <p className="text-gray-500 text-sm">[Country]</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                [Placeholder for review text. The owner will provide actual testimonials from past travelers.]
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
      {/* Best Souvenirs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Best Souvenirs to Buy</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            [Placeholder: Owner will provide intro text about Kyrgyz crafts and souvenirs]
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '[Souvenir 1]', image: '/images/home/souvenirs/souvenir-1-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Souvenir 2]', image: '/images/home/souvenirs/souvenir-2-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Souvenir 3]', image: '/images/home/souvenirs/souvenir-3-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Souvenir 4]', image: '/images/home/souvenirs/souvenir-4-placeholder.jpg', description: '[Description placeholder]' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Top 10 Places Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Top 10 Places to See</h2>
          <p className="text-blue-100 text-center mb-10 max-w-2xl mx-auto">
            [Placeholder: Owner will provide intro text about must-visit places in Kyrgyzstan]
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { rank: 1, name: '[Place Name]', image: '/images/home/top10/place-1-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 2, name: '[Place Name]', image: '/images/home/top10/place-2-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 3, name: '[Place Name]', image: '/images/home/top10/place-3-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 4, name: '[Place Name]', image: '/images/home/top10/place-4-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 5, name: '[Place Name]', image: '/images/home/top10/place-5-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 6, name: '[Place Name]', image: '/images/home/top10/place-6-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 7, name: '[Place Name]', image: '/images/home/top10/place-7-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 8, name: '[Place Name]', image: '/images/home/top10/place-8-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 9, name: '[Place Name]', image: '/images/home/top10/place-9-placeholder.jpg', description: '[Description placeholder]' },
              { rank: 10, name: '[Place Name]', image: '/images/home/top10/place-10-placeholder.jpg', description: '[Description placeholder]' },
            ].map((place, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg overflow-hidden flex hover:bg-white/20 transition-colors">
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-blue-900 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {place.rank}
                    </span>
                    <h3 className="font-bold text-white">{place.name}</h3>
                  </div>
                  <p className="text-blue-100 text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Kyrgyz Foods Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Kyrgyz Foods</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            [Placeholder: Owner will provide intro text about traditional Kyrgyz cuisine]
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: '[Food Name 1]', image: '/images/home/foods/food-1-placeholder.jpg', description: '[Description placeholder - what it is, ingredients, when it is served]' },
              { name: '[Food Name 2]', image: '/images/home/foods/food-2-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Food Name 3]', image: '/images/home/foods/food-3-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Food Name 4]', image: '/images/home/foods/food-4-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Food Name 5]', image: '/images/home/foods/food-5-placeholder.jpg', description: '[Description placeholder]' },
              { name: '[Food Name 6]', image: '/images/home/foods/food-6-placeholder.jpg', description: '[Description placeholder]' },
            ].map((food, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{food.name}</h3>
                  <p className="text-gray-600 text-sm">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Best Time to Travel Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Best Time to Travel</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            [Placeholder: Owner will provide intro text about seasons and weather in Kyrgyzstan]
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                destination: 'Issyk-Kul Lake', 
                image: '/images/home/best-time/issyk-kul-placeholder.jpg', 
                bestTime: '[e.g., June - August]', 
                description: '[Placeholder: Why this is the best time, what to expect]' 
              },
              { 
                destination: 'Son-Kul Lake', 
                image: '/images/home/best-time/son-kul-placeholder.jpg', 
                bestTime: '[e.g., June - September]', 
                description: '[Placeholder]' 
              },
              { 
                destination: 'Arslanbob', 
                image: '/images/home/best-time/arslanbob-placeholder.jpg', 
                bestTime: '[e.g., September - October]', 
                description: '[Placeholder: Walnut harvest season, etc.]' 
              },
              { 
                destination: 'Bishkek', 
                image: '/images/home/best-time/bishkek-placeholder.jpg', 
                bestTime: '[e.g., April - October]', 
                description: '[Placeholder]' 
              },
              { 
                destination: '[Destination 5]', 
                image: '/images/home/best-time/destination-5-placeholder.jpg', 
                bestTime: '[Best months]', 
                description: '[Placeholder]' 
              },
              { 
                destination: '[Destination 6]', 
                image: '/images/home/best-time/destination-6-placeholder.jpg', 
                bestTime: '[Best months]', 
                description: '[Placeholder]' 
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                <img 
                  src={item.image} 
                  alt={item.destination} 
                  className="w-full md:w-48 h-48 object-cover"
                />
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{item.destination}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">Best time: {item.bestTime}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Recommended Kyrgyz Books Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Recommended Kyrgyz Books</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            [Placeholder: Owner will provide intro text about Kyrgyz literature and recommended reads]
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: '[Book Title 1]', author: '[Author]', image: '/images/home/books/book-1-placeholder.jpg' },
              { title: '[Book Title 2]', author: '[Author]', image: '/images/home/books/book-2-placeholder.jpg' },
              { title: '[Book Title 3]', author: '[Author]', image: '/images/home/books/book-3-placeholder.jpg' },
              { title: '[Book Title 4]', author: '[Author]', image: '/images/home/books/book-4-placeholder.jpg' },
              { title: '[Book Title 5]', author: '[Author]', image: '/images/home/books/book-5-placeholder.jpg' },
            ].map((book, idx) => (
              <div key={idx} className="text-center">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-3"
                />
                <h3 className="font-bold text-gray-800 text-sm mb-1">{book.title}</h3>
                <p className="text-gray-500 text-xs">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you plan the perfect journey through Kyrgyzstan and Central Asia
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}