import React from 'react';
import { motion } from 'framer-motion';

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
  duration: 1.5,
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
      <h2>Skills</h2>
      <p>
        보유하고 있는 기술 스택을 나열합니다.
      </p>
      <ul>
        <li>Languages: Java, Python, JavaScript</li>
        <li>Frameworks: Spring Boot, Django, Node.js</li>
        <li>Databases: MySQL, PostgreSQL, MongoDB</li>
        <li>Tools: Git, Docker, Jenkins</li>
      </ul>
    </motion.div>
  );
};

export default Skills;
