import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Stacks</a>
        <a href="#certificated">Certificated</a>
      </nav>
    </div>
  );
};

export default Sidebar;
