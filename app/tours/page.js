import { Mountain, Calendar, Users, Star, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Tours & Itineraries | Tienshan Journeys | Kyrgyzstan Travel Packages",
  description: "Explore our carefully designed tours in Kyrgyzstan and Central Asia. From classic itineraries to custom adventures, discover the perfect journey for you.",
};

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-end justify-center pb-[23%]"
      style={{
          backgroundImage: "url('/images/hero/hero-yurt-night.jpg')",
        //   if you want somewhat purplish picture add linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), in front of url('/images/tours/treasures-tien-shan-hero.jpg') 
          backgroundSize: 'cover',
          backgroundPosition: 'center 99%'
        }}>
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Tours & Itineraries</h1>
          <p className="text-xl text-blue-100">
            Discover Kyrgyzstan and Central Asia with our expertly crafted journeys
          </p>
        </div>
      </section>

      {/* Introduction Section - TEXT FROM OLD WEBSITE */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-white space-y-4 text-lg leading-relaxed">
            <p>
              Tien Shan Journeys designs itineraries which would best satisfy your interests and passion. 
              Our suggested itineraries are created to provide you as many activities as possible so that 
              you would enjoy every single day you spend in Kyrgyzstan. Our itineraries are designed to get 
              our clients to the best and most interesting places in Kyrgyzstan. To make your journey 
              comfortable Tien Shan Journeys works with the best accommodation in Kyrgyzstan.
            </p>
            <p>
              For those interested in multi-country trips Tien Shan Journeys offers itineraries with which 
              you can explore the whole Central Asian region. We suggest you to combine trip to Kyrgyzstan 
              with a travel to Uzbekistan or Xinjiang, China. You can visit three countries Kyrgyzstan, 
              Uzbekistan, and China in once. Also you can combine your journey to Kyrgyzstan with a travel 
              to South Kazakhstan or Mongolia. If you are interested in visiting all countries mentioned 
              you can do it with Tien Shan Journeys.
            </p>
            <p>
              Each of our itineraries can be further adjusted to your preferences. Contact us today to 
              start planning your unforgettable journey to Kyrgyzstan and beyond!
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Featured Tours
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1: Classic Kyrgyzstan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Mountain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Classic Kyrgyzstan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span>7 nights / 8 days</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Small groups</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span>Most popular</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Experience the best of Kyrgyzstan - from Bishkek to Issyk-Kul Lake, 
                  Karakol, and the beautiful Chon-Kemin Valley.
                </p>

                <Link href="/tours/classic-kyrgyzstan" 
                      className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 2: Golden Circle */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <MapPin className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Golden Circle of Kyrgyzstan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                    <span>Multi-day tour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    <span>All group sizes</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Explore the must-see destinations forming Kyrgyzstan&apos;s golden circle 
                  of natural and cultural wonders.
                </p>

                <Link href="/tours/golden-circle" 
                      className="block w-full bg-orange-600 text-white text-center px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 3: Nomads of Tien Shan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Users className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Nomads of Tien Shan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    <span>Cultural immersion</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    <span>Authentic experience</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Live with nomadic families, stay in traditional yurts, and experience 
                  centuries-old traditions in the mountains.
                </p>

                <Link href="/tours/nomads-tien-shan" 
                      className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 4: Treasures of Tien Shan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Star className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Treasures of Tien Shan</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Extended tour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mountain className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Mountain highlights</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Discover hidden gems and spectacular mountain landscapes throughout 
                  the Tien Shan range.
                </p>

                <Link href="/tours/treasures-tien-shan" 
                      className="block w-full bg-purple-600 text-white text-center px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Tour 5: Tien Shan meets Pamir */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <Mountain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Where Tien Shan Meets Pamir</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span>Multi-country</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    <span>Border crossing</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Journey between two legendary mountain ranges, exploring both 
                  Kyrgyzstan and Tajikistan.
                </p>

                <Link href="/tours/tien-shan-meets-pamir" 
                      className="block w-full bg-red-600 text-white text-center px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  View Details
                </Link>
              </div>
            </div>

            {/* Custom Tour Card */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="p-8 h-full flex flex-col justify-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Custom Tour</h3>
                <p className="text-gray-300 mb-6">
                  Cannot find the perfect tour? We will build a custom itinerary just for you.
                </p>
                <Link href="/contact" 
                      className="bg-white text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you plan the perfect journey through Central Asia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all">
              Contact Us
            </Link>
            <Link href="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}