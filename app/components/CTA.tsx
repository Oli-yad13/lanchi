"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const CTA = () => {
  return (
    <section id="get-started" className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <HealthInsuranceBanner bannerText="Ready to Join" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning a family or seeking better maternal care, Lanchi is here for you—with dignity, affordability, and care you can trust.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.2 }
              }}
              className="inline-block bg-teal-500 text-white rounded-md px-8 py-4 text-lg font-semibold shadow hover:bg-teal-600 transition-colors duration-200"
            >
              Get Started Today
            </motion.a>
            <Link href="/contact" className="w-full sm:w-auto inline-block border border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg px-8 sm:px-10 py-4 text-lg font-semibold shadow-lg hover:bg-teal-50 dark:hover:bg-gray-800 transition text-center">
              Talk to a Lanchi Agent
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;