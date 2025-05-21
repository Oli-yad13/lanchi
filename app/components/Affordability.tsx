"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const Affordability = () => {
  return (
    <section id="affordability" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <HealthInsuranceBanner bannerText="Affordable & Accessible" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Affordable & Accessible
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve designed Lanchi to be accessible to all women, regardless of economic status.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-teal-100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Flexible Payment Plans</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Our partnership with VisionFund makes Lanchi financially accessible through low-cost, subsidized premiums.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-teal-100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Community-Based Access</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Healthcare services are delivered through local clinics and mobile health units, reducing barriers for rural women.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Affordability;