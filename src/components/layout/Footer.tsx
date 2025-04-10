"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Description */}
          <motion.div 
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Uni Projekte
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              SafeSport: Eine Initiative gegen sexualisierte Gewalt im Sport.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-red-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/projekte" className="text-gray-400 hover:text-red-400 transition-colors">
                  Projekte
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-red-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:safesport@uni-projekte.de" className="hover:text-red-400 transition-colors">
                  safesport@uni-projekte.de
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Adresse:</span>
                <span>Hochschule Bremerhaven</span>
                <span className="block">27568 Bremerhaven</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & SafeSport Badge */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4">SafeSport News</h3>
            <p className="text-gray-400 text-sm mb-4">
              Bleiben Sie informiert über unsere Kampagnen und Ressourcen.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ihre Email" 
                  className="py-2 px-3 rounded-l-md bg-gray-800 text-white border-gray-700 focus:outline-none border w-full"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex items-center justify-start">
                <span className="bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-md mr-2">
                  SAFESPORT
                </span>
                <span className="text-xs text-gray-400">Offizieller Partner</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p> {currentYear} SafeSport Initiative | Alle Rechte vorbehalten.</p>
          <p className="mt-2">Entwickelt von <span className="text-red-400">Kadir Diego Padin Rodriguez</span></p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-red-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-red-400 transition-colors">Impressum</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
