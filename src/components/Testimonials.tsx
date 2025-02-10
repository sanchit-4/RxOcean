import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import viren from '../../utils/images/VIREN.jpg';

const transformations = [
  {
    name: "Viren",
    achievement: "Lost 25 kgs in 6 months",
    image: viren,
  },
  {
    name: "John Davis",
    achievement: "Reversed Type 2 Diabetes",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
  },
  {
    name: "Emma Wilson",
    achievement: "Controlled PCOD naturally",
    image: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Brown",
    achievement: "Reduced blood pressure",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real Results, Real Transformations</p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap pb-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...transformations, ...transformations].map((transformation, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={transformation.image}
                  alt={`${transformation.name}'s transformation`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{transformation.name}</h3>
                  <p className="mt-2">{transformation.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;