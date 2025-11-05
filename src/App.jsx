import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Staff from './pages/Staff';
import Admission2026 from './pages/Admission2026';
import Regulations from './pages/Regulations';
import Calendar from './pages/Calendar';
import Achievements from './pages/Achievements';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-pure-white">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/funcionarios" element={<Staff />} />
            <Route path="/admision-2026" element={<Admission2026 />} />
            <Route path="/reglamento" element={<Regulations />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/logros" element={<Achievements />} />
            <Route path="/talleres" element={<Workshops />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
