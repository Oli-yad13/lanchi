"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";

export const TargetAudience = () => {
  const audiences = [
    {
      title: "Women of reproductive age",
      description: "Access comprehensive health coverage tailored to your needs at every stage of life."
    },
    {
      title: "Expectant mothers",
      description: "Get the support and care you need for a safe and healthy pregnancy journey."
    },
    {
      title: "Iddir groups and families",
      description: "Join a community committed to gender equity and better healthcare access."
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="target-audience" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto">
        <HealthInsuranceBanner bannerText="Who Is For Us" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Who Is Lanchi For?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Lanchi is designed to support women at every stage of their reproductive journey.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg border border-teal-100 hover:border-teal-200 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;