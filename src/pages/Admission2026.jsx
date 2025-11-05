import React, { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const Admission2026 = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    previousSchool: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Solicitud de admisión enviada exitosamente. Nos pondremos en contacto pronto.');
        setFormData({
          studentName: '', birthDate: '', grade: '', parentName: '',
          parentEmail: '', parentPhone: '', address: '', previousSchool: '', comments: ''
        });
      } else {
        alert('Error al enviar la solicitud. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar la solicitud. Inténtalo de nuevo.');
    }
  };

  const requirements = [
    { icon: "📋", title: "Documentos Requeridos", items: [
      "Certificado de nacimiento original",
      "Certificado de estudios del año anterior",
      "Fotocopia Cédula de Identidad del estudiante",
      "Fotocopia Cédula de Identidad de los padres",
      "Certificado médico actualizado",
      "2 fotos tamaño carné"
    ]},
    { icon: "📅", title: "Fechas Importantes", items: [
      "Inicio proceso: 1 de octubre, 2024",
      "Entrevistas: Noviembre 2024",
      "Resultados: Diciembre 2024",
      "Matrículas: Enero 2025",
      "Inicio clases: Marzo 2025"
    ]},
    { icon: "💰", title: "Información Financiera", items: [
      "Matrícula anual: Consultar tarifas",
      "Mensualidades: Según nivel educativo",
      "Descuentos por puntualidad",
      "Becas disponibles para casos especiales"
    ]}
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
            Admisión 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Únete a nuestra comunidad educativa. Proceso de admisión para el año académico 2026.
            Estamos comprometidos con formar estudiantes íntegros y preparados para el futuro.
          </p>
        </motion.div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <GlassCard className="p-6 h-full">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{req.icon}</span>
                  <h3 className="text-xl font-semibold text-mint-green">
                    {req.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-mint-green mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-mint-green text-center mb-8">
              Solicitud de Admisión
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Estudiante *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                    placeholder="Nombre completo"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Nacimiento *
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Curso Solicitado *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Seleccionar curso</option>
                    <option value="prekinder">Pre-Kínder</option>
                    <option value="kinder">Kínder</option>
                    <option value="1basico">1° Básico</option>
                    <option value="2basico">2° Básico</option>
                    <option value="3basico">3° Básico</option>
                    <option value="4basico">4° Básico</option>
                    <option value="5basico">5° Básico</option>
                    <option value="6basico">6° Básico</option>
                    <option value="7basico">7° Básico</option>
                    <option value="8basico">8° Básico</option>
                    <option value="1medio">1° Medio</option>
                    <option value="2medio">2° Medio</option>
                    <option value="3medio">3° Medio</option>
                    <option value="4medio">4° Medio</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                    Colegio Anterior
                  </label>
                  <input
                    type="text"
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                    placeholder="Nombre del colegio anterior"
                  />
                </motion.div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-mint-green mb-4">Información de los Padres/Apoderados</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del Apoderado *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                      placeholder="Nombre completo"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="parentEmail"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                      placeholder="correo@ejemplo.com"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="transition-all duration-300"
                  >
                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                      placeholder="+56 9 1234 5678"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="transition-all duration-300 md:col-span-2"
                  >
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                      placeholder="Dirección completa"
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="transition-all duration-300"
              >
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios Adicionales
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Información adicional que consideres relevante..."
                ></textarea>
              </motion.div>

              <div className="text-center pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 225, 178, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-diagonal text-pure-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-500 shadow-lg"
                >
                  Enviar Solicitud
                </motion.button>
                <p className="text-sm text-gray-500 mt-4">
                  * Campos obligatorios. Nos pondremos en contacto contigo dentro de 48 horas.
                </p>
              </div>
            </form>
          </GlassCard>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-mint-green mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de admisiones está disponible para resolver todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:admisiones@liceosalle.cl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-diagonal text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center"
              >
                Correo: admisiones@liceosalle.cl
              </motion.a>
              <motion.a
                href="tel:+5699975921"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-mint-green text-mint-green px-6 py-3 rounded-lg font-semibold hover:bg-mint-green hover:text-pure-white transition-all duration-300 text-center"
              >
                Teléfono: +56 9 9975 921
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Admission2026;
