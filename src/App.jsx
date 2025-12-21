import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import './App.css';
import Certificated from './pages/Certificated';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <main className="main">
            {/* about me */}
            <section id="about">
              <About />
            </section>
            {/* 프로젝트 */}
            <section id="projects">
              <Projects />
            </section>
            {/* 기술스택 */}
            <section id="skills">
              <Skills />
            </section>
            {/* 자격증 */}
            <section id="certificated">
              <Certificated/>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
