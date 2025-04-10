"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // GSAP animation for text highlighting
  useEffect(() => {
    if (isInView && sectionRef.current) {
      const highlights = sectionRef.current.querySelectorAll('.highlight');
      
      gsap.fromTo(
        highlights,
        { backgroundSize: '0% 40%' },
        {
          backgroundSize: '100% 40%',
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 bg-black relative" id="about">
      <div className="container mx-auto px-4 relative" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image collage */}
          <motion.div
            className="relative h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-[70%] h-[65%] bg-red-900/20 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('/images/placeholder-1.jpg')] bg-cover bg-center p-2">
                {/* Note: You'll need to add actual image files to the public/images folder */}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[65%] bg-red-900/20 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-[url('/images/placeholder-2.jpg')] bg-cover bg-center p-2">
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] bg-red-900/20 rounded-lg overflow-hidden shadow-2xl border-4 border-red-500/30">
              <div className="w-full h-full bg-[url('/images/placeholder-3.jpg')] bg-cover bg-center p-2">
              </div>
            </div>
          </motion.div>

          {/* Right side: Content */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                  Über das Projekt
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-gray-100 leading-tight"
              >
                Gemeinsam für <span className="highlight bg-gradient-to-r from-red-500/40 to-red-500/40 bg-no-repeat bg-bottom">SafeSport</span> und <span className="highlight bg-gradient-to-r from-red-500/40 to-red-500/40 bg-no-repeat bg-bottom">Prävention</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-400 text-lg">
                Sexualisierte Gewalt im Sport ist ein oft verschwiegenes, aber ernstes Problem. Unser Projekt ist eine Kooperation zwischen der Hochschule Bremerhaven und CMP-SPORT mit dem Ziel, das Bewusstsein zu schärfen, Strukturen zu verändern und sichere Umgebungen im Sport zu schaffen.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Prävention</h3>
                    <p className="text-gray-400">Vorbeugung durch Aufklärung, Bildung und strukturelle Maßnahmen.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Sensibilisierung</h3>
                    <p className="text-gray-400">Bewusstseinsbildung für Verantwortliche, Trainer und Sportler.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Schutz & Intervention</h3>
                    <p className="text-gray-400">Maßnahmen zum Schutz von Betroffenen und klare Interventionswege.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">Netzwerkarbeit</h3>
                    <p className="text-gray-400">Vernetzung von Sportverbänden, Institutionen und Beratungsstellen.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 flex gap-4">
                <Button className="bg-gradient-to-r from-red-700 to-red-500 hover:opacity-90 text-white">
                  Ressourcen
                </Button>
                <Button variant="outline" className="border-red-500 text-red-700 hover:bg-red-900/30">
                  Partnerorganisationen
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
