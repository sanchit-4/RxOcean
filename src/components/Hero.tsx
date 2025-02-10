'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-12 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Welcome to a Healthier You with Dt. Niti Munjal
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Transform your health with personalized, science-backed nutrition plans designed to help you reverse lifestyle diseases and achieve long-term wellness. With over 15 years of experience, I have helped hundreds of clients overcome diabetes, high blood pressure, PCOD, and obesity—all through the power of natural, wholesome food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Book a Consultation
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5" />
              <span>Contact Now</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img
            src=""
            alt="Nutritionist Consultation"
            className="rounded-2xl shadow-xl w-full"
          />
          <div className="absolute inset-0 bg-blue-600/10 rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;