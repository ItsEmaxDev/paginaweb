import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Campeonato Regional de Fútbol',
      description: 'Equipo de fútbol masculino obtiene el primer lugar en el campeonato regional.',
      icon: '⚽',
      participants: ['Juan Pérez', 'María González', 'Carlos Rodríguez'],
      date: 'Octubre 2024'
    },
    {
      id: 2,
      title: 'Olimpiada de Matemáticas',
      description: 'Tres estudiantes clasifican a la final nacional de la Olimpiada de Matemáticas.',
      icon: '🧮',
      participants: ['Ana López', 'Pedro Martínez', 'Sofia Hernández'],
      date: 'Septiembre 2024'
    },
    {
      id: 3,
      title: 'Concurso de Ciencias',
      description: 'Proyecto de ciencias gana premio regional en categoría de medio ambiente.',
      icon: '🔬',
      participants: ['Equipo de Ciencias 2024'],
      date: 'Agosto 2024'
    },
    {
      id: 4,
      title: 'Festival de Arte',
      description: 'Obras de arte de nuestros estudiantes son seleccionadas para exposición municipal.',
      icon: '🎨',
      participants: ['Clase de Arte 3° Medio'],
      date: 'Julio 2024'
    }
  ];

  return (
    <section id="logros" className="py-16 bg-pure-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-mint-green mb-4">Logros y Participación</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebramos los éxitos y participaciones destacadas de nuestros estudiantes en diversas actividades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-gradient-diagonal rounded-lg shadow-lg overflow-hidden text-pure-white"
            >
              <div className="h-48 bg-pure-white/20 flex items-center justify-center">
                <span className="text-8xl">{achievement.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pure-white mb-2">{achievement.title}</h3>
                <p className="text-pure-white mb-4">{achievement.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-pure-white mb-2">Participantes:</h4>
                  <ul className="text-sm text-pure-white">
                    {achievement.participants.map((participant, idx) => (
                      <li key={idx} className="mb-1">• {participant}</li>
                    ))}
                  </ul>
                </div>
                <span className="text-sm text-pure-white font-medium">{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-diagonal rounded-lg shadow-lg p-8 text-pure-white"
        >
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">Estadísticas del Año</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-pure-white/90">Campeonatos Ganados</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-pure-white/90">Estudiantes Premiados</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-pure-white/90">Olimpiadas Nacionales</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-pure-white/90">Proyectos Destacados</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
