"use client";
import React from 'react';
import { motion } from "framer-motion";

export const HealthInsuranceBanner = ({ bannerText, className }: { bannerText: string, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full text-center pt-20 pb-4 bg-transparent z-30 ${className}`}
    >
      <span className="inline-block px-3 py-1 text-xs sm:text-sm uppercase tracking-wider font-medium bg-gray-800 text-white rounded-md">
        {bannerText}
      </span>
    </motion.div>
  );
};

export default HealthInsuranceBanner; 