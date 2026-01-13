'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Sun, MapPin, ChevronDown, ChevronUp, Star, Users, Mountain, Camera, Utensils, Store } from 'lucide-react';

export default function TienShanMeetsPamirPage() {
  const [expandedHotel, setExpandedHotel] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  const highlights = [
    { icon: Camera, text: "Get shots of Lenin Peak and astonishing Pamir Mounts" },
    { icon: Mountain, text: "Visit ancient building in Uzgen dating back to IX-XII centuries" },
    { icon: Star, text: "Visit 3,000 years old Osh city" },
    { icon: Users, text: "Find a place where King Solomon prayed" },
    { icon: Store, text: "Explore Central Asia style bazaars" },
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
      title: "Bishkek – Toktogul",
      route: "Mountain Passes",
      description: "Set off to Toktogul (280 km) in the morning. The road goes through Kara-Balta gorge, Töö-Ashuu Pass (3586 m above sea) and Ala-Bel Pass (3184 m above sea). On the way you will watch beautiful countryside, spectacular views of mountains and valleys. You will be provided with picture stops anywhere you find it suitable. During this trip you will see Kyrgyz nomads for the first time. You will have lunch in a beautiful Chichkan gorge. Enjoy views of Chichkan gorge and huge Toktogul Dam. At the end of the trip you will arrive in Toktogul town. Enjoy your dinner and stay overnight in a homestay."
    },
    {
      day: 3,
      title: "Toktogul – Jalal-Abad",
      route: "Naryn River",
      description: "This morning you will start your trip to Jalal-Abad (290 km). The road follows the huge Naryn river. On the way you will have numerous stops for pictures. When you arrive in Jalal-Abad you will visit local bazaar. Enjoy your dinner in a restaurant and stay overnight in homestay."
    },
    {
      day: 4,
      title: "Jalal-Abad – Uzgen – Osh",
      route: "Ancient Cities",
      description: "Today in the morning you will set off to Osh (103 km). On the way you will visit ancient town of Uzgen where you can see a tower and mausoleums dating back to IX-XII centuries. Besides you will visit Uzgen Bazaar which is very interesting place. Then, you will arrive to Osh. Osh is the second largest city in Kyrgyzstan – reputedly 3,000 years old. Archaeologists have found artifacts dating back to about the fifth century B.C. The first site you visit is Mount of Solomon. It is the main pilgrimage site in Fergana Valley. According to beliefs Prophet Solomon stopped to pray here. After that you will have small city tour, see the main sights of the city as squares and monuments. Enjoy your dinner in a restaurant and stay overnight in a hotel."
    },
    {
      day: 5,
      title: "Osh – Sary-Tash",
      route: "Highland Highway",
      description: "Today you will travel to Sary-Tash village which is the last village on your trip to Chon-Alai Valley. You drive on a highland highway with two passes Chigirchik (2406m) and Taldyk (3615m). Indeed, the road is built in a scenic landscape. You will have many photo stops and one stop for a picnic. Enjoy your dinner and stay overnight in a homestay."
    },
    {
      day: 6,
      title: "Sary-Tash – Chon-Alai Valley – Osh",
      route: "Lenin Peak Views",
      description: "Today you will ride horse up to Chon-Alai Valley. There you will enjoy excellent views of Pamir Mountains and, especially, Lenin Peak which is 7,134 meters high. It is a good place for a picnic. In the evening you will set off to Osh where you will get your dinner and stay overnight in a hotel."
    },
    {
      day: 7,
      title: "Osh – Bishkek",
      route: "Return Flight",
      description: "Today in the morning you will fly from Osh to Bishkek. The flight takes less than an hour. You have free time in Bishkek to do some shopping and things you've may missed on the first day. Enjoy your dinner together with folklore show. Stay overnight in the hotel."
    },
    {
      day: 8,
      title: "Bishkek – Airport Manas",
      route: "Departure",
      description: "After breakfast transfer to the airport. This is your final day in Kyrgyzstan. After an amazing week of adventures your journey has come to an end. You will be transferred to the Manas International Airport where you will catch your flight home or fly to another exciting destination."
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
      name: "Sunrise Hotel",
      location: "Osh",
      image: "/images/hotels/sunrise-osh.jpg",
      description: "Sunrise Hotel has an advantage over other hotels in Osh as it is located in the city center which gives an easy access to the city's main sights such as Mount of Solomon or Great Silk Road Bazaar. Rooms in the Sunrise Hotel have all modern conveniences such as satellite TV, Wi-Fi, and a nice restaurant which serves the best of local food, though it offers European food too. If you want to get to know Kyrgyz culture more you can choose an option of staying in a yurt which is set just in the hotel's garden."
    },
    {
      id: 4,
      name: "Barak Ata Guesthouse",
      location: "Osh",
      image: "/images/hotels/barak-ata.jpg",
      description: "Barak Ata Guesthouse is definitely a good choice for a homestay. Here you have everything a traveler needs. Rooms are big and bright; they have all modern amenities. In every room there is a private bathroom and satellite TV. There is a computer center where you can use Internet and make international calls. The guesthouse has a nice sauna - really a good option after a day of exciting activities."
    }
  ];

  // Journey points - same positions as Classic Kyrgyzstan (8 days)
  const journeyPoints = [
    { day: 1, name: "Bishkek", position: "left-[1%] top-[20%] md:left-[5%] md:top-[17%]" },
    { day: 2, name: "Toktogul", position: "left-[25%] top-[5%] md:left-[23%] md:top-[1%]" },
    { day: 3, name: "Jalal-Abad", position: "left-[65%] top-[5%] md:left-[50%] md:top-[0%]" },
    { day: 4, name: "Osh", position: "right-[1%] top-[31%] md:right-[13%] md:top-[15%]" },
    { day: 5, name: "Sary-Tash", position: "right-[1%] top-[60%] md:right-[13%] md:top-[57%]" },
    { day: 6, name: "Chon-Alai", position: "right-[25%] bottom-[5%] md:right-[35%] md:bottom-[0%]" },
    { day: 7, name: "Return", position: "left-[15%] bottom-[5%] md:left-[29%] md:bottom-[1%]" },
    { day: 8, name: "Departure", position: "left-[1%] bottom-[33%] md:left-[5%] md:bottom-[25%]" },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] md:h-[100vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/images/tours/tien-shan-meets-pamir/slide-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-green-900/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-blue-200 text-lg mb-4 tracking-widest uppercase">7 Nights / 8 Days</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Where Tien Shan Meets Pamir</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Journey between two legendary mountain ranges
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
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-bold text-gray-800">7 nights / 8 days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Season</p>
                <p className="font-bold text-gray-800">April to October</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="bg-teal-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Route</p>
                <p className="font-bold text-gray-800">Bishkek → Osh → Pamir → Bishkek</p>
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
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg">
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
            {/* Map with hidden header - UPDATE THIS WITH YOUR GOOGLE MY MAPS LINK */}
            <div style={{ marginTop: '-67px', height: 'calc(100% + 67px)' }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1P5cXyZNFJuHCOahWhm84MtVMwb2mLjc&hl=en&ehbc=2E312F"
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
                <span className="text-gray-600 ml-2">From April to October</span>
              </div>
              <div className="md:col-span-3">
                <span className="font-semibold text-gray-700">Trip overview:</span>
                <span className="text-gray-600 ml-2">Bishkek – Toktogul – Jalal-Abad – Uzgen – Osh – Sary-Tash – Chon-Alai Valley – Osh – Bishkek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map - Constellation Style */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 min-h-[700px]">
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
              Two mountain ranges.<br />
              Infinite horizons.
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
                <span className="text-blue-600 font-bold text-xs md:text-sm">Day {point.day}</span>
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

          {/* Snow Leopard */}
          <div className="absolute top-[39%] right-[23%] md:top-[67%] md:right-[48%] z-10">
            <img 
              src="/images/snow-leopard.svg" 
              alt="Snow Leopard" 
              className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-70"
              style={{ filter: 'invert(1) brightness(0.8)' }}
            />
          </div>

          {/* Connecting Dots Path - same as Classic Kyrgyzstan */}
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
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${expandedDay === day.day ? 'ring-2 ring-blue-500' : ''}`}
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full p-6 flex items-center gap-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">{day.day}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm text-blue-600 font-semibold mb-1">{day.route}</p>
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
                    <p className="text-sm text-blue-600 font-medium">{hotel.location}</p>
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
                        className=" w-full md:float-left md:w-64 h-auto rounded-lg mb-4 md:mr-5 md:mb-3"
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Where Tien Shan Meets Pamir?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us plan your perfect 8-day adventure between two legendary mountain ranges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Book This Tour
            </Link>
            <Link href="/tours" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}