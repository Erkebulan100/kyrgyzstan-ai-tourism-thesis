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
  className="relative pt-7 pb-7 overflow-hidden min-h-[630px] md:min-h-[730px] max-h-[630px] md:max-h-[730px] bg-gradient-to-br from-red-900 via-red-800 to-amber-900"
>
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
  {/* Kyrgyzstan Map Outline Background */}
  <div 
  className="absolute inset-0 opacity-19 bg-no-repeat bg-center pointer-events-none"
  style={{
    backgroundImage: "url('/images/kyrgyzstan-outline.svg')",
    backgroundSize: '99%',  // Adjustable: 100%, 120%, 150%, 200%, etc.
    filter: 'invert(1)'
  }}
/>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[700px]">

          
          {/* Central Logo & Text */}
          <div className="absolute top-[39%] left-1/2 md:top-[42%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
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
  { name: "Classic\nKyrgyzstan", href: "/tours/classic-kyrgyzstan", className: "left-[1%] top-[19%] md:left-[10%] md:top-[12%]" },
  { name: "Nomads of\nTien Shan", href: "/tours/nomads-tien-shan", className: "left-[36%] top-[15%] md:left-[33%] md:top-[3%]" },
  { name: "Treasures of\nTien Shan", href: "/tours/treasures-tien-shan", className: "right-[3%] top-[18%] md:right-[9%] md:top-[12%]" },
  { name: "Golden circle of\nKyrgyzstan", href: "/tours/golden-circle", className: "left-[12%] bottom-[34%] md:left-[22%] md:bottom-[10%]" },
  { name: "Where Tien Shan\nmeets Pamir", href: "/tours/tien-shan-meets-pamir", className: "right-[13%] bottom-[45%] md:right-[29%] md:bottom-[45%]" },
].map((tour, idx) => (
  <Link key={idx} href={tour.href} className={`absolute z-30 hover:scale-105 transition-transform ${tour.className}`}>
    <div className="bg-white/95 rounded-full w-20 h-20 md:w-36 md:h-36 flex items-center justify-center shadow-2xl border border-white/10 p-2 md:p-4 text-center">
      <h3 className="font-bold text-gray-800 text-[10px] md:text-sm whitespace-pre-line leading-tight">{tour.name}</h3>
    </div>
  </Link>
))}

          {/* Decorative Icons (Eagle, Horse, Camel, Yurt, Leopard) */}
          

          {/* Eagle SVG - Realistic Flying Eagle Silhouette */}
          <div className="absolute top-[9%] right-[19%] md:top-[1%] md:right-[35%] z-10">
            <img 
              src="/images/eagle.svg" 
              alt="Eagle" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Horse 1 - With a cap - Between Classic Kyrgyzstan and Golden Circle */}
          <div className="absolute top-[45%] left-[19%] md:top-[55%] md:left-[19%] z-10">
            <img 
              src="/images/horse.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Horse 2 - standart-  */}
          <div className="absolute top-[31%] left-[17%] md:top-[41%] md:left-[13%] z-10">
            <img 
              src="/images/horse1.svg" 
              alt="Horse" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Camel 1 - the big one - Bottom right area */}
          <div className="absolute bottom-[39%] right-[2%] md:bottom-[29%] md:right-[31%] z-10">
            <img 
              src="/images/camel.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 2 -the slim one- Next to Camel 1 */}
          <div className="absolute bottom-[33%] right-[51%] md:bottom-[15%] md:right-[55%] z-10">
            <img 
              src="/images/camel1.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Camel 3 with a rider- Third camel */}
          <div className="absolute bottom-[35%] right-[29%] md:bottom-[17%] md:right-[41%] z-10">
            <img 
              src="/images/camels.svg" 
              alt="Camel" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Snow Leopard - Right side of the page */}
          <div className="absolute top-[35%] right-[19%] z-10">
            <img 
              src="/images/snow-leopard.svg" 
              alt="Snow Leopard" 
              className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
          {/* Yurt 1 - yurt frame - like Kyrgyz yurt frame" */}
          <div className="absolute top-[13%] left-[11%] md:top-[5%] md:left-[21%] z-10">
            <img 
              src="/images/yurt.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 2 - filled icon */}
          <div className="absolute top-[9%] left-[27%] md:top-[1%] md:left-[28%] z-10">
            <img 
              src="/images/yurt1.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Yurt 3 - Mongolian yurt */}
          <div className="absolute top-[21%] left-[23%] md:top-[11%] md:left-[25%] z-10">
            <img 
              src="/images/yurt2.svg" 
              alt="Yurt" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>
        {/* Winding Map Dots - Curved paths connecting tour circles */}

          {/* Path from Classic Kyrgyzstan down to Golden Circle (left side) */}
  
          
          <div className="absolute top-[32%] left-[11%] md:top-[40%] md:left-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[35.5%] left-[12%] md:top-[46%] md:left-[19%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[39%] left-[13%] md:top-[50%] md:left-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[42.5%] left-[14%] md:top-[53%] md:left-[26%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[46%] left-[15%] md:top-[56%] md:left-[30%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[49.5%] left-[16%] md:top-[59%] md:left-[33%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[53%] left-[17%] md:top-[62%] md:left-[30%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Golden Circle curving right toward Where Tien Shan meets Pamir */}
         
          <div className="absolute bottom-[41%] left-[34%] md:bottom-[20%] md:left-[36%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[42%] left-[40%] md:bottom-[24.5%] md:left-[39%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[43%] left-[46%] md:bottom-[29%] md:left-[42%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[44%] left-[52%] md:bottom-[33%] md:left-[46%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[45%] left-[58%] md:bottom-[35%] md:left-[50%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[46%] left-[64%] md:bottom-[33%] md:left-[54%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block absolute bottom-[47%] left-[70%] md:bottom-[32%] md:left-[58%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block absolute bottom-[48%] left-[75%] md:bottom-[37%] md:left-[61%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="hidden md:block absolute bottom-[49%] left-[81%] md:bottom-[42%] md:left-[63%] w-1.5 h-1.5 rounded-full bg-white/30" />
          

          {/* Path from Where Tien Shan meets Pamir up to Treasures of Tien Shan */}
     
          <div className="absolute bottom-[57%] right-[17%] md:bottom-[49%] md:right-[29%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[60%] right-[16%] md:bottom-[52%] md:right-[26%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[63%] right-[15%] md:bottom-[55%] md:right-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[66%] right-[14%] md:bottom-[58%] md:right-[20%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[69%] right-[13%] md:bottom-[61%] md:right-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          

          {/* Path from Treasures curving left toward Nomads */}
      
          <div className="absolute top-[21%] right-[23%] md:top-[17%] md:right-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[20%] right-[27%] md:top-[15%] md:right-[28%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[19%] right-[32%] md:top-[14.3%] md:right-[33%] w-1.5 h-1.5 rounded-full bg-white/30" />

          <div className="hidden md:block absolute top-[26%] right-[26.5%] md:top-[14%] md:right-[38%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[18%] right-[37%] md:top-[15%] md:right-[43%] w-1.5 h-1.5 rounded-full bg-white/30" />

          <div className="hidden md:block absolute top-[21%] right-[39%] md:top-[15%] md:right-[48%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[17%] right-[42%] md:top-[14%] md:right-[53%] w-1.5 h-1.5 rounded-full bg-white/30" />

          {/* Path from Nomads curving left toward Classic Kyrgyzstan */}

          <div className="absolute top-[18%] left-[33%] md:top-[18%] md:left-[32%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[19%] left-[29%] md:top-[18%] md:left-[29%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[20%] left-[25%] md:top-[17%] md:left-[25.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          <div className="absolute top-[21%] left-[21%] md:top-[16%] md:left-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
        
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
            

      {/* Quick Links Section - Immersive Overlay Design */}
{/* Quick Links Section - Silk Road Explorer Design */}
<section className="relative py-24 px-4 overflow-hidden">
  {/* Rich gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />
  
  {/* Decorative pattern overlay */}
  <div className="absolute inset-0 opacity-[0.03]">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <pattern id="silk-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
        <path d="M15 5 L25 15 L15 25 L5 15 Z" fill="none" stroke="white" strokeWidth="0.5"/>
        <circle cx="15" cy="15" r="3" fill="white" fillOpacity="0.3"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#silk-pattern)"/>
    </svg>
  </div>
  
  {/* Ambient glow effects */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
  
  <div className="relative max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <span className="text-amber-400/80 text-sm uppercase tracking-[0.3em] font-medium">Navigate</span>
        <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
        Explore Kyrgyzstan
      </h2>
      <p className="text-slate-400 max-w-xl mx-auto text-lg">
        Your gateway to the heart of Central Asia
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* Itineraries */}
      <Link href="/tours" className="group relative h-[420px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/images/tours/classic-kyrgyzstan/slide-1.jpg')" }}
        />
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
        
        {/* Glassmorphism border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-amber-400/30 transition-colors duration-500" />
        
        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Icon badge */}
          <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-all duration-300">
              <span className="text-2xl">🗺️</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Itineraries
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            Expertly crafted tours through Kyrgyzstan and Central Asia.
          </p>
          
          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <span className="text-sm font-medium">Explore</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

      {/* Destinations */}
      <Link href="/destinations" className="group relative h-[420px] rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/images/destinations/jalal-abad/slide-1.jpg')" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-amber-400/30 transition-colors duration-500" />
        
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-all duration-300">
              <span className="text-2xl">🏔️</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Destinations
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            Discover the wonders of Kyrgyzstan&apos;s nine regions.
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <span className="text-sm font-medium">Discover</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

      {/* About Us */}
      <Link href="/about" className="group relative h-[420px] rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/images/logo/logo.png')" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
        
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-amber-400/30 transition-colors duration-500" />
        
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-all duration-300">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            About Us
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            Meet the team behind Tien Shan Journeys.
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <span className="text-sm font-medium">Learn More</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

      {/* Contact Us */}
      <Link href="/contact" className="group relative h-[420px] rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/images/logo/logo.png')" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-rose-900/20 mix-blend-multiply" />
        
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-amber-400/30 transition-colors duration-500" />
        
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-all duration-300">
              <span className="text-2xl">✉️</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Contact Us
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            Start planning your unforgettable journey today.
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <span className="text-sm font-medium">Get in Touch</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

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
  { rank: 2, name: 'Ala-Archa National Park', region: 'Near Bishkek', image: '/images/destinations/bishkek/slide-1.jpg', link: '/top-10-places/ala-archa' },
  { rank: 3, name: 'Song-Kul Lake', region: 'Naryn Region', image: '/images/destinations/naryn/slide-1.jpg', link: '/top-10-places/song-kul-lake' },
  { rank: 4, name: 'Kel-Suu Lake', region: 'At-Bashy Valley', image: '/images/destinations/at-bashy/slide-1.jpg', link: '/top-10-places/kel-suu-lake' },
  { rank: 5, name: 'Sary-Chelek Lake', region: 'Jalal-Abad Region', image: '/images/destinations/jalal-abad/slide-1.jpg', link: '/top-10-places/sary-chelek' },
  { rank: 6, name: 'Karakol and its surroundings', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/karakol-and-its-surroundings' },
  { rank: 7, name: 'Jeti-Oguz Rocks', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/jeti-oguz' },
  { rank: 8, name: 'Tash Rabat', region: 'Naryn Region', image: '/images/destinations/naryn/slide-1.jpg', link: '/top-10-places/tash-rabat' },
  { rank: 9, name: 'Arslanbob', region: 'Jalal-Abad Region', image: '/images/destinations/arslanbob/slide-1.jpg', link: '/top-10-places/arslanbob' },
  { rank: 10, name: 'Skazka Canyon', region: 'Issyk-Kul Region', image: '/images/destinations/issyk-kul-lake/slide-1.jpg', link: '/top-10-places/skazka-canyon' },
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
{/* Best Time to Travel Section - Cool Blue/Teal Theme */}
<section className="py-16 px-4 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 relative overflow-hidden">
  {/* Subtle weather decorations */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <div className="absolute top-10 left-[10%] text-6xl">☀️</div>
    <div className="absolute top-20 right-[20%] text-4xl">🌤️</div>
    <div className="absolute bottom-16 left-[25%] text-3xl">❄️</div>
    <div className="absolute bottom-10 right-[15%] text-4xl">🍂</div>
  </div>
  
  <div className="relative max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-cyan-600 uppercase tracking-[0.2em] text-sm font-medium mb-2 flex items-center justify-center gap-2">
        <span>🌡️</span>
        Plan Your Journey
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Best Time to Visit
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Peak season runs <span className="text-cyan-600 font-semibold">June – September</span> with warm days and open mountain passes
      </p>
    </div>
    
    {/* 4 Season Mini Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {[
        { season: 'Spring', months: 'Mar-May', icon: '🌸', temp: '8-20°C', highlight: 'Blooming valleys', gradient: 'from-emerald-400 to-teal-500', ring: 'ring-emerald-200' },
        { season: 'Summer', months: 'Jun-Aug', icon: '☀️', temp: '18-32°C', highlight: 'Peak season', gradient: 'from-amber-400 to-orange-500', ring: 'ring-amber-200', best: true },
        { season: 'Autumn', months: 'Sep-Nov', icon: '🍂', temp: '5-18°C', highlight: 'Golden colors', gradient: 'from-orange-400 to-red-500', ring: 'ring-orange-200' },
        { season: 'Winter', months: 'Dec-Feb', icon: '❄️', temp: '-10-5°C', highlight: 'Skiing & snow', gradient: 'from-blue-400 to-indigo-500', ring: 'ring-blue-200' },
      ].map((s, idx) => (
        <Link 
          key={idx} 
          href="/best-time"
          className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${s.best ? `ring-2 ${s.ring}` : ''}`}
        >
          {/* Best badge */}
          {s.best && (
            <div className="absolute top-2 right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
              BEST
            </div>
          )}
          
          {/* Gradient header */}
          <div className={`bg-gradient-to-r ${s.gradient} p-4 text-white text-center`}>
            <div className="text-3xl mb-1">{s.icon}</div>
            <h3 className="font-bold text-lg">{s.season}</h3>
            <p className="text-white/80 text-xs">{s.months}</p>
          </div>
          
          {/* Content */}
          <div className="p-4 text-center">
            <p className="text-gray-800 font-semibold text-sm mb-1">{s.temp}</p>
            <p className="text-gray-500 text-xs">{s.highlight}</p>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-gray-400 text-xs">→</span>
          </div>
        </Link>
      ))}
    </div>
    
    {/* Quick info strip */}
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-cyan-600 font-bold text-2xl mb-1">☀️ 300+</p>
          <p className="text-gray-600 text-sm">Sunny days per year</p>
        </div>
        <div>
          <p className="text-cyan-600 font-bold text-2xl mb-1">🏔️ Jun-Sep</p>
          <p className="text-gray-600 text-sm">All mountain passes open</p>
        </div>
        <div>
          <p className="text-cyan-600 font-bold text-2xl mb-1">🏖️ Jul-Aug</p>
          <p className="text-gray-600 text-sm">Warm enough for lake swimming</p>
        </div>
      </div>
    </div>
    
    {/* CTA */}
    <div className="text-center">
      <Link 
        href="/best-time"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg"
      >
        View Full Seasonal Guide
        <span className="text-lg">→</span>
      </Link>
    </div>
  </div>
</section>
      {/* Recommended Kyrgyz Books Section */}
      {/* Recommended Books Section - Library/Literary Theme */}
<section className="py-16 px-4 bg-gradient-to-br from-stone-100 to-emerald-50 relative overflow-hidden">
  {/* Subtle bookshelf lines */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 60px,
      #065f46 60px,
      #065f46 62px
    )`
  }} />
  
  <div className="relative max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-emerald-700 uppercase tracking-[0.2em] text-sm font-medium mb-2 flex items-center justify-center gap-2">
        <span>📚</span>
        Before You Go
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif">
        Recommended Reading
      </h2>
      <p className="text-stone-600 max-w-xl mx-auto">
        Immerse yourself in Kyrgyz literature — these books will enrich your journey
      </p>
    </div>
    
    {/* Book Spines Display - Horizontal Stack */}
    <div className="flex justify-center gap-4 md:gap-6 mb-10">
      {[
        { title: 'Jamilia', author: 'Chingiz Aitmatov', color: 'from-emerald-600 to-green-700', tag: 'Must Read' },
        { title: 'Epic of Manas', author: 'Traditional', color: 'from-amber-600 to-yellow-700', tag: 'National Epic' },
        { title: 'Farewell, Gulsary!', author: 'Chingiz Aitmatov', color: 'from-stone-600 to-stone-700', tag: 'Classic' },
      ].map((book, idx) => (
        <Link 
          key={idx} 
          href="/books"
          className="group relative"
        >
          {/* Book cover */}
          <div className={`relative w-28 md:w-36 h-44 md:h-56 bg-gradient-to-br ${book.color} rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-2xl overflow-hidden`}>
            {/* Spine effect */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
            <div className="absolute left-2 top-0 bottom-0 w-px bg-white/20" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
              {/* Tag */}
              <div className="self-end">
                <span className="bg-white/20 backdrop-blur-sm text-[10px] px-2 py-0.5 rounded-full">
                  {book.tag}
                </span>
              </div>
              
              {/* Title & Author */}
              <div>
                <h3 className="font-bold text-sm md:text-base leading-tight mb-1 font-serif">
                  {book.title}
                </h3>
                <p className="text-white/70 text-[10px] md:text-xs">
                  {book.author}
                </p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl">
                →
              </span>
            </div>
          </div>
          
          {/* Shadow under book */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/10 rounded-full blur-md group-hover:w-full group-hover:bg-black/20 transition-all" />
        </Link>
      ))}
    </div>
    
    {/* Author highlight strip */}
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">✍️</span>
        </div>
        <div>
          <p className="text-stone-800 font-semibold">Chingiz Aitmatov</p>
          <p className="text-stone-500 text-sm">
            Kyrgyzstan&apos;s most celebrated author — his works brought Central Asian stories to the world stage
          </p>
        </div>
        <Link 
          href="/books"
          className="md:ml-auto text-emerald-600 hover:text-emerald-700 font-medium text-sm whitespace-nowrap"
        >
          Read more →
        </Link>
      </div>
    </div>
    
    {/* CTA */}
    <div className="text-center">
      <Link 
        href="/books"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg"
      >
        View Full Reading List
        <span className="text-lg">→</span>
      </Link>
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