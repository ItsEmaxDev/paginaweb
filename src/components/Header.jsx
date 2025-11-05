import React from 'react';
import { motion } from 'framer-motion';
import logoHorizontal from '../imagenes/logo_horizontal.png';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-reverse shadow-lg"
    >
      <div className="container mx-auto px-4 py-0 flex justify-between items-center">
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 212, 74, 0.5)" }}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logoHorizontal}
            alt="Mi Salle + Logo"
            className="h-28 w-auto"
          />
        </motion.a>
        <nav className="hidden md:flex space-x-8">
          {['Inicio', 'Calendario', 'Logros', 'Talleres', 'Contacto'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-pure-white hover:text-golden-yellow transition-all duration-300 font-medium"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="text-pure-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
