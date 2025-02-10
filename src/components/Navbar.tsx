
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-sm z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">RxOcean</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Book Now
        </button>

        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;