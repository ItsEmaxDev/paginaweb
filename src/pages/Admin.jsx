import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getNews, addNews, deleteNews } from '../services/supabaseClient';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      loadNews();
    }
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') { // You can change this password
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      loadNews();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const loadNews = async () => {
    setLoading(true);
    try {
      const newsData = await getNews();
      setNews(newsData);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('Por favor complete título y contenido');
      return;
    }

    setSubmitting(true);
    try {
      await addNews(formData.title, formData.content, formData.image_url || null);
      setFormData({ title: '', content: '', image_url: '' });
      loadNews(); // Reload news list
    } catch (error) {
      console.error('Error adding news:', error);
      alert('Error al agregar la noticia');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar esta noticia?')) {
      try {
        await deleteNews(id);
        loadNews(); // Reload news list
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Error al eliminar la noticia');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-gradient-diagonal flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-pure-white rounded-lg shadow-lg p-8 max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-center text-mint-green mb-6">
            Panel de Administración
          </h1>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-cyan"
                placeholder="Ingrese la contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-pure-white py-2 px-4 rounded-lg hover:bg-cyan-800 transition-colors duration-300"
            >
              Acceder
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-diagonal py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-pure-white rounded-lg shadow-lg p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-mint-green">
              Panel de Administración - Noticias
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-pure-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Cerrar Sesión
            </button>
          </div>

          {/* Add News Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-mint-green mb-4">
              Agregar Nueva Noticia
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Título *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-cyan"
                  placeholder="Ingrese el título de la noticia"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Contenido *
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-cyan"
                  placeholder="Ingrese el contenido de la noticia"
                  required
                />
              </div>
              <div>
                <label htmlFor="image_url" className="block text-gray-700 font-medium mb-2">
                  URL de Imagen (opcional)
                </label>
                <input
                  type="url"
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-cyan"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-golden-yellow text-primary px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Agregando...' : 'Agregar Noticia'}
              </button>
            </form>
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-mint-green mb-4">
              Noticias Existentes
            </h2>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-2 text-gray-600">Cargando noticias...</p>
              </div>
            ) : news.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No hay noticias disponibles.</p>
            ) : (
              <div className="space-y-4">
                {news.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-mint-green mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-2">{item.content}</p>
                        {item.image_url && (
                          <p className="text-sm text-gray-500 mb-2">
                            Imagen: {item.image_url}
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          Fecha: {new Date(item.date).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-pure-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300 ml-4"
                      >
                        Eliminar
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admin;
