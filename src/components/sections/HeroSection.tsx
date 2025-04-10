"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-defined positions for the gradient orbs to prevent hydration mismatch
  const orbPositions = [
    { top: '25%', left: '65%', opacity: 0.12 },
    { top: '65%', left: '5%', opacity: 0.14 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient - Rötlich basierend auf dem CMP-SPORT Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-900 opacity-90" />
      
      {/* Reduzierte Hintergrundmuster für bessere Performance */}
      <div className="absolute inset-0">
        {mounted && orbPositions.map((position, i) => (
          <motion.div 
            key={i} 
            className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-red-400 to-red-600"
            style={{
              top: position.top,
              left: position.left,
              opacity: position.opacity,
              filter: 'blur(70px)',
            }}
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Organisation Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white text-red-800 rounded-full text-sm font-bold mb-6">
              Hochschule Bremerhaven | CMP-SPORT
            </span>
          </motion.div>

          {/* Hero Title - vereinfachte Animation der gesamten Textzeile statt einzelner Buchstaben */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Sexualisierte Gewalt im Sport
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Eine Kampagne zur Sensibilisierung und Prävention. 
            Gemeinsam setzen wir uns für einen sicheren Sport ein 
            und schaffen Bewusstsein für dieses wichtige Thema.
          </motion.p>
          
          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8"
          >
            <blockquote className="italic text-2xl text-white border-l-4 border-white pl-4">
              &ldquo;Tue Gutes und rede darüber!&rdquo;
            </blockquote>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-red-800 hover:bg-gray-100 px-8"
            >
              Mehr erfahren
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8"
            >
              Partner & Kooperationen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* SafeSport Label */}
      <motion.div
        className="absolute bottom-10 right-10 bg-white px-4 py-2 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <span className="font-bold text-red-800 text-sm">SAFESPORT</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
