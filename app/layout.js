import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Search, Facebook, Instagram } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Central Asia Tours | Tien Shan Journeys | Kyrgyzstan Travel | Silk Road Discovery",
  description: "Discover Central Asia's hidden gem - Kyrgyzstan. Experience authentic Tien Shan mountain adventures, nomadic culture, and Silk Road heritage. Book your Central Asian journey today with local experts.",
  keywords: [
    "Central Asia tours",
    "Tien Shan trekking", 
    "Kyrgyzstan travel",
    "Silk Road travel",
    "Central Asia adventure",
    "Mountain tours Central Asia",
    "Nomadic culture tours",
    "Central Asian highlands",
    "Song Kul lake",
    "Ala Archa national park",
    "Bishkek tours",
    "authentic travel experiences",
    "budget adventure travel",
    "undiscovered destinations"
  ].join(", "),
  authors: [{ name: "Tienshan Journeys" }],
  creator: "Tienshan Journeys",
  publisher: "Tienshan Journeys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tienshanjourneys.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Central Asia Tours | Tien Shan Adventures | Kyrgyzstan Travel",
    description: "Experience the beauty of Central Asia. Discover pristine Tien Shan mountains, authentic nomadic culture, and legendary Silk Road heritage in Kyrgyzstan.",
    url: 'https://tienshanjourneys.com',
    siteName: 'Tienshan Journeys',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Central Asia Tien Shan Mountains Kyrgyzstan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Central Asia Tours | Tien Shan Adventures | Kyrgyzstan Travel",
    description: "Discover Central Asia's hidden gem - authentic mountain adventures in Kyrgyzstan",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Header Component - Black background, white text (preserved from old site)
function Header() {
  return (
    <header className="bg-black text-white w-full fixed top-0 left-0 z-50">
      {/* Social Media & Language Bar - Constrained Container */}
      <div className="border-b border-gray-800 py-2">
        <div className="w-full px-4 md:px-10">
          
          <div className="flex justify-end items-center">
            <div className="flex items-center gap-2 text-sm">
              <a href="#" className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1">
                <span>English</span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-1">
                <span>Русский</span>
              </a>
            </div>
            {/* Social Media Icons - Left Side */}
            <div className="flex items-center gap-2 ml-10">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 bg-[#3b5998] rounded flex items-center justify-center">
                  <span className="text-white text-base font-bold">f</span>
                </div>
              </a>
              {/* Pinterest */}
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
                 className="hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 bg-[#bd081c] rounded flex items-center justify-center">
                  <span className="text-white text-base font-bold">P</span>
                </div>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/tienshanjourneys/?utm_source=qr&igsh=MWxqNnF2ejRnbGJpZQ%3D%3D#" target="_blank" rel="noopener noreferrer"
                 className="hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 rounded flex items-center justify-center"
                     style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>
            
            {/* Language Selector - Right Side */}
            
          </div>
        </div>
      </div>

      {/* Main Header - Logo & Navigation - Constrained Container */}
     
<div className="py-0">
  <div className="w-full px-4 md:px-10">
    {/* Logo and Navigation - Side by Side */}
    <div className="flex items-center justify-between">
      {/* Logo Section - LEFT SIDE */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/logo/logo_only.png" 
          alt="Tien Shan Journeys - Central Asia Tours" 
          width={120}
          height={40}
          className="md:w-[180px] md:h-[60px]"
          priority
        />
      </Link>

      {/* Navigation Menu - RIGHT SIDE */}
      <nav className="flex items-center space-x-2 md:space-x-8 text-xs md:text-base">
        <Link href="/about" className="hover:text-blue-400 hover:underline text-center transition-colors">
          About us
        </Link>
        <Link href="/destinations" className="hover:text-blue-400 hover:underline text-center transition-colors">
          Destinations
        </Link>
        <Link href="/tours" className="hover:text-blue-400 hover:underline text-center transition-colors">
          Itineraries
        </Link>
        <Link href="/contact" className="hover:text-blue-400 hover:underline text-center transition-colors">
          Contact us
        </Link>
        <button className="hover:text-blue-400 transition-colors" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
      </nav>
    </div>
  </div>
</div>
    </header>
  );
}

// Footer Component - Exact match from old website (Image 2)
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info - Left Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tien Shan Journeys</h3>
            <p className="text-gray-400">
              Bespoke travel experiences in Kyrgyzstan and Central Asia. 
              Discover the beauty of the Tien Shan mountains and nomadic culture.
            </p>
          </div>

          {/* Quick Links - Center Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/destinations" className="block text-gray-400 hover:text-white transition-colors">
                Destinations
              </Link>
              <Link href="/tours" className="block text-gray-400 hover:text-white transition-colors">
                Tours
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information - Right Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-1">
              <p>Tien Shan Journeys, LLC</p>
              <p>7, Ak-Cholmok St., Bishkek, 720077</p>
              <p>Kyrgyz Republic</p>
              <p className="mt-3">Phone: +996 550 31 33 55</p>
              <p>International: +49 1578 0797051</p>
              <p className="mt-3">
                E-Mail: <a href="mailto:info@tienshanjourneys.com" 
                   className="hover:text-blue-400 transition-colors">
                  info@tienshanjourneys.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright - Exactly as old website */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© Bishkek 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="KG" />
        <meta name="geo.placename" content="Kyrgyzstan" />
        <meta name="geo.position" content="41.2044;74.7661" />
        <meta name="ICBM" content="41.2044, 74.7661" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}