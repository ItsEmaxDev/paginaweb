import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const Staff = () => {
  const staffCategories = [
    {
      title: "Dirección",
      icon: "👔",
      members: [
        {
          name: "Lic. María González",
          position: "Directora",
          description: "Licenciada en Educación con más de 20 años de experiencia en gestión educativa.",
          email: "directora@liceosalle.cl"
        }
      ]
    },
    {
      title: "Equipo Docente",
      icon: "👨‍🏫",
      members: [
        {
          name: "Prof. Carlos Silva",
          position: "Jefe de Departamento de Matemáticas",
          description: "Especialista en matemáticas aplicadas con experiencia en enseñanza secundaria.",
          email: "carlos.silva@liceosalle.cl"
        },
        {
          name: "Prof. Ana López",
          position: "Profesora de Ciencias",
          description: "Doctora en Biología con enfoque en educación experimental.",
          email: "ana.lopez@liceosalle.cl"
        },
        {
          name: "Prof. Juan Martínez",
          position: "Profesor de Educación Física",
          description: "Entrenador certificado con experiencia en desarrollo deportivo estudiantil.",
          email: "juan.martinez@liceosalle.cl"
        },
        {
          name: "Prof. Sofia Rodríguez",
          position: "Profesora de Música",
          description: "Especialista en educación musical con formación en conservatorio.",
          email: "sofia.rodriguez@liceosalle.cl"
        }
      ]
    },
    {
      title: "Administración",
      icon: "👩‍💼",
      members: [
        {
          name: "Lic. Pedro Hernández",
          position: "Secretario Académico",
          description: "Encargado de la gestión administrativa y coordinación académica.",
          email: "secretaria@liceosalle.cl"
        },
        {
          name: "Srta. Carmen Díaz",
          position: "Asistente Administrativa",
          description: "Apoyo administrativo y atención a estudiantes y apoderados.",
          email: "administracion@liceosalle.cl"
        }
      ]
    },
    {
      title: "Orientación",
      icon: "🧑‍🎓",
      members: [
        {
          name: "Ps. Isabel Torres",
          position: "Orientadora Educacional",
          description: "Especialista en psicología educativa y orientación vocacional.",
          email: "orientacion@liceosalle.cl"
        }
      ]
    }
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
            Nuestro Equipo
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales dedicados que conforman nuestra comunidad educativa,
            comprometidos con la formación integral de nuestros estudiantes.
          </p>
        </motion.div>

        {staffCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl mr-4">{category.icon}</span>
              <h2 className="text-3xl font-bold text-mint-green">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.members.map((member, memberIndex) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * memberIndex }}
                >
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-20 h-20 bg-gradient-diagonal rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-pure-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-mint-green mb-1">
                      {member.name}
                    </h3>
                    <p className="text-soft-cyan font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-sm text-mint-green hover:text-soft-cyan transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {member.email}
                    </a>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-mint-green mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-gray-600 mb-6">
              Si eres un profesional apasionado por la educación y quieres contribuir a nuestra misión,
              estamos siempre interesados en conocer nuevos talentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:rrhh@liceosalle.cl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-diagonal text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center"
              >
                Envíanos tu CV
              </motion.a>
              <motion.a
                href="tel:+5699975921"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-mint-green text-mint-green px-6 py-3 rounded-lg font-semibold hover:bg-mint-green hover:text-pure-white transition-all duration-300 text-center"
              >
                Llámanos
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;
