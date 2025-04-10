"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Menu Items
const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'Projekte', path: '/projekte' },
  { label: 'Kontakt', path: '/kontakt' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Uni Projekte
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-medium text-sm transition-colors hover:text-red-500 ${
                  pathname === item.path 
                    ? 'text-red-500 after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-red-500'
                    : 'text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-700 to-red-500 hover:opacity-90"
            >
              Kontakt aufnehmen
            </Button>
          </nav>

          {/* Mobile Navigation (Burger Menu) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Menu"
                className="relative z-50 h-10 w-10 p-0"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <span 
                    className={`block h-0.5 w-full bg-gray-200 transition-all duration-300 ease-out ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                  />
                  <span 
                    className={`block h-0.5 w-full bg-gray-200 my-0.5 transition-opacity duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span 
                    className={`block h-0.5 w-full bg-gray-200 transition-all duration-300 ease-out ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                  />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-black p-0">
              <div className="flex flex-col h-full p-6">
                <div className="mt-16 flex flex-col space-y-6">
                  <AnimatePresence>
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 text-xl font-medium ${
                            pathname === item.path ? 'text-red-500' : 'text-gray-200'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-red-700 to-red-500 hover:opacity-90"
                      onClick={() => setIsOpen(false)}
                    >
                      Kontakt aufnehmen
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
