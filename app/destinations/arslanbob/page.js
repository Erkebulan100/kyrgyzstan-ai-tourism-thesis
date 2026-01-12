'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { TreePine, Mountain, Footprints, MapPin, Calendar, Compass } from 'lucide-react';

export default function ArslanbobPage() {
  const [activeTab, setActiveTab] = useState('things-to-do');

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Slider */}
<section className="relative w-full">
  <ImageSlider 
    images={[
      '/images/destinations/arslanbob/slide-1.jpg',
      '/images/destinations/arslanbob/slide-2.jpg',
      '/images/destinations/arslanbob/slide-3.jpg',
    ]}
    positions={[
      'center center',  // slide-1
      'center center',  // slide-2
      'center center',  // slide-3
    ]}
    defaultPosition="center center"
  />
  
  {/* Overlay Text */}
  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
    <div className="text-center text-white px-4 pointer-events-auto">
      <h1 className="text-5xl font-bold mb-4">Arslanbob</h1>
      <p className="text-xl text-blue-100">The World&apos;s Largest Walnut Forest</p>
    </div>
  </div>
</section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Arslanbob is the largest and only walnut forest in the world. The forest area is about 
              600,000 hectares. The forest is rich with different plants, birds and animals. Because 
              the forest is situated on slopes of Fergana range it is quite easy to take pictures of 
              the area.
            </p>
            <p>
              There is a nice small waterfall in the woods. According to legends Alexander the Great 
              had enjoyed here. Every year Arslanbob is getting more popular and the list of activities 
              is increasing.
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
                
                {/* Activity 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Local Walnut Harvesting</h3>
                  <p className="text-gray-600">
                    If you come to Arslanbob in the fall you will have a chance to see and participate 
                    in walnut harvesting. People head to the forest to collect not only walnuts, the 
                    forest is abundant with pistachios, almonds, apples, plum, and other fruits.
                  </p>
                </div>

                {/* Activity 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mountain Hiking and Biking</h3>
                  <p className="text-gray-600">
                    Hiking or biking in the woods or surrounding mountains is exciting. There are many 
                    trails which go to places with excellent views of the landscape.
                  </p>
                </div>

                {/* Activity 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Footprints className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Nature Walk</h3>
                  <p className="text-gray-600">
                    Though the main plant here is walnut, Arslanbob possesses sufficient biodiversity. 
                    There are many types of trees, berries, flowers, and herbs. You can walk slowly in 
                    the forest to see everything in detail. During your walk you can notice different 
                    animals and birds.
                  </p>
                </div>

                {/* Activity 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Compass className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Waterfall Picnic</h3>
                  <p className="text-gray-600">
                    Visit the beautiful small waterfall hidden in the woods. Pack a picnic and enjoy 
                    the serene atmosphere surrounded by ancient walnut trees and the sound of cascading water.
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
                      <h3 className="text-xl font-bold text-blue-600 mb-2">Treasures of Tien Shan</h3>
                      <p className="text-gray-600">
                        Visit Arslanbob - the largest and only walnut forest on our planet. Visit Sary 
                        Chelek Biosphere Reserve with its amazing lakes. Hike and ride horses in 
                        astonishing landscapes. See The Red Book fauna and flora. Watch unique rural life.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48456.95489465386!2d72.8969!3d41.3347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c5a5d5cb5be1b7%3A0x4e9c8c5eb1d9c6a7!2sArslanbob%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
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
            Ready to Explore Arslanbob?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us plan your journey to the world&apos;s largest walnut forest
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