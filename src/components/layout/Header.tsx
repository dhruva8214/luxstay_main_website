import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Hotel, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthButtons from '../auth/AuthButtons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    initial: { 
      backgroundColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    },
    scrolled: { 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        when: 'beforeChildren'
      }
    }
  };

  const navItemVariants = {
    closed: { 
      opacity: 0,
      y: 20
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      variants={headerVariants}
      animate={isScrolled ? 'scrolled' : 'initial'}
      initial="initial"
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Hotel className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-serif font-bold text-purple-800">
            LuxStay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative font-medium text-base px-1 py-2
                ${isActive ? 'text-yellow-500' : 'text-purple-800 hover:text-yellow-500'}
                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500
                after:left-0 after:-bottom-1 after:transition-all
                ${isActive ? 'after:w-full' : 'hover:after:w-full'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <AuthButtons />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-purple-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 pt-20 px-6"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={navItemVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        block py-3 px-4 text-lg font-medium border-b border-gray-100
                        ${isActive ? 'text-yellow-500' : 'text-purple-800'}
                      `}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={navItemVariants} className="pt-4">
                  <AuthButtons />
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;