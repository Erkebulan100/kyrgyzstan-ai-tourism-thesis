'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Building2, Waves, Mountain, Calendar, Trophy, Store, Footprints, Fish, Landmark } from 'lucide-react';

export default function NarynPage() {
  const [activeTab, setActiveTab] = useState('things-to-do');

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
      <section className="relative h-[100vh] max-h-[600px] flex items-center justify-center">
        <ImageSlider 
          images={[
            '/images/destinations/naryn/slide-1.jpg',
            '/images/destinations/naryn/slide-2.jpg',
            '/images/destinations/naryn/slide-3.jpg',
            '/images/destinations/naryn/slide-4.jpg',
            '/images/destinations/naryn/slide-5.jpg',
            '/images/destinations/naryn/slide-6.jpg',
            '/images/destinations/naryn/slide-7.jpg',
          ]}
          // autoHeight={true}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Naryn</h1>
            <p className="text-xl text-blue-100">The Mountain Heart of Kyrgyzstan</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Naryn is the most sparsely populated province of Kyrgyzstan. The stark climate and high 
              altitudes shaped the lifestyle of local people who have to be herd-breeders. In Naryn you 
              can explore pure nomadic lifestyle which is not staged. Though having a stark climate 
              Naryn Province has amazing highland landscapes.
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
                
                {/* Soviet Architecture */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Soviet Architecture</h3>
                  <p className="text-gray-600">
                    Naryn town has a unique architectural heritage which mainly consists of Soviet buildings. 
                    As the town was a province center and important point for Soviet military people due to 
                    proximity with China a lot of formidable style constructions were built.
                  </p>
                </div>

                {/* Day-trip to Song-Kul Lake */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day-trip to Song-Kul Lake</h3>
                  <p className="text-gray-600">
                    Located on an altitude of 3,013 meters above sea level Song-Kul is the second-largest 
                    lake in Kyrgyzstan. It possesses some great natural beauty, while also being home an 
                    important destination for migratory birds. The summer pastures surrounding are favored 
                    by herd-breeder for providing rich food for their herds of horses, yaks, buffalos, and 
                    sheep. Per se, it is a favorite endpoint both for locals and foreigners.
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

                {/* Livestock Bazaar */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Livestock Bazaar</h3>
                  <p className="text-gray-600">
                    As the province&apos;s main economy is cattle breeding, not surprisingly, the area has 
                    largest livestock bazaars in Central Asia. One thing to notice that they usually work 
                    only on Sundays.
                  </p>
                </div>

                {/* Trekking */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Footprints className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Trekking</h3>
                  <p className="text-gray-600">
                    The pristine lands of Central Tien Shan always attract people from different parts of 
                    the globe. Here, they can get to know close local wildlife. The adventure seekers might 
                    be interested in the caves close to Naryn town where ancient settlement were found 
                    signifying that the area was inhabited for dozens of centuries.
                  </p>
                </div>

                {/* Horseback Riding */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Horseback Riding</h3>
                  <p className="text-gray-600">
                    Naryn is a place where horseback riding is a must. Mount trails throughout the province 
                    are excellent for riding. You can enjoy stunning landscapes in the mountains and highland 
                    pastures as well as an idyllic countryside.
                  </p>
                </div>

                {/* Rafting */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Rafting</h3>
                  <p className="text-gray-600">
                    Though in many places the speed of Naryn river is moderate, there are many places where 
                    the rivers really rapid. The canyons and gorges provide a breathtaking scenery making 
                    rafting down Naryn river a truly adventurous and exciting experience.
                  </p>
                </div>

                {/* Fishing */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Fish className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fishing</h3>
                  <p className="text-gray-600">
                    Rivers of Naryn province are rich with fish. The rivers, however, are rapid and have 
                    rocky bottoms. In different parts of the region tourists can try their skills in fishing 
                    as well as their patience.
                  </p>
                </div>

                {/* Kyrgyz Cemeteries */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Kyrgyz Cemeteries</h3>
                  <p className="text-gray-600">
                    There is a cemetery in every village of Naryn province. Kyrgyz cemeteries are unique 
                    because the tombs and constructions over them represent a mixture of shamanism and other 
                    pre-Islamic beliefs, Islam, Christianity, and Communist.
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
                        8 nights / 9 days adventure through Naryn province. Experience authentic nomadic life, 
                        visit Tash-Rabat caravanserai, explore highland pastures, and discover Silk Road monuments.
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
                        7 nights / 8 days tour featuring Song-Kul Lake in Naryn Province. Experience nomadic 
                        culture, watch traditional horse games, and enjoy spectacular highland scenery.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187034.58693671566!2d75.8!3d41.4286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38913c9c5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sNaryn%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
            Ready to Explore Naryn?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s pristine highland province
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