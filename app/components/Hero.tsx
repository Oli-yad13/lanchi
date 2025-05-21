"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const Hero = () => {
  return (
    <AuroraBackground className="relative min-h-screen flex flex-col items-start justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Removed duplicated logo */}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto text-left mt-8 sm:mt-12 z-10"
      >
        <div className="text-left">
          <HealthInsuranceBanner bannerText="Health Insurance" />
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
          <span className="text-teal-500 font-extrabold">Lanchi:</span> Health Insurance Designed for Ethiopian Women
        </h1>
        
        <div className="w-16 h-1 bg-teal-500 mb-6 sm:mb-8"></div>
        
        <p className="text-lg sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 font-medium">
          Empowering Women. Transforming Communities.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Lanchi is a groundbreaking women&apos;s health insurance solution built by HuluCares to meet the unique healthcare needs of Ethiopian women—especially in underserved rural areas. From fertility care to safe delivery and postpartum support, Lanchi provides full-spectrum coverage at an affordable cost.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Designed with community in mind and driven by our commitment to gender equity, Lanchi helps women thrive at every life stage while building healthier families and stronger communities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#get-started"
            className="inline-block bg-teal-500 text-white rounded-md px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold shadow hover:bg-teal-600 transition"
          >
            Get Started Today
          </motion.a>
          
          {/* Removed "Talk to an Agent" button */}
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;