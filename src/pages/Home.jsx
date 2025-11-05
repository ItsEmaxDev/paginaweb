import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getNews } from "../services/supabaseClient";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-diagonal relative overflow-hidden"
    >
{/* Solid background - adjusted size */}
<div className="absolute top-0 left-0 right-0 h-1/2 bg-cyan-800"></div>



      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-pure-white mb-6"
        >
          Liceo TP Juan Bautista de la Salle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-pure-white/90 mb-8 max-w-3xl mx-auto"
        >
          Conectando nuestra comunidad educativa
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 212, 74, 0.5)",
          }}
          onClick={() => {
            const talleresSection = document.getElementById("talleres");
            if (talleresSection) {
              talleresSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-golden-yellow text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-pure-white hover:text-primary cursor-pointer"
        >
          Explorar Más
        </motion.button>
      </div>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-16 bg-pure-white"
      >
        <div className="container mx-auto px-4">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-mint-green mb-4">
              Últimas Noticias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente al día con las últimas noticias, eventos y logros de
              nuestra comunidad educativa.
            </p>
          </motion.div>

          {/* Noticias */}
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-600">Cargando noticias...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.length > 0 ? news.slice(0, 6).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="bg-pure-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="h-48 bg-gradient-diagonal flex items-center justify-center">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span className={`text-pure-white text-6xl ${item.image_url ? 'hidden' : ''}`}>📰</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-mint-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                    <span className="text-sm text-soft-cyan font-medium">
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </motion.div>
              )) : (
                // Fallback static news if no dynamic news
                [
                  {
                    icon: "📚",
                    title: "Nueva Biblioteca Digital",
                    text: "Hemos inaugurado nuestra nueva biblioteca digital con acceso a miles de recursos educativos.",
                    date: "Publicado: 15 Oct 2024",
                  },
                  {
                    icon: "⚽",
                    title: "Campeonato de Fútbol",
                    text: "Nuestros estudiantes se preparan para el campeonato regional de fútbol escolar.",
                    date: "Publicado: 12 Oct 2024",
                  },
                  {
                    icon: "💻",
                    title: "Taller de Programación",
                    text: "Nuevo taller de introducción a la programación para estudiantes de secundaria.",
                    date: "Publicado: 10 Oct 2024",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={`fallback-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-pure-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="h-48 bg-gradient-diagonal flex items-center justify-center">
                      <span className="text-pure-white text-6xl">{item.icon}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-mint-green mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.text}</p>
                      <span className="text-sm text-soft-cyan font-medium">
                        {item.date}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}

          {/* Eventos destacados */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-diagonal rounded-lg shadow-lg p-8 text-pure-white"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              Eventos Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold text-golden-yellow mb-2">
                  Día del Liceo
                </h4>
                <p className="text-pure-white/90 mb-2">
                  Fecha: 25 de octubre, 2024
                </p>
                <p className="text-pure-white/90">
                  Celebración anual con actividades culturales y deportivas.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold text-golden-yellow mb-2">
                  Matrículas 2025
                </h4>
                <p className="text-pure-white/90 mb-2">
                  Fecha: Del 1 al 15 de noviembre, 2024
                </p>
                <p className="text-pure-white/90">
                  Proceso de matrículas para el año académico 2025.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default Home;
