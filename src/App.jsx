import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Main from './pages/Main';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar/>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;