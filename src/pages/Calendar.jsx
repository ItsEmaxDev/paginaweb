import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    { date: '2024-10-25', title: 'Día del Liceo', type: 'evento' },
    { date: '2024-11-01', title: 'Inicio Matrículas', type: 'matricula' },
    { date: '2024-11-15', title: 'Fin Matrículas', type: 'matricula' },
    { date: '2024-12-20', title: 'Último día de clases', type: 'academico' },
    { date: '2024-12-23', title: 'Vacaciones de Navidad', type: 'vacaciones' },
    { date: '2025-01-06', title: 'Inicio clases 2025', type: 'academico' },
    { date: '2025-03-15', title: 'Taller de Ciencias', type: 'taller' },
    { date: '2025-04-10', title: 'Competencia Deportiva', type: 'deporte' },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'evento': return 'bg-soft-cyan';
      case 'matricula': return 'bg-light-green';
      case 'academico': return 'bg-mint-green';
      case 'vacaciones': return 'bg-golden-yellow';
      case 'taller': return 'bg-soft-cyan';
      case 'deporte': return 'bg-light-green';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="calendario" className="py-16 bg-gradient-diagonal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-pure-white mb-4">Calendario Académico</h2>
          <p className="text-lg text-pure-white/90 max-w-2xl mx-auto">
            Mantente al día con todas las fechas importantes del año escolar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-golden-yellow mb-6">Fechas Importantes 2024-2025</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center justify-between bg-pure-white/20 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full ${getEventTypeColor(event.type)}`}
                  ></motion.div>
                  <div>
                    <h4 className="font-semibold text-pure-white">{event.title}</h4>
                    <p className="text-pure-white">{event.date}</p>
                  </div>
                </div>
                <span className="text-sm text-golden-yellow capitalize font-medium">{event.type}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leyenda */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-pure-white rounded-lg p-6 shadow-lg"
        >
          <h4 className="text-lg font-semibold text-mint-green mb-4">Leyenda</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-soft-cyan"></div>
              <span className="text-sm font-medium">Eventos</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-light-green"></div>
              <span className="text-sm font-medium">Matrículas</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-mint-green"></div>
              <span className="text-sm font-medium">Académico</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-golden-yellow"></div>
              <span className="text-sm font-medium">Vacaciones</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-soft-cyan"></div>
              <span className="text-sm font-medium">Talleres</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-4 h-4 rounded-full bg-light-green"></div>
              <span className="text-sm font-medium">Deportes</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calendar;
