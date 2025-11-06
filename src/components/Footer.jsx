import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoPrincipal from '../imagenes/logo_principal.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-reverse text-pure-white py-2"
    >
      <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-3">
              <img
                src={logoPrincipal}
                alt="Mi Salle + Logo Principal"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm font-medium">Portal informativo del Liceo Salle. Conectando estudiantes, apoderados y docentes.</p>
            <div className="mt-3 flex items-center space-x-3">
              <a href="https://facebook.com/liceosalle" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-pure-white hover:text-golden-yellow">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2V12h2.2V9.8c0-2.18 1.3-3.39 3.3-3.39.96 0 1.97.17 1.97.17v2.17h-1.11c-1.09 0-1.43.68-1.43 1.38V12h2.43l-.39 2.9h-2.04v7.05A10 10 0 0022 12z"/></svg>
              </a>
              <a href="https://instagram.com/liceosalle" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-pure-white hover:text-golden-yellow">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z"/><path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zM18.5 6a1 1 0 110 2 1 1 0 010-2z"/></svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calendario" className="hover:text-golden-yellow transition-all duration-300">Calendario</Link></li>
              <li><Link to="/logros" className="hover:text-golden-yellow transition-all duration-300">Logros</Link></li>
              <li><Link to="/talleres" className="hover:text-golden-yellow transition-all duration-300">Talleres</Link></li>
              <li><Link to="/contacto" className="hover:text-golden-yellow transition-all duration-300">Contacto</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>Contacto</h3>
            <p className="text-sm font-bold">Dirección: La Cruz 1794, La Serena</p>
            <p className="text-sm font-bold">Teléfono: (56) 999975921</p>
            <p className="text-sm font-bold">Email: info@liceosalle.cl</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-pure-white/20 mt-6 pt-3 text-center text-sm"
        >
          <Link to="/credits" className="text-sm" style={{ color: '#ffffff' }}>&copy; 2025 Mi Salle + | Diseñado por Dev4D Studios</Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
