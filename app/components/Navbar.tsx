"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define the getContactButtonSize function
  const getContactButtonSize = () => {
    if (windowWidth < 640) {
      return { width: '120px', height: '40px' };
    } else if (windowWidth < 768) {
      return { width: '140px', height: '44px' };
    } else {
      return { width: '160px', height: '48px' };
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed z-50 w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo at top left */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Lanchi Logo"
            width={150} // Base width, will be responsive via CSS
            height={50} // Base height, will be responsive via CSS
            priority
            className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto"
          />
        </Link>

        <div className="flex items-center justify-end">
          {/* Mobile menu button - only visible on small screens */}
          <button
            className="md:hidden bg-white/10 backdrop-blur-xl rounded-lg p-2 sm:p-3 border border-white/20 mr-2 sm:mr-3 shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Navigation Menu with enhanced frosted glass effect */}
          <div
            className={`flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-xl rounded-lg border border-zinc-800/50 transition-all duration-300 shadow-lg ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
            } absolute md:relative top-16 sm:top-20 right-4 md:top-0 md:right-0 w-[calc(100%-2rem)] md:w-auto`}
          >
            <div className="flex flex-col md:flex-row items-center p-2 sm:p-3 lg:p-4 w-full md:w-auto">
              <Link href="#features" className="relative group px-3 py-2 text-sm sm:text-base text-white font-medium flex items-center gap-1.5 bg-zinc-800/80 rounded-md hover:bg-zinc-800/90 transition-colors duration-500 w-full md:w-auto text-center mb-2 md:mb-0 shadow-md border border-zinc-900">
                <span className="font-medium">WHAT WE COVER</span>
              </Link>

              <Link href="#why-stand-out" className="px-3 py-2 text-sm sm:text-base text-white font-medium bg-zinc-800/80 rounded-md mx-0 md:mx-2 lg:mx-3 hover:bg-zinc-800/90 transition-colors duration-500 w-full md:w-auto text-center mb-2 md:mb-0 shadow-md border border-zinc-900">
                WHY STAND OUT
              </Link>

              <Link href="#target-audience" className="px-3 py-2 text-sm sm:text-base text-white font-medium bg-zinc-800/80 rounded-md hover:bg-zinc-800/90 transition-colors duration-500 w-full md:w-auto text-center mb-2 md:mb-0 shadow-md border border-zinc-900">
                WHO IS FOR US
              </Link>

              {/* Divider line - horizontal for mobile, vertical for desktop */}
              <div className="h-px w-full md:h-8 md:w-px bg-zinc-700 my-2 md:my-0 md:mx-2 lg:mx-4 border-r border-zinc-900"></div>

              <Link
                href="/contact"
                className="relative overflow-hidden w-full md:w-auto mb-2 md:mb-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div 
                  className={`flex items-center justify-center rounded-full transition-colors duration-700 shadow-md border ${isHovered ? 'bg-teal-500 border-teal-600' : 'bg-zinc-800/80 border-zinc-900'} relative`} 
                  style={getContactButtonSize()}
                >
                  <motion.div 
                    className={`rounded-full ${windowWidth < 640 ? 'w-8 h-8' : windowWidth < 768 ? 'w-9 h-9' : 'w-10 h-10'} flex items-center justify-center transition-colors duration-700 border ${isHovered ? 'bg-black border-black' : 'bg-teal-500 border-teal-600'} absolute left-1`}
                    initial={{ x: 0 }}
                    animate={{ x: isHovered ? (windowWidth < 640 ? 70 : windowWidth < 768 ? 90 : 110) : 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
                  >
                    <svg className={`${windowWidth < 640 ? 'w-3.5 h-3.5' : windowWidth < 768 ? 'w-4 h-4' : 'w-5 h-5'} transition-colors duration-700 text-white`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <motion.span 
                    className={`font-medium uppercase ${windowWidth < 640 ? 'text-xs' : windowWidth < 768 ? 'text-sm' : 'text-base'} ${isHovered ? 'text-black' : 'text-white'} absolute`}
                    initial={{ x: 0 }}
                    animate={{ 
                      x: isHovered ? 
                        (windowWidth < 640 ? -30 : windowWidth < 768 ? -35 : -40) : 
                        0 
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
                  >
                    CONTACT
                  </motion.span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;