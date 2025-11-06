import React from 'react';
import { motion } from 'framer-motion';
import logoPrincipal from '../imagenes/logo_principal.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-reverse text-pure-white py-4"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <img
                src={logoPrincipal}
                alt="Mi Salle + Logo Principal"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm font-bold">Portal informativo del Liceo Salle. Conectando estudiantes, apoderados y docentes.</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="inicio" className="hover:text-golden-yellow transition-all duration-300 font-bold">Inicio</a></li>
              <li><a href="calendario" className="hover:text-golden-yellow transition-all duration-300 font-bold">Calendario</a></li>
              <li><a href="logros" className="hover:text-golden-yellow transition-all duration-300 font-bold">Logros</a></li>
              <li><a href="talleres" className="hover:text-golden-yellow transition-all duration-300 font-bold">Talleres</a></li>
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
          className="border-t border-pure-white/20 mt-8 pt-4 text-center text-sm"
        >
          <p className="text-sm font-bold" style={{ color: '#ffffffff' }}>&copy; 2025 Mi Salle + | Diseñado por Dev4D Studios</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
