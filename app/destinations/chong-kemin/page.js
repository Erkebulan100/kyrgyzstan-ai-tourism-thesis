'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Mountain, Fish, Footprints, Landmark, Waves, Calendar } from 'lucide-react';

export default function ChongKeminPage() {
  const [activeTab, setActiveTab] = useState('things-to-do');

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
<section className="relative w-full">
  <ImageSlider 
    images={[
      '/images/destinations/chong-kemin/slide-1.jpg',
      '/images/destinations/chong-kemin/slide-2.jpg',
      '/images/destinations/chong-kemin/slide-3.jpg',
      '/images/destinations/chong-kemin/slide-4.jpg',
    ]}
    positions={[
      'center center',  // slide-1
      'center center',  // slide-2
      'center center',  // slide-3
      'center center',  // slide-4
    ]}
    defaultPosition="center center"
  />
  
  {/* Overlay Text */}
  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
    <div className="text-center text-white px-4 pointer-events-auto">
      <h1 className="text-5xl font-bold mb-4">Chong-Kemin</h1>
      <p className="text-xl text-blue-100">The Green Valley of Kyrgyzstan</p>
    </div>
  </div>
</section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Chong-Kemin Valley is an isolated highland valley in the northern part of Kyrgyzstan. 
              Chong-Kemin is a beautiful valley surrounded with nice countryside views, mountains 
              covered with forests, rapid rivers, and snow-capped peaks. Here you can enjoy natural 
              beauty and fresh air. In Chong-Kemin people love to play traditional horse games which 
              you would love to watch. People here are exceptionally friendly and it is supposed to 
              be so, because when you live in such beautiful place you forget everything which could 
              displease you.
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
                
                {/* Hiking */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Footprints className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hiking</h3>
                  <p className="text-gray-600">
                    Hiking through Chong-Kemin National Park, rising as high as 9,000 feet in elevation, 
                    you can enjoy area&apos;s stunning natural beauty. If you are lucky you can spot rare 
                    inhabitants of the park like Snow Leopards, Deer, Falcons, and Eagles.
                  </p>
                </div>

                {/* Fishing */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Fish className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fishing</h3>
                  <p className="text-gray-600">
                    The Chon-Kemin river is rich with exceptionally tasty trout. Fishing in a rapid river, 
                    however, requires extra skills plus don&apos;t forget that the river bottom is mainly rocky.
                  </p>
                </div>

                {/* Horseback Riding */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Horseback Riding</h3>
                  <p className="text-gray-600">
                    Picturesque Chon-Kemin Valley is an excellent place for horseback riding. For sure, 
                    you can see more on a horseback rather than by hiking. It is worth to note that horses 
                    in Chon-Kemin Valley are very comfortable to ride. They are not too small or too big; 
                    they are like a golden mean size horses.
                  </p>
                </div>

                {/* Ancient Burial Mounds */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ancient Burial Mounds</h3>
                  <p className="text-gray-600">
                    Chong-Kemin Valley was inhabited for millenniums. The evidence comes from numerous 
                    burial mounds spread throughout the valley. Some of them date back to IV century BC, 
                    while the younger ones date back to VI-XI centuries AD.
                  </p>
                </div>

                {/* Rafting */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Rafting</h3>
                  <p className="text-gray-600">
                    The rapid stream of Chon-Kemin river guarantees your adrenaline when you raft down 
                    the river. The rafting here is challenging as the watercourse passes through and has 
                    many sharp turns. The adventure-seekers will definitely love this place first for the 
                    emotions they get and for natural beauty they see while rafting.
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
                        7 nights / 8 days journey featuring Chong-Kemin Valley. Experience beautiful 
                        mountain views, horseback riding, and the famous Ulak Tartish horse game while 
                        staying at the ranch-style Ashu Hotel.
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
                        7 nights / 8 days tour including Chong-Kemin Valley. After visiting Song-Kul Lake, 
                        enjoy horseback riding or hiking in Chong-Kemin National Park before returning to Bishkek.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187034.58693671566!2d76.1!3d42.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389c9a9f5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sChong-Kemin%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Chong-Kemin?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s beautiful green valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Contact Us
            </Link>
            <Link href="/destinations" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Back to Destinations
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}