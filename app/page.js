import { Mountain, Star, Users, MapPin, Phone, Mail, Calendar, Camera, Compass, Heart } from 'lucide-react';

export const metadata = {
  title: "Tien Shan Journeys | Central Asia Tours & Kyrgyzstan Travel Experts",
  description: "Experience the beauty of Central Asia. Discover pristine Tien Shan mountains, authentic nomadic culture, and legendary Silk Road heritage with Kyrgyzstan's premier tour company.",
  openGraph: {
    title: "Tien Shan Journeys | Central Asia Tours & Kyrgyzstan Travel",
    description: "Experience pristine Tien Shan mountains, authentic nomadic culture, and legendary Silk Road heritage in Kyrgyzstan.",
    url: 'https://kyrgyzstan-ai-tourism-thesis.vercel.app',
    siteName: 'Tien Shan Journeys',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-5">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Central Asia&apos;s Hidden Gem
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Experience the mystical beauty of Kyrgyzstan - authentic nomadic culture, 
            pristine Tien Shan mountain landscapes, and legendary Silk Road heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Tours
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Watch Video
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>1000+ Happy Travelers</span>
            </div>
            <div className="flex items-center">
              <Mountain className="w-5 h-5 mr-2" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Central Asia&apos;s Hidden Gem?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kyrgyzstan offers untouched natural beauty, rich nomadic traditions, and adventure experiences 
              that you simply cannot find anywhere else in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Majestic Mountains</h3>
              <p className="text-gray-600">
                Experience the breathtaking Tien Shan mountain range, pristine alpine lakes, 
                and snow-capped peaks that rival the Alps at a fraction of the cost.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nomadic Culture</h3>
              <p className="text-gray-600">
                Live with traditional nomadic families, stay in authentic yurts, 
                and experience a way of life unchanged for centuries.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Authentic Adventures</h3>
              <p className="text-gray-600">
                From horse trekking to eagle hunting, experience adventures that connect you 
                with nature and ancient traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Central Asia Tours
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most beloved adventures in the heart of Central Asia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Song Kul Lake Trek</h3>
                <p className="text-gray-600 mb-4">3-day adventure to Central Asia&apos;s most pristine alpine lake</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$299</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Tour Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ala Archa National Park</h3>
                <p className="text-gray-600 mb-4">Day trip to Kyrgyzstan&apos;s most accessible mountain paradise</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$89</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Tour Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Compass className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Silk Road Discovery</h3>
                <p className="text-gray-600 mb-4">7-day journey through ancient Silk Road cities</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">$699</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Central Asian Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers who have discovered the beauty of Central Asia&apos;s pristine wilderness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Plan My Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      
    </main>
  );
}