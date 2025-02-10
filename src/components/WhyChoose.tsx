import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Hundreds of success stories – Clients have reversed diabetes, high BP, obesity, and PCOD",
  "100% Natural Food-Based Approach – No meal replacements or weight-loss drugs",
  "24x7 Client Support – I'm always connected to solve any dietary concerns instantly",
  "Global Reach – Consultations available across India, US, Canada, Australia, Nigeria & Dubai",
  "Specialized in Disease Management – Personalized diet plans for diabetes, hypertension, metabolic disorders, PCOD, and post-surgical recovery",
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
            alt="Nutritionist Consultation"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Meet Dt. Niti Munjal – A Pioneer in Online Nutrition Counseling
          </h2>
          <p className="text-gray-600 mb-8">
            As a Certified Nutritionist & Diabetes Educator, I have been at the forefront of online diet planning since 2009. My goal is to empower individuals to take charge of their health through sustainable dietary changes.
          </p>
          <h3 className="text-xl font-semibold mb-4">Why Choose My Program?</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;