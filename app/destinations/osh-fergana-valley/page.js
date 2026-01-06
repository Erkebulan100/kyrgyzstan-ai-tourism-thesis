'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { Mountain, Landmark, Store, Building2, Columns, Tent, MapPin, Calendar } from 'lucide-react';
// import { Mountain, Landmark, Store, Building2, Monument, Tent, MapPin, Calendar } from 'lucide-react';

function OshFerganaValleyContent() {
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
      <section className="relative h-[100vh] max-h-[600px] flex items-center justify center">
        <ImageSlider 
          images={[
            '/images/destinations/osh-fergana-valley/slide-1.jpg',
            '/images/destinations/osh-fergana-valley/slide-2.jpg',
            '/images/destinations/osh-fergana-valley/slide-3.jpg',
            '/images/destinations/osh-fergana-valley/slide-4.jpg',
            '/images/destinations/osh-fergana-valley/slide-5.jpg',
          ]}
          //autoHeight={true}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Osh & Fergana Valley</h1>
            <p className="text-xl text-blue-100">The Ancient Silk Road City</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              The most fertile valley of Central Asia Fergana is shared by three countries. Kyrgyz part 
              of Fergana valley mainly consists of its foothills. The Fergana valley is the most densely 
              populated area of Kyrgyzstan. The second largest city of Kyrgyzstan Osh is located here. 
              Osh is an ancient city which is 3,000 years old. Unfortunately, earthquakes destroyed most 
              of ancient buildings, however, the city has sufficient soviet architecture and is one of 
              the cities which still has Lenin&apos;s statue on its main square.
            </p>
            <p>
              Another place where you can see antiquities is Uzgen town near Osh. Its ancient tower and 
              mausoleums attract many people from different places. Recently it became very easy to fly 
              from Osh to Bishkek as the number of flights has been increased. In Osh and other parts of 
              Kyrgyz Fergana visitors will enjoy visiting the large and crowded bazaars, trying local 
              cuisine, visiting different monuments and sights including UNESCO-listed Mount of Solomon 
              with the museum inside its caves.
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
                
                {/* Sulayman Too (Mount of Solomon) */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Sulayman Too (Mount of Solomon)</h3>
                  <p className="text-gray-600">
                    Mount of Solomon is in the UNESCO&apos;s World Heritage list. Being a popular destination 
                    for pilgrims from all over Central Asia, Mount of Solomon is believed to be a place 
                    where the King Solomon had stopped and prayed. Mount of Solomon is located right in 
                    the middle of the city and you can get nice panorama view of the city. Inside a cave 
                    in the Mount of Solomon there is an on-site museum that has many artifacts which can 
                    shed light on the history of the city and Ferghana Valley in general.
                  </p>
                </div>

                {/* Babur's House */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Babur&apos;s House</h3>
                  <p className="text-gray-600">
                    The famous Mogul Dynasty which ruled India for centuries originates from Central Asia. 
                    Before they exiled to India they enjoyed beautiful nature and nice climate Ferghana Valley. 
                    According to the diary of Zakhireddin Babur, the founder of Mogul Dynasty, Osh was his 
                    most favorite city in Ferghana Valley. He ordered to build a private prayer room in the 
                    XV century and it is a popular destination for pilgrims.
                  </p>
                </div>

                {/* Great Silk Road Bazaar */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Store className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Great Silk Road Bazaar</h3>
                  <p className="text-gray-600">
                    One of the largest and most crowded bazaars in Central Asia - the Great Silk Road - is 
                    situated in Osh. As any Bazaar in Asia, the Great Silk Road bazaar offers you everything 
                    you need from food and garments to household goods. Though it is busy every day, on 
                    Sundays the bazaar gets overwhelmingly crowded.
                  </p>
                </div>

                {/* Rabat Abdul Khan Mosque */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Rabat Abdul Khan Mosque</h3>
                  <p className="text-gray-600">
                    One of the well-preserved old buildings of Osh is Rabat Abdul Khan Mosque built in the 
                    16th century. The mosque is quite huge, so you can see a lot of religious people going there.
                  </p>
                </div>

                {/* Monuments */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Columns className="w-6 h-6 text-red-600" />
                    {/* <Monument className="w-6 h-6 text-red-600" /> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Monuments</h3>
                  <p className="text-gray-600">
                    There are numerous monuments of famous people in Osh and Kyrgyzstan; however, there are 
                    monuments of worldwide-known people as Mr. Lenin. The city preserves its Soviet heritage 
                    with Lenin&apos;s statue still standing on its main square.
                  </p>
                </div>

                {/* Lenin Peak Base Camp */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Tent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Lenin Peak Base Camp</h3>
                  <p className="text-gray-600">
                    True mountaineers have an opportunity to try themselves in climbing the steep Lenin Peak 
                    (7,137 meters). The camp has 50-60 tents, with basic amenities and 24-hour electricity. 
                    The camp works in the summer. Here you can enjoy incredible views of the peak, especially, 
                    when the sky is clear.
                  </p>
                </div>

                {/* Day-Trip to Chong Alai */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day-Trip to Chong Alai</h3>
                  <p className="text-gray-600">
                    Chong-Alai Valley boasts the breathtaking views of Pamir Mountains and the Lenin Peak. 
                    It is a nice for horseback and, probably, yak back riding as well. It is nice to have 
                    a picnic in such stunning landscape. Chong-Alai is home to Kurmanjan Datka, the first 
                    woman in the Muslim world to get a military title, who was informally called &quot;the Queen 
                    of South Kyrgyzstan&quot;.
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
                        8 nights / 9 days journey ending in Osh. Visit Arslanbob walnut forest, Sary-Chelek 
                        lakes, then explore ancient Uzgen and climb the UNESCO-listed Mount of Solomon in Osh.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/tours/tien-shan-meets-pamir" 
                      className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-600 mb-2">Where Tien Shan Meets Pamir</h3>
                      <p className="text-gray-600">
                        Multi-country adventure featuring Osh and the Fergana Valley as a gateway to the 
                        Pamir Mountains. Experience where two legendary mountain ranges meet.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97389.45736814407!2d72.7578!3d40.5283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad21de881ea3%3A0x49df6d8a5e5e5e5e!2sOsh%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore Osh & Fergana Valley?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let us plan your journey through Kyrgyzstan&apos;s ancient Silk Road city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Contact Us
            </Link>
            <Link href="/destinations" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all">
              Back to Destinations
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
export default function OshFerganaValleyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <OshFerganaValleyContent />
    </Suspense>
  );
}