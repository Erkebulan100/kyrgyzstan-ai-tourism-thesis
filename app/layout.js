import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Central Asia Tours | Tien Shan Adventures | Kyrgyzstan Travel | Silk Road Discovery",
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
      >
        {children}
      </body>
    </html>
  );
}
