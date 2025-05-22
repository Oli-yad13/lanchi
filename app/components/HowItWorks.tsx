"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import { useEffect, useState, useRef } from 'react';

export const HowItWorks = () => {
  const steps = [
    {
      title: "Enroll Easily Through Hululddir",
      description: "Lanchi integrates with traditional Iddir systems, making enrollment simple and community-friendly.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: "Get Personalized Support",
      description: "Our trained field agents help women understand their benefits and access care smoothly.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Enhanced by Partnerships",
      description: "We collaborate with maternal health NGOs for wider reach and higher quality service.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  const [hasMounted, setHasMounted] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-0 sm:px-0 md:px-0 lg:px-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative px-4 sm:px-6 md:px-8 lg:px-12 mb-12 sm:mb-14 md:mb-16">
        <HealthInsuranceBanner bannerText="How It Works" className="text-xl sm:text-2xl md:text-3xl" />
        <motion.div
          initial={hasMounted ? { opacity: 0, y: 20 } : {}}
          whileInView={hasMounted ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            We've designed a simple process to help you get the care you need, when you need it.
          </p>
        </motion.div>
      </div>

      {/* Video Mockup - Moved outside the max-width div */}
      <motion.div
        ref={videoRef}
        className="mt-0 mb-12 sm:mb-14 md:mb-16 w-full px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{
          scale: isVideoInView ? 1 : 0.8,
          opacity: isVideoInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      >
        {hasMounted && (
          <video
            className="w-full h-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            controls
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/Video upscale - Topaz Labs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={hasMounted ? { opacity: 0, y: 20 } : {}}
              whileInView={hasMounted ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-teal-100 flex flex-col items-center text-center hover:border-teal-300 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
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