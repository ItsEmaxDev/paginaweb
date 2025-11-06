import React from 'react';
import { motion } from 'framer-motion';

const Workshops = () => {
  const workshops = [
    { id: 1, name: 'Voleibol', description: 'Entrenamiento de voleibol para participantes Sub14 y otras categorías.', schedule: 'Miércoles, Viernes y Sábado', instructor: 'Prof. Sergio Bernal', level: 'Todos los niveles', capacity: 'Cupos sujetos a inscripción', icon: '🏐' },
    { id: 2, name: 'Futsal', description: 'Entrenamientos de futsal y preparación para competencias.', schedule: 'Martes y Jueves', instructor: 'Prof. Julian Salas', level: 'Todos los niveles', capacity: 'Cupos sujetos a inscripción', icon: '⚽' },
    { id: 3, name: 'Robótica', description: 'Explora electrónica y programación aplicada a robots.', schedule: 'Días por definir', instructor: 'Prof. Guadalupe Castillo', level: 'Intermedio', capacity: 'Cupos limitados', icon: '🤖' },
    { id: 4, name: 'Basketball', description: 'Entrenamiento y preparación en basketball.', schedule: 'Días por definir', instructor: 'Prof. Juan González', level: 'Todos los niveles', capacity: 'Cupos sujetos a inscripción', icon: '🏀' },
    { id: 5, name: 'Inglés', description: 'Clases de inglés para mejorar comprensión y conversación.', schedule: 'Días por definir', instructor: 'Prof. [Por definir]', level: 'Todos los niveles', capacity: 'Cupos sujetos a inscripción', icon: '🗣️' },
    { id: 6, name: 'Música', description: 'Actividades musicales y formación instrumental/vocal.', schedule: 'Días por definir', instructor: 'Prof. [Por definir]', level: 'Todos los niveles', capacity: 'Cupos sujetos a inscripción', icon: '�' }
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'principiante':
      case 'principiante a intermedio':
        return 'bg-green-500 text-white';
      case 'intermedio':
        return 'bg-blue-500 text-white';
      case 'avanzado':
        return 'bg-red-500 text-white';
      case 'todos los niveles':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="talleres" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-mint-green mb-4">Talleres y Deportes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras actividades extracurriculares y desarrolla nuevas habilidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-pure-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{workshop.icon}</span>
                  <h3 className="text-xl font-semibold text-mint-green">{workshop.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(workshop.level)}`}>
                  {workshop.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{workshop.description}</p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-soft-cyan mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{workshop.schedule}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-soft-cyan mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{workshop.instructor}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-soft-cyan mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{workshop.capacity}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(163, 230, 127, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-diagonal text-pure-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-500 font-semibold"
              >
                Inscribirse
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Campeonatos Ganados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-diagonal rounded-lg p-6 text-pure-white shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4">Campeonatos Ganados</h3>
            <ul className="max-w-2xl mx-auto text-center">
              <li className="mb-2">2do Lugar JDE Comunal Año 2024 – Voleibol Varones Sub17</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
