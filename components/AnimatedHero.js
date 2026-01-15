'use client';

import { motion } from 'framer-motion';

export default function AnimatedHero() {
  // Animation variants for reusability
  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  // Subtle floating animation (continuous, after entrance)
  const floatAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      className="relative h-96 flex items-end justify-center pb-[45%] md:pb-[23%]"
      style={{
        backgroundImage: "url('/images/hero/hero-yurt-night.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 99%'
      }}
    >
      {/* Logo Icon - Slides from Left */}
      <motion.div 
        className="absolute top-4 left-5 md:top-5 md:left-9 z-10"
        variants={fadeSlideLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileInView={floatAnimation}
      >
        <img 
          src="/images/logo/logo_only.png" 
          alt="Tien Shan Journeys" 
          className="w-35 md:w-63 h-auto"
          style={{ filter: 'brightness(2)' }}
        />
      </motion.div>

      {/* Logo Name - Slides from Right */}
      <motion.div 
        className="absolute top-15 left-0 md:top-25 md:left-1 z-10"
        variants={fadeSlideRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileInView={floatAnimation}
      >
        <img 
          src="/images/logo/logo_name_only.png" 
          alt="Tien Shan Journeys" 
          className="w-45 md:w-79 h-auto"
          style={{ filter: 'brightness(3)' }}
        />
      </motion.div>

      {/* Tagline Container - Slides from Left */}
      <motion.div 
        className="absolute top-20 right-4 md:top-14 md:right-8 z-10 text-white"
        variants={fadeSlideLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
      >
        <div 
          className="px-3 py-1 rounded text-center" 
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))' }}
        >
          {/* Tagline Text - Slides from Bottom */}
          <motion.p 
            className="text-xs md:text-base font-light tracking-wider uppercase"
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            Bespoke Travel in Kyrgyzstan and Central Asia
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}