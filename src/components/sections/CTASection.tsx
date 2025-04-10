"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const CTASection = () => {
  const [mounted, setMounted] = useState(false);
  
  // Feste Positionen für die Partikel, um Hydration-Probleme zu vermeiden
  const particlePositions = [
    { top: '5.82%', left: '58.54%' },
    { top: '23.72%', left: '30.29%' },
    { top: '15.63%', left: '71.01%' },
    { top: '63.32%', left: '68.49%' },
    { top: '37.95%', left: '38.90%' },
    { top: '86.74%', left: '39.86%' },
    { top: '63.10%', left: '48.41%' },
    { top: '89.52%', left: '39.19%' },
    { top: '29.59%', left: '51.30%' },
    { top: '30.25%', left: '26.33%' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background mit rotem Gradient (passend zum SafeSport-Thema) */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-900 transform -skew-y-3" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              SafeSport: Gemeinsam gegen sexualisierte Gewalt
            </h2>
            
            <p className="text-lg md:text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Unterstützen Sie unsere Kampagne für einen sicheren Sport. 
              Gemeinsam können wir Betroffene schützen und Sensibilisierung fördern.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-red-700 hover:bg-red-50"
              >
                Ressourcen entdecken
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Unterstützen
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animierte Partikel mit festen Positionen */}
      <div className="absolute inset-0 z-0">
        {mounted && particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-white/20"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              y: [0, -100],
              x: [0, (i % 5) * 10 - 20],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTASection;
