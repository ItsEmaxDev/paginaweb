# Mi Salle +

Portal informativo moderno para el Liceo Salle, construido con React, Vite y Tailwind CSS.

##  Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Interfaz Moderna**: Utilizando Tailwind CSS para un diseño limpio y profesional
- **Secciones Informativas**:
  - Inicio: Noticias, logros y eventos destacados
  - Calendario: Fechas importantes del año escolar
  - Logros: Galería de participaciones y premios
  - Talleres: Información de actividades extracurriculares
  - Contacto: Formulario y chatbot placeholder

##  Tecnologías Utilizadas

### Frontend
- **React 19**: Framework de JavaScript para interfaces de usuario
- **Vite**: Herramienta de desarrollo rápida
- **Tailwind CSS**: Framework de CSS utilitario
- **React Router**: Para navegación (preparado para futura implementación)

### Backend
- **Node.js**: Entorno de ejecución JavaScript
- **Express.js**: Framework web para Node.js

### Base de Datos 
- **Supabase**: Alternativa open-source a Firebase

##  Estructura del Proyecto

```
/src
  /components          # Componentes reutilizables
    - Header.jsx       # Barra de navegación superior
    - Footer.jsx       # Pie de página
  /pages               # Páginas principales
    - Home.jsx         # Página de inicio
    - Calendar.jsx     # Calendario académico
    - Achievements.jsx # Logros y participaciones
    - Workshops.jsx    # Talleres y deportes
    - Contact.jsx      # Página de contacto
  /services            # Servicios y APIs
    - api.js           # Configuración de APIs
  /assets              # Imágenes y recursos estáticos
- server.js            # Servidor backend básico
- tailwind.config.js   # Configuración de Tailwind CSS
- package.json         # Dependencias y scripts
```

## 🏃‍♂️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd mi-salle-plus
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Construcción para Producción

1. Construye la aplicación:
```bash
npm run build
```

2. Inicia el servidor de producción:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3001`

##  Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Azul oscuro (#1e3a8a)
- **Secondary**: Amarillo dorado (#fbbf24)
- **Accent**: Blanco (#ffffff)

### Tipografía
- **Familia**: Poppins, Inter, sans-serif

##  Funcionalidades Futuras

- [ ] Integración con base de datos (Supabase)
- [ ] Sistema de autenticación
- [ ] Panel administrativo
- [ ] Chatbot funcional (SalleBot) (aun no completado)
- [ ] Notificaciones push
- [ ] Sistema de reservas para talleres
- [ ] Galería de imágenes dinámica
- [ ] API REST completa

##  Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Vite
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción
- `npm run server`: Inicia el servidor backend
- `npm start`: Construye y ejecuta la aplicación completa

##  Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

##  Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

##  Contacto

Liceo Salle - compuioelijo@gmail.com

---

**Desarrollado exclusivamente para el Liceo TP Juan Bautista de la salle**
