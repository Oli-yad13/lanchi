"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const WhyStandOut = () => {
  return (
    <section id="why-stand-out" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <HealthInsuranceBanner bannerText="Why Lanchi Stands Out" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Lanchi Stands Out
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-teal-100 max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlike typical insurance, Lanchi delivers end-to-end women&apos;s health support—from fertility to postpartum care—under one affordable plan. It reflects HuluCares&apos; award-winning approach to gender-inclusive innovation and was honored with the Best African Gender-Based Product Award by BimaLab Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyStandOut;