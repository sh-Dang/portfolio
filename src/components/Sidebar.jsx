import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Stacks</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
