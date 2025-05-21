"use client";
import { motion } from "framer-motion";

export const WhoIsFor = () => {
  const targetGroups = [
    "Women of reproductive age",
    "Expectant mothers",
    "Iddir groups and families committed to gender equity"
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎯 Who Is Lanchi For?
            </h2>
            <div className="space-y-4">
              {targetGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">{group}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-teal-50 rounded-xl p-8 border border-teal-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌟 Why Lanchi Stands Out
            </h2>
            <p className="text-gray-600 mb-6">
              Unlike typical insurance, Lanchi delivers end-to-end women&apos;s health support—from fertility to postpartum care—under one affordable plan.
            </p>
            <p className="text-gray-600 mb-6">
              It reflects HuluCares&apos; award-winning approach to gender-inclusive innovation and was honored with the Best African Gender-Based Product Award by BimaLab Africa.
            </p>
            <div className="bg-white p-5 rounded-lg border border-teal-100">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-gray-700 italic">
                  &quot;Lanchi represents a breakthrough in women&apos;s health insurance in Ethiopia, addressing critical gaps in maternal care access.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;