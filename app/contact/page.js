import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Contact Us | Tienshan Journeys | Plan Your Kyrgyzstan Adventure",
  description: "Get in touch with Tienshan Journeys. Contact us for tour inquiries, custom itineraries, or questions about traveling to Kyrgyzstan and Central Asia.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Let us plan your perfect Central Asian adventure
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <a href="mailto:info@tienshanjourneys.com" 
                 className="text-blue-600 hover:text-blue-700 font-semibold">
                info@tienshanjourneys.com
              </a>
              <p className="text-sm text-gray-500 mt-4">We reply within 24 hours</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our experts</p>
              <a href="tel:+996550313355" 
                 className="text-green-600 hover:text-green-700 font-semibold block">
                +996 550 31 33 55
              </a>
              <a href="tel:+4915780797051" 
                 className="text-green-600 hover:text-green-700 font-semibold block mt-2">
                +49 1578 0797051
              </a>
              <p className="text-sm text-gray-500 mt-4">Mon-Sat: 9AM - 6PM (GMT+6)</p>
            </div>

            {/* Office Card */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7+Ak-Cholmok+St+Bishkek+Kyrgyzstan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come to our office</p>
              <p className="text-gray-700 font-semibold">
                7, Ak-Cholmok St.<br />
                Bishkek, 720077<br />
                Kyrgyz Republic
              </p>
              <p className="text-sm text-gray-500 mt-4">By appointment</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Have questions about tours or planning your trip? Fill out the form below.
            </p>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-lg">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone & Subject Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="tour-inquiry">Tour Inquiry</option>
                  <option value="custom-itinerary">Custom Itinerary</option>
                  <option value="booking">Booking Question</option>
                  <option value="general">General Question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tell us about your travel plans, questions, or special requests..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              We typically respond within 24 hours
            </p>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Our Office</h2>
          <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0261947892197!2d74.58947431549395!3d42.87461200915286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc9c37bf51%3A0x4f0579c5e8f7a8c5!2sAk-Cholmok%20St%2C%20Bishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Contact Tienshan Journeys?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                We respond to all inquiries within 24 hours, usually much faster
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Get personalized recommendations from local Kyrgyzstan experts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                No obligation quotes and travel planning assistance at no cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prefer Another Way to Connect?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://wa.me/996550313355" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              WhatsApp Us
            </a>
            
            <Link href="/faq" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              View FAQ
            </Link>
          </div>

          <p className="text-blue-100 text-lg">
            Follow us on social media for travel inspiration and updates
          </p>
        </div>
      </section>
    </main>
  );
}