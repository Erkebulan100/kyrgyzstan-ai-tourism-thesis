'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Mountain, Trophy, Utensils, Bike, Calendar } from 'lucide-react';

function SuusamyrContent() {
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

  // Restore scroll position on mount
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition-suusamyr');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem('scrollPosition-suusamyr');
    }
  }, []);

  // Save scroll position before navigation
  const handleLinkClick = () => {
    sessionStorage.setItem('scrollPosition-suusamyr', window.scrollY.toString());
  };

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
      <section className="relative h-[100vh] max-h-[600px] flex items-center justify center">
        <ImageSlider 
          images={[
            '/images/destinations/suusamyr/slide-1.jpg',
            '/images/destinations/suusamyr/slide-2.jpg',
            '/images/destinations/suusamyr/slide-3.jpg',
            '/images/destinations/suusamyr/slide-4.jpg',
            '/images/destinations/suusamyr/slide-5.jpg',
            '/images/destinations/suusamyr/slide-6.jpg',
            '/images/destinations/suusamyr/slide-7.jpg',
          ]}
          // autoHeight={true}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Suusamyr</h1>
            <p className="text-xl text-blue-100">The High Pastures of Northwestern Tien Shan</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Suusamyr is a picturesque highland valley which lies between massive ridges of Northwestern 
              Tien Shan. Suusamyr valley is especially beautiful from May to July because everything in 
              the valley will be green. The weather is cool here because of altitude though it might be 
              very hot during the midday.
            </p>
            <p>
              Suusamyr valley is definitely a place with nice rural landscape: hills and meadows with 
              big herds of cattle. Horseback riding, hiking, and picnicking are for sure things to do 
              in Suusamyr.
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
                
                {/* Hiking and Horseback Riding */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hiking and Horseback Riding</h3>
                  <p className="text-gray-600">
                    Suusamyr valley is the best place for horseback riding. With its mounts, hills, and 
                    rivers, it gives nice scenery during the whole trip. There are a lot of mountain trails 
                    that lead to places with stunning views of the valley.
                  </p>
                </div>

                {/* Horse Games */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Horse Games</h3>
                  <p className="text-gray-600">
                    Suusamyr valley is very convenient for horse games due to the abundance of suitable 
                    space. Local people are always ready to start playing ancient horse games which are 
                    incredible.
                  </p>
                </div>

                {/* Picnic in the Valley */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Utensils className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Picnic in the Valley</h3>
                  <p className="text-gray-600">
                    Having a meal is the most pleasant activity for every person. Having a meal outdoors 
                    on a height with a nice backdrop consisting of gorgeous countryside, endless meadows, 
                    and seas of cattle is twice as pleasant.
                  </p>
                </div>

                {/* Cycling */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Bike className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cycling</h3>
                  <p className="text-gray-600">
                    The valley is situated at the intersection of roads going to the southern Kyrgyzstan 
                    and Naryn province via Kochkor. It provides nice views of the countryside, pastures, 
                    river, and mounts.
                  </p>
                </div>

              </div>
            )}

            {/* Itineraries Tab */}
            {activeTab === 'itineraries' && (
              <div className="space-y-6">
                <Link href="/tours/golden-circle" 
                      onClick={handleLinkClick}
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-600 mb-2">Golden Circle of Kyrgyzstan</h3>
                      <p className="text-gray-600">
                        7 nights / 8 days tour featuring Suusamyr Valley. Drive through the scenic Töö-Ashuu 
                        Pass, experience spectacular panoramas of the valley, and stay in a traditional village 
                        house in Kyzyl-Oi.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="text-center pt-4">
                  <Link href="/tours" 
                        onClick={handleLinkClick}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187034.58693671566!2d73.9!3d42.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389c9a9f5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sSuusamyr%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Suusamyr?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s picturesque highland valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  onClick={handleLinkClick}
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Contact Us
            </Link>
            <Link href="/destinations" 
                  onClick={handleLinkClick}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Back to Destinations
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default function SuusamyrPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuusamyrContent />
    </Suspense>
  );
}