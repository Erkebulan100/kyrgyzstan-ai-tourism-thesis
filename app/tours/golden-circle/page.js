'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Sun, MapPin, ChevronDown, ChevronUp, Star, Users, Mountain, Camera, Utensils, Music, Eye } from 'lucide-react';

export default function GoldenCirclePage() {
  const [expandedHotel, setExpandedHotel] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  const highlights = [
    { icon: Users, text: "Watch ancient traditional horse game Ulak Tartish (Buzkashi)" },
    { icon: Star, text: "Learn how felt carpets are made" },
    { icon: Mountain, text: "Learn about Kyrgyz History and Art in museums" },
    { icon: Utensils, text: "Visit chaotic Bazaar" },
    { icon: Camera, text: "Test your horseback riding skills in amazing landscapes" },
    { icon: Eye, text: "Enjoy spectacular panoramas of Suusamyr valley and Song-Kul lake" },
  ];

  const itinerary = [
    {
      day: 1,
      title: "Bishkek",
      route: "Arrival",
      description: "Today is your first day in Kyrgyzstan and it starts in its capital city Bishkek. When you arrive you will be met by our team in the airport. We will take you to your hotel and you will have time to get settled in. After a lunch, you'll have city tour in the central part of Bishkek. You will see Philharmonic House, Opera House, Old Square, Ala-Too Square, Victory Square, Circus Building, and City Hall. You'll have a chance to learn about Kyrgyz history at the Museum of National History and the National Museum of Fine Arts. Finally, you'll see what a Bazaar looks like when you'll go to Osh Bazaar. Enjoy your dinner in the best restaurants of Bishkek Supara or Arzu Style. Stay overnight in the hotel."
    },
    {
      day: 2,
      title: "Bishkek – Chunkurchak jailoo",
      route: "Mountain Valley",
      description: "Today, you leave a big city and go to the gorgeous Chunkurchak Valley which is just 28 miles from Bishkek. Chunkurchak has fir forests, alpine meadows, rapid rivers, and snow-capped mounts. Here you can ride horse for several hours until you reach glaciers. You can hike in the woods. In general, this is a good place for privacy. You can try yourself in archery. Watch Kyrgyz folklore show. Enjoy your lunch and dinner in Supara Chunkurchak restaurant and stay overnight in Beshik Bungalow Hotel."
    },
    {
      day: 3,
      title: "Chunkurchak — Suusamyr (Kyzyl-Oi village)",
      route: "Highland Pass",
      description: "Set off to Suusamyr Valley after the lunch in Chunkurchak. The way to Suusamyr goes through 60 km long Kara-Balta gorge and Töö-Ashuu Pass (3586 m above sea), you will pass through a 3 km long mount tunnel. It is a scenic road with spectacular panoramas of Suusamyr valley. You will have picture stops near livestock flocks. Here you see Kyrgyz nomads for the first time. Enjoy your dinner and stay overnight in a traditional village house."
    },
    {
      day: 4,
      title: "Kyzyl-Oi village – Song-Kul lake (246 km)",
      route: "Alpine Lake",
      description: "On this day you will set off from Kyzyl-Oi village to Song-Kul lake (3013m) - one of the most unique and picturesque places in Kyrgyzstan. Pastures around the Song-Kul are favored by numerous nomads whose yurt camps you can see everywhere. You will arrive to the lake around midday. You will have lunch in a yurt. Song-Kul Lake is a nice place for horseback riding and hiking. You can watch and probably try cow and mare milking. Also watch and try cream and kumis making. Don't forget to taste kumis at least once! You'll have dinner and stay overnight in a yurt."
    },
    {
      day: 5,
      title: "Song-Kul lake day",
      route: "Nomadic Experience",
      description: "On this day you go to waterfall by horseback riding. On the way you can enjoy watching a summer pasture with numerous herds of horses, yaks, buffalos, and sheep. Bird watching is also a good option as many migratory birds are attracted by the lake. Besides, you can get to know close local flora with many highland plants. After a lunch you will watch the famous horseback game called Ulak Tartish (buzkashi) match, which is a wild, traditional sport of nomads played on a horseback throughout Central Asia. You can watch horse race, horseback wrestling and other games too."
    },
    {
      day: 6,
      title: "Song-Kul Lake – Chon-Kemin (Kalmak-Ashuu Village)",
      route: "Valley Journey",
      description: "Early in the morning set off to Chon-Kemin Valley. On the way you will have a felt carpet making class in Kochkor village. Afterwards, continue to Chon-Kemin. The way goes through massive Boom gorge and Orto-Tokoi Dam. You will have dinner and stay overnight in Ashu Hotel."
    },
    {
      day: 7,
      title: "Chon-Kemin — Bishkek",
      route: "Return & History",
      description: "After breakfast, you will have several hours of horseback riding (or hiking) in the Chon-Kemin National Park. After a lunch you will set off to Bishkek. On the way you will visit Burana which is the remains of a city destroyed by Genghis Khan. In the evening you will have a farewell dinner and stay overnight in the hotel."
    },
    {
      day: 8,
      title: "Bishkek – Airport Manas",
      route: "Departure",
      description: "This is your final day in Kyrgyzstan. After an amazing week of adventures your journey has come to an end. You will be transferred to the Manas International Airport where you will catch your flight home or fly to another exciting destination."
    }
  ];

  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency Bishkek",
      location: "Bishkek",
      image: "/images/hotels/hyatt-bishkek.jpg",
      description: "Hyatt Regency Bishkek is for sure the best hotel in Kyrgyzstan. As the hotel is situated right in the center of Bishkek the Opera House, Museum of Fine Arts, Victory Square, State Circus and other sights of Bishkek are nearby. This five-star hotel offers you its 178 rooms and suites with the newest conveniences. The hotel provides its service 24/7. The Hyatt Regency Bishkek has really a big choice of food from European to Fusion cuisines. The hotel has a bar and Opera Lounge where you can relax during your stay. The hotel's health club offers you an outdoor swimming pool and nicely equipped gym. Besides, there is a spa with treatment rooms."
    },
    {
      id: 2,
      name: "Asia Mountains",
      location: "Bishkek",
      image: "/images/hotels/asia-mountains.jpg",
      description: "Always clean and neat, Asia Mountains have everything you would enjoy during your stay in Bishkek. Asia Mountains offers you its big, bright, and comfortable rooms equipped with all modern conveniences from a satellite TV to Wi-Fi. Each room has a private bathroom. Asia Mountains is not a big hotel; it makes the hotel very quiet. You can enjoy spending evenings in the beautiful garden of the hotel. Enjoy European and Kyrgyz cuisines from the chefs of Asia Mountains."
    },
    {
      id: 3,
      name: "Beshik Hotel Bungalow",
      location: "Chunkurchak",
      image: "/images/hotels/beshik-bungalow.jpg",
      description: "Beshik Hotel Bungalow is located Chunkurchak Valley which is just 28 miles to the south of Bishkek. The hotel as its name suggests consists of bungalows. Each bungalow has a comfortable bedroom, a private bathroom, satellite TV, and Wi-Fi. Beshik Hotel has a cute Supara Chunkurchak restaurant which provides the best traditional Kyrgyz food made from the freshest ingredients."
    },
    {
      id: 4,
      name: "Ashu Hotel",
      location: "Chon-Kemin",
      image: "/images/hotels/ashu-hotel.jpg",
      description: "Chon-Kemin Valley has a nice ranch style Ashu Hotel. The hotel has all modern amenities. Every room has a private bathroom, Wi-Fi, and other mod cons. You can enjoy excellent views of mounts just from your window. The hotel has a nice garden where you can enjoy cool evenings of Chon-Kemin Valley. The hotel's restaurant offers the best of European and Kyrgyz food. The hotel has a fine shop where you can buy souvenirs produced locally."
    }
  ];

  // Journey points for the constellation map - SAME positions as Classic Kyrgyzstan (8 days)
  const journeyPoints = [
    { day: 1, name: "Bishkek", position: "left-[1%] top-[20%] md:left-[5%] md:top-[17%]" },
    { day: 2, name: "Chunkurchak", position: "left-[25%] top-[5%] md:left-[23%] md:top-[1%]" },
    { day: 3, name: "Kyzyl-Oi", position: "left-[65%] top-[5%] md:left-[50%] md:top-[0%]" },
    { day: 4, name: "Song-Kul", position: "right-[1%] top-[31%] md:right-[13%] md:top-[15%]" },
    { day: 5, name: "Lake Day", position: "right-[1%] top-[60%] md:right-[13%] md:top-[57%]" },
    { day: 6, name: "Chon-Kemin", position: "right-[25%] bottom-[5%] md:right-[35%] md:bottom-[0%]" },
    { day: 7, name: "Burana", position: "left-[15%] bottom-[5%] md:left-[29%] md:bottom-[1%]" },
    { day: 8, name: "Departure", position: "left-[1%] bottom-[33%] md:left-[5%] md:bottom-[25%]" },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/images/tours/golden-circle-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 77%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/40 to-orange-900/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-yellow-200 text-lg mb-4 tracking-widest uppercase">7 Nights / 8 Days</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Golden Circle of Kyrgyzstan</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-2xl mx-auto">
            The complete loop through nomadic highlands and alpine lakes
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-bold text-gray-800">7 nights / 8 days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="bg-orange-100 p-3 rounded-full">
                <Sun className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Season</p>
                <p className="font-bold text-gray-800">June to September</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Route</p>
                <p className="font-bold text-gray-800">Bishkek → Song-Kul → Bishkek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Tour Highlights</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Itinerary on the Map</h2>
          
          <div className="w-full rounded-xl overflow-hidden shadow-lg relative" style={{ height: '450px' }}>
            {/* Click overlay */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center hover:bg-black/10 transition-colors group"
              onClick={(e) => e.currentTarget.style.display = 'none'}
            >
              <span className="bg-black/70 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Click to interact with map
              </span>
            </div>
            {/* Map with hidden header - UPDATE THIS EMBED URL WITH YOUR GOOGLE MY MAPS LINK */}
            <div style={{ marginTop: '-67px', height: 'calc(100% + 67px)' }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1_vlZPBjQgSPwiE-AOnYDQ--9e96CAHc&hl=en&ehbc=2E312F"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Trip Overview Below Map */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Duration:</span>
                <span className="text-gray-600 ml-2">7 nights / 8 days</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Season:</span>
                <span className="text-gray-600 ml-2">From June to September</span>
              </div>
              <div className="md:col-span-3">
                <span className="font-semibold text-gray-700">Trip overview:</span>
                <span className="text-gray-600 ml-2">Bishkek – Chunkurchak jailoo – Kyzyl-Oi – Song-Kul lake – Kochkor – Chong-Kemin (Kalmak-Ashuu) – Bishkek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map - Constellation Style */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-yellow-900 to-orange-900 min-h-[700px]">
        <div className="relative w-full max-w-[1400px] mx-auto h-[550px]">
          
          {/* Central Text */}
          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <img 
              src="/images/mountain.svg" 
              alt="Mountain" 
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 object-contain opacity-80"
              style={{ filter: 'invert(1) brightness(1)' }}
            />
            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
              Eight days.<br />
              One golden loop.<br />
              Endless horizons.
            </h2>
          </div>

          {/* Journey Point Circles */}
          {journeyPoints.map((point, idx) => (
            <button
              key={idx}
              onClick={() => {
                setExpandedDay(point.day);
                setTimeout(() => {
                  document.getElementById(`day-${point.day}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
              className={`absolute z-30 hover:scale-110 transition-all duration-300 ${point.position}`}
            >
              <div className={`bg-white/95 rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-2xl border-2 ${expandedDay === point.day ? 'border-yellow-400 scale-110' : 'border-white/20'} p-2 text-center`}>
                <span className="text-yellow-600 font-bold text-xs md:text-sm">Day {point.day}</span>
                <h3 className="font-bold text-gray-800 text-[10px] md:text-xs mt-1">{point.name}</h3>
              </div>
            </button>
          ))}

          {/* Decorative Icons */}
          <div className="absolute top-[15%] right-[40%] md:top-[15%] md:right-[55%] z-10">
            <img src="/images/eagle.svg" alt="Eagle" className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-60" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>
          
          <div className="absolute top-[45%] left-[17%] md:top-[50%] md:left-[27%] z-10">
            <img src="/images/horse.svg" alt="Horse" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-60" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>
          
          <div className="absolute bottom-[25%] right-[30%] md:bottom-[55%] md:right-[35%] z-10">
            <img src="/images/yurt.svg" alt="Yurt" className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-60" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>

          <div className="absolute bottom-[23%] right-[65%] md:bottom-[40%] md:right-[25%] z-10">
            <img src="/images/camel.svg" alt="Camel" className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-60" style={{ filter: 'invert(1) brightness(0.8)' }} />
          </div>

          <div className="absolute top-[39%] right-[23%] md:top-[67%] md:right-[48%] z-10">
            <img 
              src="/images/snow-leopard.svg" 
              alt="Snow Leopard" 
              className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Connecting Dots Path - SAME as Classic Kyrgyzstan */}
          {/* Path from Day 1 to Day 2 */}
          <div className="absolute top-[18%] left-[15%] md:top-[18%] md:left[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[16%] left-[18%] md:top-[16%] md:left[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[14%] left-[21%] md:top-[14%] md:left[21%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 2 to Day 3 */}
          <div className="absolute top-[11%] left-[49%] md:top-[11%] md:left-[35%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[54%] md:top-[11%] md:left-[41.5%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[59%] md:top-[11%] md:left-[48%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 3 to Day 4 */}
          <div className="absolute top-[18%] right-[15%] md:top-[15%] md:right-[37%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[23%] right-[13%] md:top-[18%] md:right-[31%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[28%] right-[11%] md:top-[21%] md:right-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 4 to Day 5 */}
          <div className="absolute top-[47%] right-[11%] md:top-[42%] md:right-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[52%] right-[11%] md:top-[48%] md:right-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[57%] right-[11%] md:top-[54%] md:right-[17%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 5 to Day 6 */}
          <div className="absolute top-[76%] right-[12%] md:top-[79%] md:right-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[80%] right-[17%] md:top-[84%] md:right-[28%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[84%] right-[22%] md:top-[89%] md:right-[33%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 6 to Day 7 */}
          <div className="absolute bottom-[11%] right-[49%] md:bottom-[10%] md:right-[47%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[11%] right-[54%] md:bottom-[10%] md:right-[52%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[11%] left-[39%] md:bottom-[10%] md:left-[42%] w-1.5 h-1.5 rounded-full bg-white/30" />
          
          {/* Path from Day 7 to Day 8 */}
          <div className="absolute bottom-[20%] left-[17%] md:bottom-[18%] md:left-[25%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[25%] left-[14%] md:bottom-[22%] md:left-[20%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[30%] left-[11%] md:bottom-[26%] md:left-[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
        
        <p className="text-center text-white/60 text-sm mt-4">Click on a day to see details below</p>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Day-by-Day Itinerary</h2>
          
          <div className="space-y-6">
            {itinerary.map((day) => (
              <div 
                key={day.day}
                id={`day-${day.day}`}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${expandedDay === day.day ? 'ring-2 ring-yellow-500' : ''}`}
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full p-6 flex items-center gap-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">{day.day}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm text-yellow-600 font-semibold mb-1">{day.route}</p>
                    <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                  </div>
                  
                  {expandedDay === day.day ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedDay === day.day && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{day.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Hotels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Suggested Hotels</h2>
          
          <div className="space-y-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedHotel(expandedHotel === hotel.id ? null : hotel.id)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="text-sm text-yellow-600 font-medium">{hotel.location}</p>
                    <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
                  </div>
                  {expandedHotel === hotel.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedHotel === hotel.id && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="mt-4">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full md:float-left md:w-64 h-auto rounded-lg mb-4 md:mr-5 md:mb-3"
                      />
                      <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Golden Circle?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let us plan your perfect 8-day adventure through highland lakes and nomadic pastures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Book This Tour
            </Link>
            <Link href="/tours" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}