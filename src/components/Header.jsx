import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>이세형 포트폴리오</h1>
        <nav className="header-nav">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experiences">Experiences</a>
          <a href="#skills">Stacks</a>
          <a href="#certificated">Certificated</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

