"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import Image from "next/image";

export const Hero = () => {
  return (
    <AuroraBackground className="relative min-h-screen flex flex-col items-start justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-left z-10 lg:pr-12"
        >
          <div className="text-left">
            <HealthInsuranceBanner bannerText="Health Insurance" className="!text-left" />
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
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full aspect-square lg:aspect-auto lg:h-[850px] flex items-center justify-center p-8 lg:ml-12"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <Image
              src="/hero-image.jpg"
              alt="Ethiopian women healthcare"
              fill
              className="object-cover"
              priority
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;