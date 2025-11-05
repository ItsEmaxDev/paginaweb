import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getNews } from "../services/supabaseClient";
import GlassCard from "../components/GlassCard";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = ['all', 'academico', 'deportivo', 'cultural', 'administrativo'];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-pure-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-mint-green mb-4">
            Últimas Noticias
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las últimas noticias, eventos y logros de nuestra comunidad educativa.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-diagonal text-pure-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todas' : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* News Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-mint-green"></div>
            <p className="mt-4 text-gray-600">Cargando noticias...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? filteredNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="h-full"
              >
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
                  <div className="h-48 bg-gradient-diagonal flex items-center justify-center relative">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span className={`text-pure-white text-6xl ${item.image_url ? 'hidden' : ''}`}>📰</span>
                    {item.category && (
                      <span className="absolute top-4 right-4 bg-pure-white/20 backdrop-blur-sm text-pure-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-mint-green mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {item.content}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-soft-cyan font-medium">
                        {new Date(item.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      {item.author && (
                        <span className="text-gray-500">
                          Por {item.author}
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )) : (
              <div className="col-span-full text-center py-16">
                <GlassCard className="p-8 max-w-md mx-auto">
                  <span className="text-6xl mb-4 block">📭</span>
                  <h3 className="text-xl font-semibold text-mint-green mb-2">
                    No hay noticias
                  </h3>
                  <p className="text-gray-600">
                    No se encontraron noticias en esta categoría. Inténtalo con otra selección.
                  </p>
                </GlassCard>
              </div>
            )}
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-mint-green mb-4">
              Suscríbete a nuestro boletín
            </h3>
            <p className="text-gray-600 mb-6">
              Recibe las últimas noticias y actualizaciones directamente en tu correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-green focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-diagonal text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Suscribirse
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
