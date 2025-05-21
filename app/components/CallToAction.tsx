"use client";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section id="get-started" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">💬 Ready to Join?</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Whether you&apos;re planning a family or seeking better maternal care, Lanchi is here for you—with dignity, affordability, and care you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact-form"
              className="inline-block bg-teal-500 text-white rounded-lg px-10 py-4 text-lg font-semibold shadow hover:bg-teal-600 transition"
            >
              Get Started Today
            </motion.a>
            
            <p className="text-gray-600 text-lg">Or talk to a Lanchi Agent in your community.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;