
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">RxOcean</h3>
            <p className="text-gray-600 mb-6">
              Providing quality healthcare services for a healthier tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Doctors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Nutrition</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Wellness</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Prevention</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 RxOcean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;