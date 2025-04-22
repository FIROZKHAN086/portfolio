import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './Components/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Main from './pages/Main';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
    </div>
  );
}

export default App;