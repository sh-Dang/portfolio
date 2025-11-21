import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: '-100vh',
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '100vh',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      <h2>Tech Stacks</h2>
      <ul>
        <li>Languages: Java, HTML, JavaScript</li>
        <li>Frameworks: Spring Boot, React.js</li>
        <li>Databases: MySQL, Oracle</li>
        <li>Tools: Git, Docker</li>
      </ul>
    </motion.div>
  );
};

export default Skills;
