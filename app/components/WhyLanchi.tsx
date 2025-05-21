"use client";
import { motion } from "framer-motion";

export const WhyLanchi = () => (
  <section id="why-stand-out" className="bg-white py-20 px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">🌟 Why Lanchi Stands Out</h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-10 shadow-sm text-left"
    >
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Unlike typical insurance, Lanchi delivers end-to-end women&apos;s health support—from fertility to postpartum care—under one affordable plan.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        It reflects HuluCares&apos; award-winning approach to gender-inclusive innovation and was honored with the <span className="font-semibold text-teal-600">Best African Gender-Based Product Award</span> by BimaLab Africa.
      </p>
    </motion.div>
  </section>
);

export default WhyLanchi; 