import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Hotel } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Hotel className="w-7 h-7 text-yellow-500" />
              <span className="text-xl font-serif font-bold text-white">
                LuxStay
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Experience unparalleled luxury and comfort at our premium hotel destination. Where every stay becomes an unforgettable memory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Events', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-yellow-500" size={20} />
                <span className="text-gray-300">123 Luxury Avenue, Grand City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-yellow-500" size={20} />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-yellow-500" size={20} />
                <a href="mailto:info@luxstay.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  info@luxstay.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-purple-900 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-purple-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LuxStay. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;