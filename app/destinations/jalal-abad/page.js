'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { TreePine, Waves, Mountain, Droplets, Store, Building2, Calendar } from 'lucide-react';

function JalalAbadContent() {
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
      <section className="relative h-[100vh] max-h-[600px] flex items-center justify-center">
        <ImageSlider 
          images={[
            '/images/destinations/jalal-abad/slide-1.jpg',
            '/images/destinations/jalal-abad/slide-2.jpg',
            '/images/destinations/jalal-abad/slide-3.jpg',
          ]}
        //   autoHeight={true}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Jalal-Abad</h1>
            <p className="text-xl text-blue-100">The Most Beautiful Province of Kyrgyzstan</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Jalal-Abad province is located in the southwestern part of Kyrgyzstan. Jalal-Abad oblast 
              is rich with natural beauty. Jalal-Abad province has several national parks including 
              Arslanbob, Sary-Chelek, Padysha-Ata, and Besh-Aral. For example, Arslanbob is popular 
              for being the largest walnut forest in the world, and Sary-Chelek has rich biodiversity. 
              These places are ideal for trekking and all worth the efforts required doing it.
            </p>
            <p>
              Jalal-Abad province is the largest electricity producer in Kyrgyzstan. You can see huge 
              dams built in massive gorges. Jalal-Abad is considered as the most beautiful province of 
              Kyrgyzstan, however, you can agree and argue with that at the same time because Jalal-Abad 
              is really beautiful place and each destination in Kyrgyzstan is unique and gorgeous.
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
                
                {/* Day trip to Arslanbob */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day Trip to Arslanbob</h3>
                  <p className="text-gray-600">
                    Arslanbob is the largest and only walnut forest in the world. The area of the forest 
                    is more than 600,000 hectares. The forest is located on the slopes of Fergana range. 
                    The walnut is not the only plant which grows here. There are many other trees, flowers, 
                    herbs, and berries. Also, there is a nice small waterfall in the forest. According to 
                    legends, Alexander the Great enjoyed this place. Activities you can try in Arslanbob 
                    include trekking and biking in the woods, walnut harvesting depending on the time of 
                    year, and enjoying picnic near the waterfall.
                  </p>
                </div>

                {/* Day trip to Sary-Chelek */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day Trip to Sary-Chelek</h3>
                  <p className="text-gray-600">
                    Sary-Chelek Biosphere Reserve contains a chain of 7 lakes which appeared as a result 
                    of earthquakes. All lakes are beautiful, but the main lake Sary-Chelek is the most 
                    popular. The lakes are surrounded by mounts covered with forests. The forests are 
                    home to a rich variety of flora and fauna including 160 types of birds, 34 species 
                    of mammals, and more than 1,000 different plants. You can enjoy spending all day 
                    hiking around the lakes, having picnic and watching.
                  </p>
                </div>

                {/* Toktogul Dam */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Toktogul Dam</h3>
                  <p className="text-gray-600">
                    Toktogul Dam is the largest dam in Kyrgyzstan. For its construction the population 
                    of the area was moved and the whole valley was flooded. Now the reservoir looks like 
                    a natural lake. The size of it is also enormous. Toktogul Dam is a nice place for 
                    taking pictures.
                  </p>
                </div>

                {/* Mineral Springs */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mineral Springs</h3>
                  <p className="text-gray-600">
                    Mineral springs of Jalal-Abad are famous for more than one century. Russian military 
                    doctors found the springs have healing properties in the late XIX century. There are 
                    several spas (kurort) in Jalal-Abad. Do not be frightened with the soviet design of 
                    spas; the doctors here are professionals. Here you can relax taking a natural mineral 
                    spring bath.
                  </p>
                </div>

                {/* Bazaar */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Bazaar</h3>
                  <p className="text-gray-600">
                    As many cities in Central Asia, Jalal-Abad has its own bazaar. As usual it is very 
                    diverse and crowded. Learn how locals make shopping and bargain.
                  </p>
                </div>

                {/* Soviet Architecture */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Soviet Architecture</h3>
                  <p className="text-gray-600">
                    Jalal-Abad town has substantial number of buildings from the Soviet era. With their 
                    simple design and soviet symbols they can shed light on how any post-soviet town 
                    looks like.
                  </p>
                </div>

              </div>
            )}

            {/* Itineraries Tab */}
            {activeTab === 'itineraries' && (
              <div className="space-y-6">
                <Link href="/tours/treasures-tien-shan" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Treasures of Tien Shan</h3>
                      <p className="text-gray-600">
                        8 nights / 9 days journey through Jalal-Abad province. Visit Arslanbob - the 
                        largest walnut forest on our planet. Visit Sary-Chelek Biosphere Reserve with 
                        its amazing lakes. Hike and ride horses in astonishing landscapes. See The Red 
                        Book fauna and flora. Watch unique rural life.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187034.58693671566!2d72.9!3d41.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc83dacd6c0795%3A0x9a0b7c9d8e5f5e5e!2sJalal-Abad%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Jalal-Abad?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s most beautiful province
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

export default function JalalAbadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <JalalAbadContent />
    </Suspense>
  );
}