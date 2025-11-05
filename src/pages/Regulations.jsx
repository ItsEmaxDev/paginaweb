import React, { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const Regulations = () => {
  const [selectedSection, setSelectedSection] = useState('general');

  const regulations = {
    general: {
      title: "Normas Generales",
      content: `
        <h3>Principios Fundamentales</h3>
        <p>El Liceo TP Juan Bautista de la Salle se rige por los principios lasallanos de fe, servicio y comunidad. Todos los miembros de nuestra comunidad educativa deben respetar estos valores fundamentales.</p>

        <h3>Horario de Funcionamiento</h3>
        <ul>
          <li>Lunes a Viernes: 8:00 - 18:00 horas</li>
          <li>Entrada de estudiantes: 8:00 - 8:30 horas</li>
          <li>Salida de estudiantes: 15:30 - 16:00 horas (básica) / 17:30 - 18:00 horas (media)</li>
        </ul>

        <h3>Uniforme Escolar</h3>
        <p>El uso del uniforme escolar es obligatorio y debe mantenerse en perfectas condiciones. Los estudiantes son responsables de su presentación personal.</p>
      `
    },
    convivencia: {
      title: "Normas de Convivencia",
      content: `
        <h3>Respeto Mutuo</h3>
        <p>Se promueve un ambiente de respeto entre todos los miembros de la comunidad educativa. No se tolera ningún tipo de discriminación, acoso o violencia.</p>

        <h3>Comportamiento en Clases</h3>
        <ul>
          <li>Asistencia puntual a todas las clases</li>
          <li>Participación activa en las actividades</li>
          <li>Respeto hacia profesores y compañeros</li>
          <li>Uso adecuado de los materiales escolares</li>
        </ul>

        <h3>Uso de Instalaciones</h3>
        <p>Las dependencias del establecimiento deben ser utilizadas de manera responsable. Está prohibido dañar mobiliario, equipos o instalaciones.</p>
      `
    },
    academico: {
      title: "Normas Académicas",
      content: `
        <h3>Asistencia y Puntualidad</h3>
        <p>La asistencia regular es fundamental para el proceso de aprendizaje. Se requiere un mínimo del 85% de asistencia para aprobar el año escolar.</p>

        <h3>Evaluación del Aprendizaje</h3>
        <ul>
          <li>Pruebas escritas y controles de lectura</li>
          <li>Tareas y trabajos prácticos</li>
          <li>Participación en clases</li>
          <li>Proyectos y exposiciones</li>
        </ul>

        <h3>Promoción de Curso</h3>
        <p>Para promocionar de curso, el estudiante debe obtener un promedio mínimo de 5.0 en todas las asignaturas y cumplir con los requisitos de asistencia.</p>
      `
    },
    tecnologia: {
      title: "Uso de Tecnología",
      content: `
        <h3>Dispositivos Electrónicos</h3>
        <p>El uso de celulares y otros dispositivos electrónicos está restringido durante las horas de clases. Los estudiantes pueden utilizarlos únicamente en recreos con autorización.</p>

        <h3>Internet y Redes Sociales</h3>
        <p>Se promueve el uso responsable de internet y redes sociales. Está prohibida la publicación de contenido que afecte la imagen del establecimiento o de sus miembros.</p>

        <h3>Plataformas Educativas</h3>
        <p>Utilizamos plataformas digitales para apoyar el proceso de enseñanza-aprendizaje. Los estudiantes deben mantener credenciales de acceso de manera confidencial.</p>
      `
    }
  };

  const sections = [
    { id: 'general', label: 'Normas Generales', icon: '⚖️' },
    { id: 'convivencia', label: 'Convivencia', icon: '🤝' },
    { id: 'academico', label: 'Académico', icon: '📚' },
    { id: 'tecnologia', label: 'Tecnología', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-pure-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-mint-green mb-4">
            Reglamento Interno
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Normas y regulaciones que rigen la convivencia y el funcionamiento del Liceo TP Juan Bautista de la Salle.
            Estas disposiciones buscan mantener un ambiente educativo óptimo para todos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-mint-green mb-4">
                Secciones
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
                      selectedSection === section.id
                        ? 'bg-gradient-diagonal text-pure-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    <span className="text-sm font-medium">{section.label}</span>
                  </motion.button>
                ))}
              </nav>
            </GlassCard>
          </motion.div>

          {/* Content Area */}
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">
                  {sections.find(s => s.id === selectedSection)?.icon}
                </span>
                <h2 className="text-3xl font-bold text-mint-green">
                  {regulations[selectedSection].title}
                </h2>
              </div>

              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: regulations[selectedSection].content }}
              />
            </GlassCard>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <GlassCard className="p-6 text-center">
                <h3 className="text-xl font-semibold text-mint-green mb-4">
                  Descargar Reglamento Completo
                </h3>
                <p className="text-gray-600 mb-6">
                  Para obtener una copia completa del reglamento interno en formato PDF,
                  contacta con la secretaría académica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/api/download/reglamento"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-diagonal text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586 14.293 5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Descargar PDF
                  </motion.a>
                  <motion.a
                    href="mailto:secretaria@liceosalle.cl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-mint-green text-mint-green px-6 py-3 rounded-lg font-semibold hover:bg-mint-green hover:text-pure-white transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Contactar Secretaría
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-mint-green mb-4">
              ¿Tienes dudas sobre el reglamento?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de convivencia y orientación está disponible para aclarar cualquier duda
              sobre las normas y regulaciones del establecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:convivencia@liceosalle.cl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-diagonal text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center"
              >
                convivencia@liceosalle.cl
              </motion.a>
              <motion.a
                href="tel:+5699975921"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-mint-green text-mint-green px-6 py-3 rounded-lg font-semibold hover:bg-mint-green hover:text-pure-white transition-all duration-300 text-center"
              >
                +56 9 9975 921
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Regulations;
