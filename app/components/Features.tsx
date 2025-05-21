"use client";
import { motion } from "framer-motion";

const features = [
  { icon: "🌸", title: "Pre-Pregnancy Care", desc: "Fertility consultations, health screenings, and planning tools for a healthy start to motherhood." },
  { icon: "🤰", title: "Antenatal Services", desc: "Regular checkups, lab tests, ultrasounds, and nutrition counseling ensure safe, informed pregnancies." },
  { icon: "👶", title: "Safe Delivery Support", desc: "Hospital or clinic delivery, skilled birth attendants, and emergency procedures like C-sections." },
  { icon: "🍼", title: "Postnatal & Newborn Care", desc: "Crucial post-birth support—including vaccinations and newborn checkups—to protect both mother and child." },
  { icon: "💸", title: "Affordable & Accessible", desc: "Flexible payment plans and community-based access for rural women." },
];

export const Features = () => (
  <section id="features" className="bg-white py-20 px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">✅ What Lanchi Covers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-50 rounded-xl p-8 shadow-sm text-left"
        >
          <div className="text-5xl mb-4">{f.icon}</div>
          <h3 className="font-semibold text-xl mb-3 text-gray-800">{f.title}</h3>
          <p className="text-gray-600 text-base">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features; 