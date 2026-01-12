import { Mountain, Calendar, Users, Star, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';

export const metadata = {
  title: "Tours & Itineraries | Tienshan Journeys | Kyrgyzstan Travel Packages",
  description: "Explore our carefully designed tours in Kyrgyzstan and Central Asia. From classic itineraries to custom adventures, discover the perfect journey for you.",
};

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section with Slider */}
      <section className="relative w-full">
        <ImageSlider 
          slides={[
            { 
              image: '/images/tours/classic-kyrgyzstan/slide-1.jpg', 
              title: 'Classic Kyrgyzstan', 
              subtitle: 'The essential Kyrgyzstan experience', 
              link: '/tours/classic-kyrgyzstan' 
            },
            { 
              image: '/images/tours/golden-circle/slide-1.jpg', 
              title: 'Golden Circle of Kyrgyzstan', 
              subtitle: 'Must-see destinations in one journey', 
              link: '/tours/golden-circle' 
            },
            { 
              image: '/images/tours/nomads-tien-shan/slide-1.jpg', 
              title: 'Nomads of Tien Shan', 
              subtitle: 'Live with nomadic families', 
              link: '/tours/nomads-tien-shan' 
            },
            { 
              image: '/images/tours/treasures-tien-shan/slide-1.jpg', 
              title: 'Treasures of Tien Shan', 
              subtitle: 'Hidden gems and mountain landscapes', 
              link: '/tours/treasures-tien-shan' 
            },
            { 
              image: '/images/tours/tien-shan-meets-pamir/slide-1.jpg', 
              title: 'Where Tien Shan Meets Pamir', 
              subtitle: 'Journey between two legendary ranges', 
              link: '/tours/tien-shan-meets-pamir' 
            },
          ]}
          positions={[
            'center center',  // Classic Kyrgyzstan
            'center center',  // Golden Circle
            'center center',  // Nomads
            'center center',  // Treasures
            'center center',  // Tien Shan meets Pamir
          ]}
          defaultPosition="center center"
        />
      </section>

      {/* Introduction Section - TEXT FROM OLD WEBSITE */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-white space-y-4 text-lg leading-relaxed">
            <p>
              Tien Shan Journeys designs itineraries which would best satisfy your interests and passion. 
              Our suggested itineraries are created to provide you as many activities as possible so that 
              you would enjoy every single day you spend in Kyrgyzstan. Our itineraries are designed to get 
              our clients to the best and most interesting places in Kyrgyzstan. To make your journey 
              comfortable Tien Shan Journeys works with the best accommodation in Kyrgyzstan.
            </p>
            <p>
              For those interested in multi-country trips Tien Shan Journeys offers itineraries with which 
              you can explore the whole Central Asian region. We suggest you to combine trip to Kyrgyzstan 
              with a travel to Uzbekistan or Xinjiang, China. You can visit three countries Kyrgyzstan, 
              Uzbekistan, and China in once. Also you can combine your journey to Kyrgyzstan with a travel 
              to South Kazakhstan or Mongolia. If you are interested in visiting all countries mentioned 
              you can do it with Tien Shan Journeys.
            </p>
            <p>
              Each of our itineraries can be further adjusted to your preferences. Contact us today to 
              start planning your unforgettable journey to Kyrgyzstan and beyond!
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section 
        className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 min-h-[630px] md:min-h-[750px] max-h-[650px] md:max-h-[800px]"
        
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
      {/* Tours Grid */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-green-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Featured Tours
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1: Classic Kyrgyzstan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-l from-green-100 to-green-700 flex items-center justify-center">
                <Mountain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Classic Kyrgyzstan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span>7 nights / 8 days</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Small groups</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span>Most popular</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Experience the best of Kyrgyzstan - from Bishkek to Issyk-Kul Lake, 
                  Karakol, and the beautiful Chon-Kemin Valley.
                </p>

                <Link href="/tours/classic-kyrgyzstan" 
                      className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 2: Golden Circle */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <MapPin className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Golden Circle of Kyrgyzstan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                    <span>Multi-day tour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    <span>All group sizes</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Explore the must-see destinations forming Kyrgyzstan&apos;s golden circle 
                  of natural and cultural wonders.
                </p>

                <Link href="/tours/golden-circle" 
                      className="block w-full bg-orange-600 text-white text-center px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 3: Nomads of Tien Shan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-r from-blue-100 to-blue-700 flex items-center justify-center">
                <Users className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Nomads of Tien Shan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    <span>Cultural immersion</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    <span>Authentic experience</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Live with nomadic families, stay in traditional yurts, and experience 
                  centuries-old traditions in the mountains.
                </p>

                <Link href="/tours/nomads-tien-shan" 
                      className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 4: Treasures of Tien Shan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-purple-300 to-purple-600 flex items-center justify-center">
                <Star className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Treasures of Tien Shan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Extended tour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mountain className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Mountain highlights</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Discover hidden gems and spectacular mountain landscapes throughout 
                  the Tien Shan range.
                </p>

                <Link href="/tours/treasures-tien-shan" 
                      className="block w-full bg-purple-600 text-white text-center px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 5: Tien Shan meets Pamir */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-red-300 to-red-600 flex items-center justify-center">
                <Mountain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Where Tien Shan Meets Pamir</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span>Multi-country</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    <span>Border crossing</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Journey between two legendary mountain ranges, exploring both 
                  Kyrgyzstan and Tajikistan.
                </p>

                <Link href="/tours/tien-shan-meets-pamir" 
                      className="block w-full bg-red-600 text-white text-center px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Custom Tour Card */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="p-8 h-full flex flex-col justify-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Custom Tour</h3>
                <p className="text-gray-300 mb-6">
                  Cannot find the perfect tour? We will build a custom itinerary just for you.
                </p>
                <Link href="/contact" 
                      className="bg-white text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white mb-8">
            Let us help you plan the perfect journey through Central Asia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all">
              Contact Us
            </Link>
            <Link href="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}