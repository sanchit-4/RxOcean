
import { motion } from 'framer-motion';

const PreciseHealth = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Leave Your Worries At The<br />Door And Enjoy A Healthier,<br />More Precise Health.
          </h2>
          <p className="text-gray-600 mb-8">
            We care about your health and well-being. Our team of experts is dedicated to providing you with personalized care that meets your unique needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Book an Appointment
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80"
            alt="Healthy Food"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PreciseHealth;