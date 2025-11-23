import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import javaLogo from '../assets/javalogo.png';
import htmlLogo from '../assets/htmllogo.png';
import springLogo from '../assets/springlogo.png';
import redisLogo from '../assets/redislogo.png';

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

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { logoUrl: javaLogo },
      { logoUrl: htmlLogo },
      { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { logoUrl: springLogo },
      { name: 'React', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { logoUrl: 'https://static.cdnlogo.com/logos/m/10/mysql.svg' },
      { logoUrl: redisLogo }
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { logoUrl: 'https://static.cdnlogo.com/logos/g/46/git.svg' },
      { logoUrl: 'https://static.cdnlogo.com/logos/d/17/docker.svg' },
    ],
  },
];


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
      <div className="category-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-card">
                  <img src={skill.logoUrl} alt={`${skill.name} logo`} className="skill-logo" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

