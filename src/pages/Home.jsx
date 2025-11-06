import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PreviewSection from "../components/PreviewSection";
import GlassCard from "../components/GlassCard";
import a23 from "../imagenes/a23.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${a23})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <GlassCard className="p-8 inline-block animate-glass-float">
              <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-4">
                Liceo TP Juan Bautista de la Salle
              </h1>
              <p className="text-xl md:text-2xl text-pure-white/90">
                Conectando nuestra comunidad educativa
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={() => document.getElementById('quienes-somos').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 212, 74, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-golden-yellow text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-pure-white hover:text-primary shadow-lg"
            >
              Explorar Más
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-16 bg-gradient-to-br from-pure-white via-soft-cyan/10 to-mint-green/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-mint-green mb-4">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El Liceo TP Juan Bautista de la Salle es una institución educativa comprometida con la formación integral de nuestros estudiantes,
              inspirados en los valores lasallanos de fe, servicio y comunidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <span className="text-4xl mb-4 block">🎓</span>
                <h3 className="text-xl font-semibold text-mint-green mb-2">Excelencia Académica</h3>
                <p className="text-gray-700">
                  Ofrecemos una educación de calidad con programas actualizados y metodologías innovadoras.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <span className="text-4xl mb-4 block">🤝</span>
                <h3 className="text-xl font-semibold text-mint-green mb-2">Valores Lasallanos</h3>
                <p className="text-gray-700">
                  Formamos personas íntegras basadas en los principios de San Juan Bautista de la Salle.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <span className="text-4xl mb-4 block">🌟</span>
                <h3 className="text-xl font-semibold text-mint-green mb-2">Comunidad</h3>
                <p className="text-gray-700">
                  Fomentamos un ambiente de colaboración entre estudiantes, profesores y familias.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <PreviewSection
        title="Últimas Novedades"
        description="Mantente al día con las últimas noticias, eventos y logros de nuestra comunidad educativa."
        icon="📰"
        linkTo="/noticias"
        previewItems={[
          { icon: "⚽", title: "Campeonato de Fútbol", description: "Nuestros estudiantes se preparan para el campeonato regional de fútbol escolar." },
          { icon: "💻", title: "Taller de Programación", description: "Nuevo taller de introducción a la programación para estudiantes de secundaria." },
          { icon: "🏐", title: "Nuevo Taller de Voleibol Sub14", description: "Nuevo taller de voleibol para estudiantes de sub14, fomentando el deporte y el trabajo en equipo." },
          { icon: "🌟", title: "Curso Destacado 4to Medio D", description: "por su participación en la creación de la página web para el liceo." },
        ]}
      />

      <PreviewSection
        title="Funcionarios"
        description="Conoce a nuestro equipo docente y administrativo comprometido con la educación de calidad."
        icon="👥"
        linkTo="/funcionarios"
        previewItems={[
          { icon: "👨‍🏫", title: "Equipo Docente", description: "Profesionales altamente calificados con años de experiencia en educación." },
          { icon: "👩‍💼", title: "Administración", description: "Personal administrativo dedicado a apoyar el proceso educativo." },
          { icon: "🧑‍🎓", title: "Orientadores", description: "Especialistas en orientación vocacional y apoyo estudiantil." },
        ]}
        className="bg-gradient-to-br from-mint-green/5 via-soft-cyan/5 to-light-green/5"
      />

      <PreviewSection
        title="Admisión 2026"
        description="Información completa sobre el proceso de admisión para el año académico 2026."
        icon="📝"
        linkTo="/admision-2026"
        previewItems={[
          { icon: "📋", title: "Requisitos", description: "Documentos necesarios y criterios de admisión para nuevos estudiantes." },
          { icon: "📅", title: "Fechas Importantes", description: "Calendario completo del proceso de matrículas y admisiones." },
          { icon: "💬", title: "Contacto", description: "Información de contacto para consultas sobre admisión." },
        ]}
      />

      <PreviewSection
        title="Reglamento Interno"
        description="Normas y regulaciones que rigen la convivencia y el funcionamiento del establecimiento."
        icon="📖"
        linkTo="/reglamento"
        previewItems={[
          { icon: "⚖️", title: "Normas Generales", description: "Principios fundamentales que guían nuestra institución." },
          { icon: "👥", title: "Convivencia", description: "Reglas para una convivencia respetuosa y armoniosa." },
          { icon: "📚", title: "Académico", description: "Normativas relacionadas con el proceso de enseñanza-aprendizaje." },
        ]}
        className="bg-gradient-to-br from-light-green/5 via-soft-cyan/5 to-mint-green/5"
      />
    </div>
  );
};

export default Home;
