import { Mountain, Heart, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "About Us | Tienshan Journeys | Central Asia Tour Experts",
  description: "Learn about Tienshan Journeys - Central Asia's premier tour company. Local experts offering authentic Kyrgyzstan travel experiences since 2014.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Tienshan Journeys</h1>
          <p className="text-xl text-blue-100">Bespoke travel in Kyrgyzstan and Central Asia</p>
        </div>
      </section>

      {/* Company Introduction - Original Text */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Tienshan Journeys</h2>
          <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
            <p>
              Tien Shan Journeys offers you the opportunity to discover the amazing beauty of Kyrgyzstan. 
              We provide full-service travel in our country. Though we are a new company, we have sufficient 
              expertise and knowledge in the tourism industry.
            </p>
            <p>
              We differ from other companies by the highest quality service, highly personalized approach to 
              each customer, the way we do our business, and our will to serve our country by promoting it.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Value Propositions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Value 1 - Highest Quality Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Highest Quality Service</h3>
              <p className="text-gray-600 mb-4">
                The quality of your travel is our main concern. We take you to the best destinations in 
                Kyrgyzstan and keep our clients engaged every day with different activities. Tien Shan Journeys 
                offers you the best accommodation available, whether that is a hotel, homestay, or yurt.
              </p>
              <p className="text-gray-600 mb-4">
                We employ professional guides and provide the most comfortable vehicles with well-experienced drivers. 
                We pay special attention to details, from hand sanitizers to cold water and soft drinks during your trip.
              </p>
              <p className="text-gray-600">
                You do not have to worry about anything from the day you arrive in Kyrgyzstan to the day you leave. 
                Tien Shan Journeys ensures your trip is smooth and continuous.
              </p>
            </div>

            {/* Value 2 - Highly Personalized Approach */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Highly Personalized Approach</h3>
              <p className="text-gray-600 mb-4">
                Unlike big tour operators, our company works with a small number of clients and provides 
                highly personalized service. Each of our itineraries can be further adjusted to your tastes, 
                interests, and needs.
              </p>
              <p className="text-gray-600">
                We devote significant time to each client before, during, and after travel. We are very 
                flexible with our client requests.
              </p>
            </div>

            {/* Value 3 - Our Business Principles */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Business Principles</h3>
              <p className="text-gray-600 mb-4">
                Our reputation is what makes our business work. We want our clients to return to us and 
                recommend us to their friends and relatives. We want our partners to have no doubts about 
                how we work. Therefore, our performance is always professional.
              </p>
              <p className="text-gray-600">
                Tien Shan Journeys aims to operate for the long term; thus, we claim honesty as our best 
                policy, and it remains true at all times.
              </p>
            </div>

            {/* Value 4 - Promote Kyrgyzstan */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Promote Kyrgyzstan</h3>
              <p className="text-gray-600 mb-4">
                Many people in the West do not know that a country named Kyrgyzstan really exists. We want 
                to promote Kyrgyzstan worldwide. We want people from other parts of the world to visit 
                Kyrgyzstan, discover its unique culture, enjoy the lush natural beauty, and meet 
                our exceptionally hospitable people.
              </p>
              <p className="text-gray-600">
                We recognize that by doing our job well, we help not only ourselves but also help Kyrgyzstan 
                and its people gain recognition worldwide. We want people to move beyond stereotypes 
                when referring to Kyrgyzstan and understand that it is a modern, democratic state with an 
                open-minded society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder 1 - Adilet */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-80 relative">
                <Image 
                  src="/images/team/adilet-amalkanov.jpg"
                  alt="Adilet Amalkanov - Co-Founder of Tienshan Journeys"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Adilet Amalkanov</h3>
                <p className="text-blue-600 font-semibold mb-4">Co-Founder & COO</p>
                <p className="text-gray-600 leading-relaxed">
                  Adilet Amalkanov is a young entrepreneur. Shortly after receiving his diploma, he decided 
                  to found a company with Erkebulan. Having traveled extensively to the United States and 
                  earned a degree in Economics from American University, Adilet knows how to work with 
                  Western clients. Adilet loves history and geography, which is why he finds tourism very 
                  interesting and fulfilling for his passions.
                </p>
              </div>
            </div>

            {/* Founder 2 - Erkebulan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-blue-300 to-green-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Erkebulan Photo]
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Erkebulan Duishenaliev</h3>
                <p className="text-green-600 font-semibold mb-4">Co-Founder & COO</p>
                <p className="text-gray-600 leading-relaxed">
                  Erkebulan studied tourism and hotel management at Kyrgyz-Turkish Manas University in Bishkek. 
                  From 2013 to 2014, he studied International Tourism and Innovation at Telemark University 
                  in Norway. Erkebulan has extensive experience in tourism, having worked in various tourism 
                  companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Sub-pages */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Learn More About Us</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about/team" 
                  className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Meet Our Team</h3>
              <p className="text-gray-600">Get to know our founders and guides</p>
            </Link>

            <Link href="/about/why-us" 
                  className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Why Choose Us</h3>
              <p className="text-gray-600">Discover our values in detail</p>
            </Link>

            <Link href="/about/reviews" 
                  className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Reviews</h3>
              <p className="text-gray-600">Read what travelers say about us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Explore Kyrgyzstan with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us plan your perfect Central Asian adventure together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
              View Our Tours
            </Link>
            <Link href="/contact" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}