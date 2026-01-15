import AnimatedHero from '@/components/AnimatedHero';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import PolaroidCarousel from '@/components/PolaroidCarousel';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
     <AnimatedHero />
      {/* <div className="absolute top-5 left-35 md:top-13 md:left-61 z-10">
    <img 
      src="/images/logo/logo_without_slogan.png" 
      alt="Tien Shan Journeys" 
      className="w-32 md:w-42 h-auto"
      style={{ filter: 'brightness(3)' }}
    />
  </div> */}

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
      {/* Hero Section with Slider from destinations */}
      <section className="relative w-full">
        <ImageSlider 
          slides={[
            { 
              image: '/images/destinations/bishkek/slide-1.jpg', 
              title: 'Bishkek', 
              subtitle: 'The Capital City of Kyrgyzstan', 
              link: '/destinations/bishkek' 
            },
            { 
              image: '/images/destinations/issyk-kul-lake/slide-1.jpg', 
              title: 'Issyk-Kul Lake', 
              subtitle: 'The Pearl of Tien Shan', 
              link: '/destinations/issyk-kul-lake' 
            },
            { 
              image: '/images/destinations/chong-kemin/slide-1.jpg', 
              title: 'Chong-Kemin', 
              subtitle: 'The Green Valley of Kyrgyzstan', 
              link: '/destinations/chong-kemin' 
            },
            { 
              image: '/images/destinations/suusamyr/slide-1.jpg', 
              title: 'Suusamyr', 
              subtitle: 'The High Pastures of Northwestern Tien Shan', 
              link: '/destinations/suusamyr' 
            },
            { 
              image: '/images/destinations/naryn/slide-1.jpg', 
              title: 'Naryn', 
              subtitle: 'The Mountain Heart of Kyrgyzstan', 
              link: '/destinations/naryn' 
            },
            { 
              image: '/images/destinations/at-bashy/slide-1.jpg', 
              title: 'At-Bashy Valley', 
              subtitle: 'The Wild Valley Near the Chinese Border', 
              link: '/destinations/at-bashy' 
            },
            { 
              image: '/images/destinations/jalal-abad/slide-1.jpg', 
              title: 'Jalal-Abad', 
              subtitle: 'The Most Beautiful Province of Kyrgyzstan', 
              link: '/destinations/jalal-abad' 
            },
            { 
              image: '/images/destinations/arslanbob/slide-1.jpg', 
              title: 'Arslanbob', 
              subtitle: "The World's Largest Walnut Forest", 
              link: '/destinations/arslanbob' 
            },
            { 
              image: '/images/destinations/osh-fergana-valley/slide-1.jpg', 
              title: 'Osh & Fergana Valley', 
              subtitle: 'The Ancient Silk Road City', 
              link: '/destinations/osh-fergana-valley' 
            },
          ]}
          positions={[
            'center 40%',  // Bishkek
            'center center',  // Issyk-Kul
            'center center',  // Chong-Kemin
            'center center',  // Suusamyr
            'center center',  // Naryn
            'center center',  // At-Bashy
            'center center',  // Jalal-Abad
            'center center',  // Arslanbob
            'center center',  // Osh
          ]}
          defaultPosition="center center"
        />
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
      {/* Souvenirs Section - Artisan Craft Style */}
<section className="py-16 px-4 bg-gradient-to-br from-red-900 via-red-800 to-amber-900 relative overflow-hidden">
  {/* Kyrgyz pattern overlay */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <pattern id="kyrgyz-pattern-home" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
        <circle cx="10" cy="10" r="3" fill="none" stroke="white" strokeWidth="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#kyrgyz-pattern-home)"/>
    </svg>
  </div>
  
  {/* Stitched border effect */}
  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-white/10 rounded-xl pointer-events-none" />
  
  <div className="relative max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-3 flex items-center justify-center gap-3">
        <span className="w-8 h-px bg-amber-300/50"></span>
        Handcrafted Treasures
        <span className="w-8 h-px bg-amber-300/50"></span>
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Souvenirs to Bring Home
      </h2>
      <p className="text-red-200 max-w-xl mx-auto">
        Each piece tells a story of nomadic heritage and generations of craftsmanship
      </p>
    </div>
    
    {/* 3 Craft Tag Cards */}
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
      {[
        { name: 'Shyrdak', subtitle: 'Felt Carpet', icon: '🧶', desc: 'Handmade felt rugs with bold geometric patterns' },
        { name: 'Ak-Kalpak', subtitle: 'White Felt Hat', icon: '🎩', desc: 'The iconic Kyrgyz hat — symbol of national identity' },
        { name: 'Silver Jewelry', subtitle: 'Traditional Ornaments', icon: '💎', desc: 'Ancient motifs crafted in silver and stone' },
      ].map((item, idx) => (
        <Link 
          key={idx} 
          href="/souvenirs"
          className="group relative"
        >
          {/* Stitched border */}
          <div className="absolute -inset-1 border-2 border-dashed border-amber-300/20 rounded-xl group-hover:border-amber-300/40 transition-colors" />
          
          {/* Card */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-amber-300 text-xs uppercase tracking-widest mb-1">{item.subtitle}</p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                {item.name}
              </h3>
              <p className="text-red-200 text-sm">
                {item.desc}
              </p>
            </div>
            
            {/* Hover tag */}
            <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              View →
            </div>
          </div>
        </Link>
      ))}
    </div>
    
    {/* CTA */}
    <div className="text-center">
      <Link 
        href="/souvenirs"
        className="inline-flex items-center gap-2 bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors shadow-lg"
      >
        Explore All Souvenirs
        <span className="text-lg">→</span>
      </Link>
    </div>
  </div>
</section>
      {/* Top 10 Places Section */}
<PolaroidCarousel
  title="Top 10 Places to See"
  subtitle="Discover the most breathtaking destinations in Kyrgyzstan"
  seeAllLink="/top-10-places"
  seeAllText="See All 10 Places"
  places={[
  { rank: 1, name: 'Issyk-Kul Lake', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/issyk-kul-lake' },
  { rank: 2, name: 'Song-Kul Lake', region: 'Naryn Region', image: '/images/destinations/naryn/slide-1.jpg', link: '/top-10-places/song-kul-lake' },
  { rank: 3, name: 'Ala Archa National Park', region: 'Near Bishkek', image: '/images/destinations/bishkek/slide-1.jpg', link: '/top-10-places/ala-archa' },
  { rank: 4, name: 'Tash Rabat', region: 'Naryn Region', image: '/images/destinations/naryn/slide-1.jpg', link: '/top-10-places/tash-rabat' },
  { rank: 5, name: 'Burana Tower', region: 'Chuy Region', image: '/images/destinations/chong-kemin/slide-1.jpg', link: '/top-10-places/burana-tower' },
  { rank: 6, name: 'Arslanbob Waterfalls', region: 'Jalal-Abad Region', image: '/images/destinations/arslanbob/slide-1.jpg', link: '/top-10-places/arslanbob-waterfalls' },
  { rank: 7, name: 'Skazka Canyon', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/skazka-canyon' },
  { rank: 8, name: 'Jeti-Oguz Rocks', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/jeti-oguz' },
  { rank: 9, name: 'Sulaiman-Too Mountain', region: 'Osh City', image: '/images/destinations/osh-fergana-valley/slide-1.jpg', link: '/top-10-places/sulaiman-too' },
  { rank: 10, name: 'Kel-Suu Lake', region: 'At-Bashy Valley', image: '/images/destinations/at-bashy/slide-1.jpg', link: '/top-10-places/kel-suu-lake' },
]}
/>
      {/* Kyrgyz Foods Section - Horizontal Scroll Preview */}
<section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
  <div className="max-w-6xl mx-auto">
    {/* Header with link */}
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-amber-600 uppercase tracking-widest text-sm font-medium mb-2">
          Taste of the Silk Road
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
          Kyrgyz Cuisine
        </h2>
      </div>
      <Link 
        href="/kyrgyz-foods"
        className="hidden md:inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
      >
        Explore All Dishes
        <span className="text-xl">→</span>
      </Link>
    </div>
    
    {/* Horizontal Cards - 4 Preview Items */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
      {[
        { name: 'Beshbarmak', subtitle: 'National Dish', desc: 'Boiled meat over flat noodles, eaten by hand' },
        { name: 'Plov', subtitle: 'Celebration Rice', desc: 'Layered rice with meat, cooked in a kazan' },
        { name: 'Lagman', subtitle: 'Hand-Pulled Noodles', desc: 'Thick noodles in savory broth' },
        { name: 'Kumys', subtitle: 'Nomad Drink', desc: 'Fermented mare\'s milk, 5000 years old' },
      ].map((food, idx) => (
        <Link 
          key={idx} 
          href="/kyrgyz-foods"
          className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image placeholder */}
          <div className="h-32 md:h-40 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
            {/* Replace with actual image:
            <img src={`/images/foods/${food.name.toLowerCase()}.jpg`} alt={food.name} className="w-full h-full object-cover" />
            */}
          </div>
          
          {/* Content */}
          <div className="p-4">
            <p className="text-amber-600 text-xs uppercase tracking-wide mb-1">{food.subtitle}</p>
            <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-amber-700 transition-colors">
              {food.name}
            </h3>
            <p className="text-stone-500 text-sm line-clamp-2">{food.desc}</p>
          </div>
          
          {/* Hover arrow */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-amber-600">→</span>
          </div>
        </Link>
      ))}
    </div>
    
    {/* Mobile "See All" button */}
    <div className="md:hidden text-center">
      <Link 
        href="/kyrgyz-foods"
        className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
      >
        Explore All 7 Dishes
        <span>→</span>
      </Link>
    </div>
    
    {/* Desktop subtle CTA */}
    <div className="hidden md:block text-center">
      <p className="text-stone-500">
        Discover all 7 traditional dishes including Manti, Samsa, and Kuurdak
        <Link href="/kyrgyz-foods" className="text-amber-600 hover:text-amber-700 font-medium ml-2">
          View full guide →
        </Link>
      </p>
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