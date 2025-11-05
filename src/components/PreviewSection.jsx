import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

const PreviewSection = ({
  title,
  description,
  icon,
  linkTo,
  previewItems = [],
  className = ''
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-4">{icon}</span>
            <h2 className="text-4xl font-bold text-mint-green">{title}</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {previewItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <GlassCard className="p-6 h-full">
                <div className="text-center">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-mint-green mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to={linkTo}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 225, 178, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-diagonal text-pure-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-pure-white hover:text-primary shadow-lg"
            >
              Ver Más
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PreviewSection;
