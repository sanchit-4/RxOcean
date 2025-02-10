
import { motion } from 'framer-motion';

const articles = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    title: "Understanding Modern Healthcare",
    category: "Health",
    date: "Mar 15, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80",
    title: "Preventive Care Importance",
    category: "Wellness",
    date: "Mar 14, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    title: "Nutrition Tips for Health",
    category: "Nutrition",
    date: "Mar 13, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?auto=format&fit=crop&q=80",
    title: "Latest Medical Technologies",
    category: "Technology",
    date: "Mar 12, 2024",
  },
];

const News = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">News & Articles</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 text-sm">{article.date}</p>
                <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;