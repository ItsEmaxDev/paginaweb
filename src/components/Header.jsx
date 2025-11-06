import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoHorizontal from '../imagenes/logo_horizontal.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-reverse shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 212, 74, 0.5)" }}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logoHorizontal}
              alt="Mi Salle + Logo"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-28'}`}
            />
          </motion.div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {[
            { label: 'Calendario', path: '/calendario' },
            { label: 'Logros', path: '/logros' },
            { label: 'Talleres', path: '/talleres' },
            { label: 'Contacto', path: '/contacto' }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.path}
              className="text-pure-white hover:text-golden-yellow transition-all duration-300 font-medium"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pure-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-reverse"
        >
          <nav className="px-4 py-4 space-y-2">
            {[
              { label: 'Calendario', path: '/calendario' },
              { label: 'Logros', path: '/logros' },
              { label: 'Talleres', path: '/talleres' },
              { label: 'Contacto', path: '/contacto' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="block text-pure-white hover:text-golden-yellow transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
