import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos del build de React
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta básica para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Ruta para obtener noticias (placeholder para futura integración con base de datos)
app.get('/api/news', (req, res) => {
  const news = [
    {
      id: 1,
      title: 'Nueva Biblioteca Digital',
      content: 'Hemos inaugurado nuestra nueva biblioteca digital...',
      date: '2024-10-15'
    },
    // Más noticias...
  ];
  res.json(news);
});

// Ruta para el formulario de contacto (placeholder)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Mensaje recibido:', { name, email, subject, message });
  // Aquí iría la lógica para enviar email o guardar en base de datos
  res.json({ success: true, message: 'Mensaje enviado exitosamente' });
});

// Para cualquier otra ruta, servir el index.html de React
app.use((req, res, next) => {
  // Excluir rutas de API
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
