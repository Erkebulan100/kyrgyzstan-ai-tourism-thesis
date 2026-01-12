'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Mountain, Waves, BookOpen, Church, Landmark, Image, Trees, Snowflake, Calendar } from 'lucide-react';

function IssykKulContent() {
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
      '/images/destinations/issyk-kul-lake/slide-1.jpg',
      '/images/destinations/issyk-kul-lake/slide-2.jpg',
      '/images/destinations/issyk-kul-lake/slide-3.jpg',
      '/images/destinations/issyk-kul-lake/slide-4.jpg',
      '/images/destinations/issyk-kul-lake/slide-5.jpg',
      '/images/destinations/issyk-kul-lake/slide-6.jpg',
      '/images/destinations/issyk-kul-lake/slide-7.jpg',
      // '/images/destinations/issyk-kul-lake/slide-8.jpg',
    ]}
    // autoHeight={true}
    height="h-[60vh] md:h-[105vh]"
    // objectFit="contain" // ← Shows full image
    positions={[
      'center center',  // slide-1
      'center center',  // slide-2
      'center center',  // slide-3
      'center center',  // slide-4
      'center center',  // slide-5
      'center center',  // slide-6
      'center center',  // slide-7
      'center center',  // slide-8
    ]}
    defaultPosition="center center"
  />
  
  {/* Overlay Text */}
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 pointer-events-none">
    <div className="text-center text-white px-4 pointer-events-auto">
      <h1 className="text-5xl font-bold mb-4">Issyk-Kul Lake</h1>
      <p className="text-xl text-blue-100">The Pearl of Central Asia</p>
    </div>
  </div>
</section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Issyk-Kul Lake is the second largest alpine lake on our planet; also it is the 10th largest 
              lake in the world. The lake is 180 km long and 80 km wide and 700 meters deep. The lake is 
              surrounded by mountains and that is why the lake itself is not the only attraction in the area. 
              There are a lot of beautiful gorges with fir trees, swift rivers, and snow-capped tops.
            </p>
            <p>
              The lake is very convenient for horseback riding tours. Lake Issyk-Kul is one of the top 
              post-Soviet area resorts.
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
                
                {/* Hiking */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hiking</h3>
                  <p className="text-gray-600">
                    If you like hiking, then Issyk-Kul is the best place for you! You can find a lot of 
                    hiking routes in the stunning mountains surrounding the lake. By hiking you can get 
                    acquainted with local flora and fauna. There are a lot of stopping points with amazing 
                    view of landscapes.
                  </p>
                </div>

                {/* Beaches and Water Sports */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Beaches and Water Sports</h3>
                  <p className="text-gray-600">
                    Issyk-Kul Lake has many miles of beaches where you can enjoy swimming in the cool salty 
                    water and have sunbath. You&apos;ll find Issyk-Kul Lake looks more like a sea rather than a 
                    lake. In resort towns like Bosteri and Cholpon-Ata or Chok-Tal you can rent rowboats, 
                    sailboats, and jet-skis.
                  </p>
                </div>

                {/* Russian Exploration */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Russian Exploration</h3>
                  <p className="text-gray-600">
                    Kyrgyzstan being a part of Central Asia was very important for Russian Empire. So, the 
                    Russian Administration had sent a lot of explorers to the area. One of the most outstanding 
                    Russian explorers, Nicolay Przhevalsky, asked to bury him in Issyk-Kul. His museum is 
                    located near his grave in Karakol. The museum has a rich collection of materials from 
                    different expeditions made by Przhevalsky and many other Russian explorers.
                  </p>
                </div>

                {/* Russian Architecture */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Church className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Russian Architecture</h3>
                  <p className="text-gray-600">
                    Karakol town is one of the first Russian settlements in Central Asia. Russian migrants 
                    have built a nice town of many houses with carved windows. Also, there is couple of 
                    merchants&apos; houses in a gingerbread style. The most outstanding construction in Karakol 
                    is the wooden Holy Trinity Church.
                  </p>
                </div>

                {/* Scythians Cemeteries */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-stone-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-stone-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Scythians Cemeteries</h3>
                  <p className="text-gray-600">
                    Issyk-Kul Lake area was inhabited by many ancient tribes; the most famous were the 
                    Scythians. The tombs represent a man-made hill, and from the first glance you can&apos;t 
                    believe it is a tomb. However, you can notice that the hills stand in a straight line. 
                    It is very interesting to get to know the beliefs of ancient people.
                  </p>
                </div>

                {/* Petroglyphs */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Image className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Petroglyphs</h3>
                  <p className="text-gray-600">
                    Another place where you can feel ancient cultures is the Issyk-Kul state museum in 
                    Cholpon-Ata. It is 42 hectare open-air gallery of rocks with petroglyphs. The petroglyphs 
                    date back to 500 B.C. Ancient people depicted different hunting scenes, animals, and people.
                  </p>
                </div>

                {/* Jeti-Oguz gorge */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Jeti-Oguz Gorge</h3>
                  <p className="text-gray-600">
                    Jeti-Oguz is literally translated as &quot;seven bulls&quot;. The name comes from the seven massive 
                    red rocks. Surrounded by mountains covered with fir forests these red rocks appear very 
                    gorgeous. One of the rocks among these seven is called &quot;Broken Heart&quot; because as a result 
                    of earthquakes the rock was split and the reverse side looks very similar to broken heart.
                  </p>
                </div>

                {/* Barskoon gorge */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Trees className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Barskoon Gorge</h3>
                  <p className="text-gray-600">
                    Barskoon gorge is a long gorge on the southern shore of Issyk-Kul Lake. This gorge is 
                    full of fir forests. If you climb the mounts you can find two waterfalls. By hiking or 
                    horseback riding you can reach glaciers. Barskoon gorge was a lovely place of the first 
                    astronaut Yuri Gagarin; there are two monuments of him in the gorge.
                  </p>
                </div>

                {/* Skiing */}
                <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2 lg:col-span-1">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Snowflake className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Skiing</h3>
                  <p className="text-gray-600">
                    Karakol town has a nice skiing base. From November to March you have an opportunity to 
                    ski in Tien Shan Mountains. Besides good skiing lanes you can enjoy the beauty of 
                    surrounding area.
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
                        9 nights / 10 days journey through Kyrgyzstan&apos;s highlights including Issyk-Kul Lake. 
                        Visit Jeti-Oguz gorge with its famous red rocks, explore Karakol town, and enjoy 
                        the beautiful beaches of the lake.
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
                        11 nights / 12 days adventure combining Issyk-Kul Lake with mountain passes 
                        and nomadic culture. Experience horseback riding, yurt stays, and stunning 
                        alpine landscapes.
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
                      <h3 className="text-xl font-bold text-yellow-600 mb-2">Golden Circle</h3>
                      <p className="text-gray-600">
                        7 nights / 8 days tour around Issyk-Kul Lake and surrounding attractions. 
                        Perfect introduction to Kyrgyzstan&apos;s natural beauty and cultural heritage.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="text-center pt-4">
                  <Link href="/tours" 
                        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                    View All Tours
                  </Link>
                </div>
              </div>
            )}

            {/* Map Tab */}
            {activeTab === 'map' && (
              <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369476.7876565765!2d77.0!3d42.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3889c5e7d8b3d5b5%3A0x8b5b5b5b5b5b5b5b!2sIssyk-Kul%20Lake!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Issyk-Kul Lake?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us plan your journey to the Pearl of Central Asia
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

export default function IssykKulLakePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <IssykKulContent />
    </Suspense>
  );
}