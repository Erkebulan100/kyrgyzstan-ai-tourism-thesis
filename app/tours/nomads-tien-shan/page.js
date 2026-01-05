'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Sun, MapPin, ChevronDown, ChevronUp, Star, Users, Mountain, Camera, Utensils, Tent, Horse } from 'lucide-react';

export default function NomadsTienShanPage() {
  const [expandedHotel, setExpandedHotel] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  const highlights = [
    { icon: Users, text: "Learn the nomadic life of Kyrgyz people" },
    { icon: Mountain, text: "Visit Tash-Rabat and Koshoi-Korgon Silk Road monuments" },
    { icon: Camera, text: "Discover local flora and fauna" },
    { icon: Utensils, text: "Learn how to make cream or kumis" },
    { icon: Star, text: "Try your horseback riding skills" },
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
      title: "Bishkek – Kochkor – Isakeev – Köl-Ükök Lake",
      route: "To the Highlands",
      description: "On the second day of your trip you will set off to Kochkor after your breakfast in the hotel. On the way, you will visit Burana: the remains of the city destroyed by Genghis Khan. After you arrive in Kochkor you will transfer to Isakeev Village and set off on a horseback to highland Tez-Tör summer pasture (jailoo) with its famous Köl-Ükök lake. There you will have a picnic. You can relax there. Discover highland flora and fauna. Enjoy your dinner and stay overnight in a yurt."
    },
    {
      day: 3,
      title: "Köl-Ükök Lake (Tez-Tör jailoo)",
      route: "Highland Exploration",
      description: "You have the whole day to explore the amazing highland pasture and nomadic life. You can hike to Köl-Tör Lake, where you can fish with nomads and ride a horse. Enjoy your dinner and stay overnight in a yurt."
    },
    {
      day: 4,
      title: "Köl-Ükök Lake – Kochkor – Naryn",
      route: "Mountain Passes",
      description: "In the morning you ride horse back to Isakeev Village. On the way you will have a picnic. After that you will drive to Kochkor. In Kochkor you will have a felt carpet making class. After lunch set off to Naryn town. You will drive on a highland highway with Dolon Pass which is 3,035 meters high. Enjoy your dinner and stay overnight in a homestay."
    },
    {
      day: 5,
      title: "Naryn – Ak-Muz – Kamandy jailoo",
      route: "Nomadic Life",
      description: "In the morning you will proceed to At-Bashy Valley and Kamandy highland pasture (jailoo) via Ak-Muz Village. You will have a short hike and lunch with the nomads in a scenic landscape. Here you can learn a lot about nomadic life. You will have dinner and stay overnight in a yurt."
    },
    {
      day: 6,
      title: "Kamandy – Acha-Kayindy – Tash-Rabat",
      route: "Silk Road Discovery",
      description: "Your journey goes on and today you will visit Tash-Rabat caravanserai. On the way, you will stop in Acha-Kayindy village for a lunch in a local house and stop in At-Bashy village where you can see a giant stock market, however, the market works only on Sundays. Tash-Rabat (the rock house) is the most important silk-road monument in Kyrgyzstan. Most probably, it was either a Nestorian monastery or Buddhist temple. Dated back to 11th century and restored in the 1980s, this historical building is described as one of the best preserved monuments of the Silk Road with an especially well preserved atmosphere. Enjoy your dinner and stay overnight in a yurt. You can try local sauna."
    },
    {
      day: 7,
      title: "Tash-Rabat – Koshoi-Korgon – Naryn",
      route: "Ancient Ruins",
      description: "In the morning you have free time. You can either hike or ride a horse in the area. In the afternoon you will set off to Naryn town back. On the way, you will visit remains of ancient Koshoi-Korgon castle. There is an on-site museum for tourists nearby. You will get your dinner and stay overnight in a homestay in Naryn."
    },
    {
      day: 8,
      title: "Naryn – Bishkek",
      route: "Return Journey",
      description: "Today you will depart to Bishkek. In Bishkek you will have free time to make some shopping. Afterwards, you will have farewell dinner in a restaurant and stay overnight in the hotel."
    },
    {
      day: 9,
      title: "Bishkek – Airport Manas",
      route: "Departure",
      description: "After an exciting week in Kyrgyzstan your journey has come to an end. Enjoy your breakfast in the hotel and after you will be transferred to Airport Manas where you will catch your flight home or continue on to your next exciting destination."
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
      name: "Celestial Mountains Guesthouse",
      location: "Naryn",
      image: "/images/hotels/celestial-mountains.jpg",
      description: "Celestial Mountains Guesthouse is a nice option for stay in the town of Naryn. The exterior design of the hotel does not say it is a hotel; however, the interior decorations are beautiful and very comfortable. The hotel has everything you need during your stay. Rooms in the hotel have all modern conveniences. During summers you can choose an option to stay in a yurt. The restaurant of the guesthouse serves tasty breakfasts, lunches, and dinners which consist of the best of the local food. Those interested in the local culture can enjoy folklore and handicraft shows which can be arranged in the guesthouse."
    },
    {
      id: 4,
      name: "Khan Tengri",
      location: "Naryn",
      image: "/images/hotels/khan-tengri.jpg",
      description: "Khan Tengri is a pleasant small hotel in the town of Naryn. All rooms in the hotel have mod cons; each room has a private bathroom. On the second floor you can enjoy sitting on a sunny terrace with outstanding views of surrounding mountains. The hotel's restaurant serves up very tasty meals both from Kyrgyz and European cuisine. Specially for you we can organize a folklore show in the hotel."
    }
  ];

  // Journey points for the constellation map
  const journeyPoints = [
    { day: 1, name: "Bishkek", position: "left-[1%] top-[15%] md:left-[5%] md:top-[12%]" },
    { day: 2, name: "Köl-Ükök", position: "left-[25%] top-[1%] md:left-[23%] md:top-[1%]" },
    { day: 3, name: "Tez-Tör", position: "left-[55%] top-[1%] md:left-[42%] md:top-[0%]" },
    { day: 4, name: "Naryn", position: "right-[5%] top-[15%] md:right-[28%] md:top-[1%]" },
    { day: 5, name: "Kamandy", position: "right-[1%] top-[38%] md:right-[5%] md:top-[15%]" },
    { day: 6, name: "Tash-Rabat", position: "right-[5%] bottom-[25%] md:right-[5%] md:bottom-[28%]" },
    { day: 7, name: "Koshoi-Korgon", position: "right-[25%] bottom-[5%] md:right-[30%] md:bottom-[3%]" },
    { day: 8, name: "Return", position: "left-[25%] bottom-[5%] md:left-[25%] md:bottom-[3%]" },
    { day: 9, name: "Departure", position: "left-[1%] bottom-[30%] md:left-[5%] md:bottom-[28%]" },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          // linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
          backgroundImage: " url('/images/tours/nomads-tien-shan-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 63%'
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-blue-900/40"></div> */}

        {/* Option 1: Neutral dark overlay (recommended) */}
        {/* <div className="absolute inset-0 bg-black/20"></div> //makes pic darker*/}

        {/* Option 2: Slightly stronger gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div> */}

        {/* Option 3: Keep green theme but reduce intensity */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

        {/* Option 4: Remove entirely
        Just delete the whole line if your hero image is dark enough for white text to be readable. */}
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-green-200 text-lg mb-4 tracking-widest uppercase">8 Nights / 9 Days</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Nomads of Tien Shan</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
            Experience authentic nomadic life in the heart of Central Asia
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
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-bold text-gray-800">8 nights / 9 days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Season</p>
                <p className="font-bold text-gray-800">May to October</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Route</p>
                <p className="font-bold text-gray-800">Bishkek → Naryn → Tash-Rabat → Bishkek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Tour Highlights</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 p-2 rounded-lg">
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
            {/* Overlay to prevent scroll zoom until clicked */}
            {/* Click overlay */}
            <div 
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center hover:bg-black/10 transition-colors group"
                onClick={(e) => e.currentTarget.style.display = 'none'}
                >
                <span className="bg-black/70 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to interact with map
                </span>
            </div>
            {/* Map with hidden header */}
            <div style={{ marginTop: '-67px', height: 'calc(100% + 67px)' }}>
                <iframe
                src="https://www.google.com/maps/d/embed?mid=1cCQHzlHCOrmOUMLcvQhuQ4UEWcmxU1Q&hl=en&ehbc=2E312F"
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
                <span className="text-gray-600 ml-2">8 nights / 9 days</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Season:</span>
                <span className="text-gray-600 ml-2">From May to October</span>
              </div>
              <div className="md:col-span-3">
                <span className="font-semibold text-gray-700">Trip overview:</span>
                <span className="text-gray-600 ml-2">Bishkek — Kochkor — Köl-Ükök lake — Naryn — Ak-Muz — Kamandy jailoo — Acha-Kayindy — At-Bashy — Tash-Rabat — Koshoi-Korgon — Naryn — Bishkek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map - Constellation Style */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-green-900 to-blue-900 min-h-[700px]">
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
              Nine days.<br />
              Nomadic soul.<br />
              Timeless traditions.
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
                <span className="text-green-600 font-bold text-xs md:text-sm">Day {point.day}</span>
                <h3 className="font-bold text-gray-800 text-[10px] md:text-xs mt-1">{point.name}</h3>
              </div>
            </button>
          ))}

          {/* Decorative Icons */}
          <div className="absolute top-[15%] right-[40%] md:top-[20%] md:right-[57%] z-10">
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

          {/* Connecting Dots - simplified paths */}
          {/* 1 to 2 */}
          <div className="absolute top-[13%] left-[15%] md:top-[12%] md:left-[15%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] left-[18%] md:top-[10%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[9%] left-[21%] md:top-[8%] md:left-[21%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 2 to 3 */}
          <div className="absolute top-[5%] left-[47%] md:top-[5%] md:left-[35%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[5%] left-[50%] md:top-[5%] md:left-[38%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[5%] left-[53%] md:top-[5%] md:left-[41%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 3 to 4 */}
          <div className="absolute top-[13%] right-[18%] md:top-[5%] md:right-[40%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[11%] right-[20%] md:top-[5%] md:right-[43%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[9%] right-[22%] md:top-[5%] md:right-[46%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 4 to 5 */}
          <div className="absolute top-[30%] right-[10.5%] md:top-[17%] md:right-[26%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[33%] right-[10%] md:top-[20%] md:right-[22%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[36%] right-[9.5%] md:top-[23%] md:right-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 5 to 6 */}
          <div className="absolute top-[53%] right-[9%] md:top-[41%] md:right-[9%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[56%] right-[10%] md:top-[43%] md:right-[9%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute top-[59%] right-[11%] md:top-[45%] md:right-[9%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 6 to 7 */}
          <div className="absolute bottom-[23%] right-[20%] md:bottom-[27%] md:right-[14%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[20%] right-[22%] md:bottom-[21%] md:right-[21%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[17%] right-[24%] md:bottom-[15%] md:right-[28%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 7 to 8 */}
          <div className="absolute bottom-[7%] left-[53%] md:bottom-[10%] md:left-[55%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[7%] left-[49%] md:bottom-[10%] md:left-[47%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[7%] left-[45%] md:bottom-[10%] md:left-[39%] w-1.5 h-1.5 rounded-full bg-white/30" />
          {/* 8 to 9 */}
          <div className="absolute bottom-[17%] left-[23%] md:bottom-[15%] md:left-[23%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[22%] left-[18%] md:bottom-[20%] md:left-[18%] w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[27%] left-[13%] md:bottom-[25%] md:left-[13%] w-1.5 h-1.5 rounded-full bg-white/30" />
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
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${expandedDay === day.day ? 'ring-2 ring-green-500' : ''}`}
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full p-6 flex items-center gap-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">{day.day}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm text-green-600 font-semibold mb-1">{day.route}</p>
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
                    <p className="text-sm text-green-600 font-medium">{hotel.location}</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Live Like a Nomad?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your 9-day journey into authentic nomadic traditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Book This Tour
            </Link>
            <Link href="/tours" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}