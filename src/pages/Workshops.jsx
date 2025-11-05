import React from 'react';
import { motion } from 'framer-motion';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      name: 'Programación y Desarrollo Web',
      description: 'Aprende los fundamentos de la programación y crea tu primera página web.',
      schedule: 'Lunes y Miércoles, 15:00 - 17:00',
      instructor: 'Prof. Carlos Silva',
      level: 'Intermedio',
      capacity: '20 estudiantes',
      icon: '💻'
    },
    {
      id: 2,
      name: 'Arte y Diseño Digital',
      description: 'Explora herramientas digitales para crear arte y diseño gráfico.',
      schedule: 'Martes y Jueves, 14:00 - 16:00',
      instructor: 'Prof. María González',
      level: 'Principiante',
      capacity: '15 estudiantes',
      icon: '🎨'
    },
    {
      id: 3,
      name: 'Ciencias Experimentales',
      description: 'Realiza experimentos prácticos en química, física y biología.',
      schedule: 'Viernes, 13:00 - 16:00',
      instructor: 'Prof. Ana López',
      level: 'Avanzado',
      capacity: '12 estudiantes',
      icon: '🔬'
    },
    {
      id: 4,
      name: 'Deportes: Fútbol',
      description: 'Entrenamiento técnico y táctico para mejorar el rendimiento en fútbol.',
      schedule: 'Lunes, Miércoles, Viernes, 16:00 - 18:00',
      instructor: 'Prof. Juan Martínez',
      level: 'Todos los niveles',
      capacity: '25 estudiantes',
      icon: '⚽'
    },
    {
      id: 5,
      name: 'Música: Coro y Ensamble',
      description: 'Desarrolla tus habilidades vocales e instrumentales en grupo.',
      schedule: 'Martes y Jueves, 17:00 - 19:00',
      instructor: 'Prof. Sofia Rodríguez',
      level: 'Principiante a Intermedio',
      capacity: '30 estudiantes',
      icon: '🎵'
    },
    {
      id: 6,
      name: 'Debate y Oratoria',
      description: 'Mejora tus habilidades de comunicación y pensamiento crítico.',
      schedule: 'Miércoles, 15:00 - 17:00',
      instructor: 'Prof. Pedro Hernández',
      level: 'Intermedio',
      capacity: '18 estudiantes',
      icon: '🎤'
    }
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

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-diagonal rounded-lg p-8 text-pure-white shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-golden-">Información Importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-soft-white mb-4">Proceso de Inscripción</h4>
              <ul className="space-y-2 text-pure-white/90">
                <li>• Las inscripciones se realizan a través del portal estudiantil</li>
                <li>• Cupos limitados por taller</li>
                <li>• Se requiere autorización de apoderado para menores de edad</li>
                <li>• Confirmación de inscripción en 48 horas</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-soft-white mb-4">Beneficios</h4>
              <ul className="space-y-2 text-pure-white/90">
                <li>• Desarrollo de habilidades extracurriculares</li>
                <li>• Certificación al finalizar el taller</li>
                <li>• Participación en competencias y eventos</li>
                <li>• Networking con otros estudiantes</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
