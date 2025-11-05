import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Mensaje enviado exitosamente. Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-mint-green mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o información adicional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-soft-cyan mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-pure-white p-4 rounded-lg shadow-md"
              >
                <div className="bg-gradient-diagonal text-pure-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mint-green">Dirección</h4>
                  <p className="text-gray-600">La Cruz 1794<br />La Serena, Coquimbo<br />Chile</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-pure-white p-4 rounded-lg shadow-md"
              >
                <div className="bg-gradient-diagonal text-pure-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mint-green">Teléfono</h4>
                  <p className="text-gray-600">(+56) 999975921</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-pure-white p-4 rounded-lg shadow-md"
              >
                <div className="bg-gradient-diagonal text-pure-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mint-green">Email</h4>
                  <p className="text-gray-600">info@liceosalle.cl</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 bg-pure-white p-4 rounded-lg shadow-md"
              >
                <div className="bg-gradient-diagonal text-pure-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mint-green">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 - 18:00<br /></p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-light-green mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="transition-all duration-300"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="transition-all duration-300"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="transition-all duration-300"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
                  placeholder="Asunto del mensaje"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="transition-all duration-300"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 225, 178, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-diagonal text-pure-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-500 font-semibold"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Chatbot placeholder */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-diagonal text-pure-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">SalleBot</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-full right-0 mb-2 bg-pure-white border border-gray-200 rounded-lg p-3 shadow-lg max-w-xs"
          >
            <p className="text-sm text-gray-600">¡Hola! Soy SalleBot, tu asistente virtual. Próximamente disponible para ayudarte.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
