import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Achievements from './pages/Achievements';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-pure-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <Home />
        <Calendar />
        <Achievements />
        <Workshops />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
