'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Mountain, Landmark, Store, Trophy, MapPin, Calendar } from 'lucide-react';

function AtBashyValleyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('things-to-do');

  // Read tab from URL on mount
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['things-to-do', 'itineraries', 'map'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
<section className="relative w-full">
  <ImageSlider 
    images={[
      '/images/destinations/at-bashy/slide-1.jpg',
      '/images/destinations/at-bashy/slide-2.jpg',
      '/images/destinations/at-bashy/slide-3.jpg',
      '/images/destinations/at-bashy/slide-4.jpg',
      '/images/destinations/at-bashy/slide-5.jpg',
      '/images/destinations/at-bashy/slide-6.jpg',
      '/images/destinations/at-bashy/slide-7.jpg',
      '/images/destinations/at-bashy/slide-8.jpg',
      '/images/destinations/at-bashy/slide-9.jpg',
    ]}
    positions={[
      '10% center',  // slide-1
      'center center',  // slide-2
      'center center',  // slide-3
      'center center',  // slide-4
      'center center',  // slide-5
      'center center',  // slide-6
      'center center',  // slide-7
      'center center',  // slide-8
      'center center',  // slide-9
    ]}
    defaultPosition="center center"
  />
  
  {/* Overlay Text */}
  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
    <div className="text-center text-white px-4 pointer-events-auto">
      <h1 className="text-5xl font-bold mb-4">At-Bashy Valley</h1>
      <p className="text-xl text-blue-100">The Wild Valley Near the Chinese Border</p>
    </div>
  </div>
</section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              At-Bashy is a lush valley located near the Kyrgyz-Chinese border. At-Bashy is the largest 
              and most sparsely populated valley in the country. The climate of At-Bashy is harsh and 
              because of that there are not many opportunities for farming. Thus, the main activity in 
              this area is cattle-breeding.
            </p>
            <p>
              From May to October cattle-breeders of At-Bashy Valley move to highland pastures with their 
              herds of horses, yaks, buffalos, and sheep. During this time these people experience a life 
              their ancestor had just couple centuries ago. Here the nomadic lifestyle is not staged; it 
              is a real difficult life in the mountains. Tien Shan Journeys is one of few tour operators 
              in Kyrgyzstan that offer you to see the real life of nomads.
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
              onClick={() => handleTabChange('things-to-do')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'things-to-do'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              THINGS TO DO
            </button>
            <button
              onClick={() => handleTabChange('itineraries')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'itineraries'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ITINERARIES
            </button>
            <button
              onClick={() => handleTabChange('map')}
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
                
                {/* Day-trip to Kamandy */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day-trip to Kamandy</h3>
                  <p className="text-gray-600">
                    Kamandy is a highland pasture in At-Bashy Valley. The area is remote even for the 
                    residents of At-Bashy. The pasture is rich with fir forests, absolutely green meadows, 
                    and swift rivers. The whole area is dotted with white yurts. Seas of sheep and horses 
                    surround you everywhere. Spend one day in Kamandy and get to know the real nomadic life. 
                    Besides, it is nice place for trekking and horseback riding.
                  </p>
                </div>

                {/* Day-trip to Koshoy Korgon */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day-trip to Koshoy Korgon</h3>
                  <p className="text-gray-600">
                    Koshoy Korgon is a ruined castle which is located in the western part of At-Bashy Valley. 
                    The exact date and history of the construction is unknown. There is an on-site museum 
                    whose staff can help with your guess.
                  </p>
                </div>

                {/* Day-trip to Tash-Rabat */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day-trip to Tash-Rabat</h3>
                  <p className="text-gray-600">
                    As the Silk Road passed through Kyrgyz lands the caravans needed a place to make stops 
                    in their long journeys from China to Europe. One of the best preserved monuments of the 
                    Silk Road is Tash-Rabat stone caravanserai. Its construction dates back to XV century AD. 
                    According to some historians initially it was either Nestorian or Buddhist monastery.
                  </p>
                </div>

                {/* Livestock Bazaar */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Livestock Bazaar</h3>
                  <p className="text-gray-600">
                    The main economy in At-Bashy is livestock-breeding, so here you visit one of the largest 
                    livestock bazaars in Central Asia. The bazaar works every Sunday. It is a nice opportunity 
                    to see not only the sale of livestock, but the life of ordinary people as well. The At-Bashy 
                    valley is sparsely populated and people live far from each other, thus, the livestock bazaar 
                    is the main gathering spot in the area.
                  </p>
                </div>

                {/* National Horse Games */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">National Horse Games</h3>
                  <p className="text-gray-600">
                    Kyrgyz people being nomadic for centuries created many games played on a horseback. 
                    The national horse games include race, horseback wrestling, and the most interesting 
                    is Ulak Tartish (Buzkashi). Watching traditional horse games is really exciting. By 
                    watching them you can feel the spirit and passion of nomads.
                  </p>
                </div>

                {/* Horseback Riding */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Horseback Riding</h3>
                  <p className="text-gray-600">
                    You can ride horse in At-Bashy almost everywhere. Every resident of At-Bashy has a horse; 
                    here horses are more important than cars. Horseback riding process will be accompanied 
                    with nice views of mountains and an pleasant countryside.
                  </p>
                </div>

              </div>
            )}

            {/* Itineraries Tab */}
            {activeTab === 'itineraries' && (
              <div className="space-y-6">
                <Link href="/tours/nomads-tien-shan" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Nomads of Tien Shan</h3>
                      <p className="text-gray-600">
                        8 nights / 9 days adventure featuring At-Bashy Valley. Visit Kamandy highland pasture, 
                        explore Tash-Rabat caravanserai, and discover Koshoy Korgon ancient ruins while 
                        experiencing authentic nomadic life.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187034.58693671566!2d75.8!3d41.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38913c9c5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sAt-Bashy%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
            Ready to Explore At-Bashy Valley?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s wild and remote valley
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

export default function AtBashyValleyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AtBashyValleyContent />
    </Suspense>
  );
}