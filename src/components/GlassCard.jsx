import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  float = false,
  ...props
}) => {
  const baseClasses = `
    bg-pure-white/10
    backdrop-blur-md
    border border-pure-white/20
    rounded-xl
    shadow-glass-subtle
    transition-all duration-300
  `;

  const hoverClasses = hover ? `
    hover:bg-pure-white/20
    hover:shadow-glass
    hover:scale-105
    hover:-translate-y-1
  ` : '';

  const floatClasses = float ? 'animate-glass-float' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${floatClasses} ${className}`}
      whileHover={hover ? { scale: 1.05, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
