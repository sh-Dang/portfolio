import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <main className="main">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
