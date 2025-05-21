"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Enroll Easily Through Hululddir",
      description: "Lanchi integrates with traditional Iddir systems, making enrollment simple and community-friendly."
    },
    {
      title: "Get Personalized Support",
      description: "Our trained field agents help women understand their benefits and access care smoothly."
    },
    {
      title: "Enhanced by Partnerships",
      description: "We collaborate with maternal health NGOs for wider reach and higher quality service."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <HealthInsuranceBanner bannerText="How It Works" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We've designed a simple process to help you get the care you need, when you need it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-teal-100 flex flex-col items-center text-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;