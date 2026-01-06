'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Building2, Landmark, Music, ShoppingBag, Mountain, Calendar, Flag, Building, Palette, BookOpen } from 'lucide-react';

export default function BishkekPage() {
  const [activeTab, setActiveTab] = useState('things-to-do');

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
      <section className="relative h-[100vh] max-h-[600px] flex items-center justify center">
        <ImageSlider 
          images={[
            '/images/destinations/bishkek/slide-1.jpg',
            '/images/destinations/bishkek/slide-2.jpg',
            '/images/destinations/bishkek/slide-3.jpg',
            '/images/destinations/bishkek/slide-4.jpg',
          ]}
          // autoHeight={true}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Bishkek</h1>
            <p className="text-xl text-blue-100">The Capital City of Kyrgyzstan</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Bishkek is a modern, comfortable, and nice city with many people walking on the streets. 
              Though Bishkek is a quite young city founded more than a century ago, there is a lot to 
              see there. The city has strong Soviet and European flavor. If you love Soviet architecture, 
              this is definitely a place to come.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          
          {/* Tab Buttons */}
          <div className="flex border-b border-gray-300 mb-8">
            <button
              onClick={() => setActiveTab('things-to-do')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'things-to-do'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              THINGS TO DO
            </button>
            <button
              onClick={() => setActiveTab('itineraries')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'itineraries'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ITINERARIES
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'map'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              MAP
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            
            {/* Things To Do Tab */}
            {activeTab === 'things-to-do' && (
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Ala-Too Square */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Flag className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ala-Too Square</h3>
                  <p className="text-gray-600">
                    It is the main city square. The square consists of huge marble buildings of the late 
                    Soviet Period. There is National History Museum, Parliament Building, and three massive 
                    administrative buildings with colons. There are several monuments on the square such as 
                    Manas – national hero, Chyngyz Aitmatov – the most outstanding Kyrgyz writer, 2010 Revolution, 
                    and Memorial of Victims of Stalin&apos;s repressions. One of the main attractions of the square 
                    is the flagpole with guards changing every two hours.
                  </p>
                </div>

                {/* National History Museum */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">National History Museum</h3>
                  <p className="text-gray-600">
                    The museum has a rich collection of exhibits which can tell you a lot about the communist 
                    period in Kyrgyzstan. Also, you can learn a lot about the ancient people who inhabited 
                    Kyrgyzstan, Middle Ages, Silk Road. And finally, you can learn a lot about the lifestyle 
                    of Kyrgyz nomads.
                  </p>
                </div>

                {/* Old Square */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Old Square</h3>
                  <p className="text-gray-600">
                    The Old Square of Bishkek is located just behind the National History Museum. The square 
                    has Prime Minister&apos;s Office, American University of Central Asia, Ministry of Foreign 
                    Affairs, House of Russian Merchant built in the XIX century.
                  </p>
                </div>

                {/* M Frunze Museum */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">M Frunze Museum</h3>
                  <p className="text-gray-600">
                    Mikhail Frunze was the World War I and civil war general who was born in Bishkek. The main 
                    artifact of the museum is the house where the Mikhail Frunze was born. The museum is a good 
                    place to learn how Russian settlers lived in the city. Besides, there is a plenty of exhibits 
                    telling about the first years of Soviet power in Kyrgyzstan and Central Asia.
                  </p>
                </div>

                {/* National Museum of Fine Arts */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">National Museum of Fine Arts</h3>
                  <p className="text-gray-600">
                    Fine Arts Museum has rich collection of works of local artists. Here you can learn about 
                    the influence of Russian realist on Kyrgyz artists. Besides, there is a lot of modern art. 
                    Also there are expositions of traditional arts.
                  </p>
                </div>

                {/* Opera House */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Opera House</h3>
                  <p className="text-gray-600">
                    With its classical appearance the Opera House of Bishkek is a pretty building located in 
                    the center of the city. Though this is a classical building, there are a lot of details 
                    which tell that the theater is in Central Asia. Kyrgyz ethnic designs with Soviet ideology 
                    design make this building unique. There are rumors that say the building was built by 
                    imprisoned Nazi German soldiers.
                  </p>
                </div>

                {/* Philharmonic House */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Philharmonic House</h3>
                  <p className="text-gray-600">
                    The Philharmonic House Building is a nice example of late Soviet architecture. Marbled 
                    with Statue of Manas and with national design this building somehow tells that Kyrgyz 
                    people are modern nation with rich history.
                  </p>
                </div>

                {/* City Hall */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">City Hall</h3>
                  <p className="text-gray-600">
                    The City Hall is located in front of Philharmonic House. It is nice classic building 
                    with Soviet style decorations. If you are lucky with weather you can get nice shots 
                    of the City Hall with snow-capped mountains behind.
                  </p>
                </div>

                {/* Osh Bazaar */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Osh Bazaar</h3>
                  <p className="text-gray-600">
                    Osh Bazaar is one of the most chaotic and crowded bazaars in Bishkek. People love this 
                    place because here they can find everything they want starting from food to local crafts 
                    and clothes.
                  </p>
                </div>

                {/* Chunkurchak Gorge */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Chunkurchak Gorge</h3>
                  <p className="text-gray-600">
                    Day trip to Chunkurchak is very convenient. Chunkurchak gorge is just 35 km far from 
                    Bishkek. The gorge has beautiful fir forest. You can ride horse for the whole day and, 
                    finally, reach the glaciers, and then go back to the nice Beshik Hotel Bungalow with 
                    fine Kyrgyz traditional food.
                  </p>
                </div>

              </div>
            )}

            {/* Itineraries Tab */}
            {activeTab === 'itineraries' && (
              <div className="space-y-6">
                <Link href="/tours/classic-kyrgyzstan" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-2">Classic Kyrgyzstan</h3>
                      <p className="text-gray-600">
                        7 nights / 8 days journey starting and ending in Bishkek. Experience the capital city, 
                        Issyk-Kul Lake, Karakol, and the beautiful Chon-Kemin Valley.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/tours/golden-circle" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-600 mb-2">Golden Circle of Kyrgyzstan</h3>
                      <p className="text-gray-600">
                        7 nights / 8 days tour featuring Bishkek, Chunkurchak Valley, Song-Kul Lake, 
                        and spectacular highland scenery.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/tours/nomads-tien-shan" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Nomads of Tien Shan</h3>
                      <p className="text-gray-600">
                        8 nights / 9 days adventure starting from Bishkek into the heart of nomadic culture 
                        and Silk Road monuments.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/tours/treasures-tien-shan" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Treasures of Tien Shan</h3>
                      <p className="text-gray-600">
                        8 nights / 9 days journey from Bishkek through walnut forests and alpine lakes 
                        to the ancient Silk Road city of Osh.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="text-center pt-4">
                  <Link href="/tours" 
                        className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all">
                    View All Tours
                  </Link>
                </div>
              </div>
            )}

            {/* Map Tab */}
            {activeTab === 'map' && (
              <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93517.34744920498!2d74.5269896!3d42.8746212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c6a1a6c6b7%3A0x7e5f3b4c8e5f9c8a!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Bishkek?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s vibrant capital city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Contact Us
            </Link>
            <Link href="/destinations" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Back to Destinations
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}