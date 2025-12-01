import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <main className="main">
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
