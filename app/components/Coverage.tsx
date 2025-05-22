"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import Image from 'next/image';

export const Coverage = () => {
  const coverageItems = [
    {
      title: "Pre-Pregnancy Care",
      description: "Get access to fertility consultations, health screenings, and planning tools for a healthy start to motherhood.",
      image: '/placeholder-prenatal.jpg',
    },
    {
      title: "Antenatal Services",
      description: "Regular checkups, lab tests, ultrasounds, and nutrition counseling ensure safe, informed pregnancies.",
      image: '/placeholder-antenatal.jpg',
    },
    {
      title: "Safe Delivery Support",
      description: "We cover hospital or clinic delivery, skilled birth attendants, and emergency procedures like C-sections.",
      image: '/placeholder-delivery.jpg',
    },
    {
      title: "Postnatal & Newborn Care",
      description: "Lanchi provides crucial post-birth support—including vaccinations and newborn checkups—to protect both mother and child.",
      image: '/placeholder-newborn.jpg',
    },
  ];

  const duplicatedCoverageItems = [...coverageItems, ...coverageItems, ...coverageItems];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto w-full relative">
        <HealthInsuranceBanner bannerText="What We Cover" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            What Lanchi Covers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From fertility care to safe delivery and postpartum support, Lanchi provides full-spectrum coverage at an affordable cost.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 sm:gap-8 animate-carousel-slide"
        >
          {duplicatedCoverageItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              className="bg-white rounded-xl p-8 sm:p-10 shadow-lg border border-teal-100 hover:border-teal-200 transition-all duration-300 flex flex-col lg:flex-row items-center gap-6 flex-shrink-0 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] h-[450px]"
            >
              <div className="relative w-full lg:w-1/3 h-72 lg:h-auto aspect-video lg:aspect-square rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;