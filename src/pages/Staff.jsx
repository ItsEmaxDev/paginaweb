import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const Staff = () => {
  const staffCategories = [
    {
      title: "Directiva",
      icon: "👔",
      members: [
        { name: "null", position: "Director", email: "direccion@liceosalle.cl" }
      ]
    },
    {
      title: "Profesores",
      icon: "👨‍🏫",
      members: [
        { name: "Guadalupe Castillo", position: "Profesora de Especialidad Programación" },
        { name: "Juan Pablo Gonzáles", position: "Profesor de Educación Física" },
        { name: "Natalia Contreras", position: "Profesora de Matemáticas" },
        { name: "Daniel Michea", position: "Profesor de Lenguaje" },
        { name: "Sergio Bernal", position: "Profesor de Educación Física" },
        { name: "Julian Salas", position: "Profesor de Educación Física" },
        { name: "Raúl Vera", position: "Profesor de Matemáticas" },
        { name: "Cindy Lopez", position: "Profesora de Especialidad Administración" },
        { name: "Christian Labra", position: "Profesor de Especialidad Administración" }
      ]
    },
    {
      title: "Inspectoría",
      icon: "🛡️",
      members: [
        { name: "null", position: "Inspectora General" }
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
      </div>
    </div>
  );
};

export default Staff;
