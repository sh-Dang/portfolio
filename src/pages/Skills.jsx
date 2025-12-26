import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import javaLogo from '../assets/javalogo.png';
import htmlLogo from '../assets/htmllogo.png';
import springLogo from '../assets/springlogo.png';
import redisLogo from '../assets/redislogo.png';
import jpaLogo from '../assets/jpaLogo.png';

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
      { logoUrl: javaLogo, proficiency: 70 }, //Java
      { logoUrl: htmlLogo, proficiency: 80 }, //HTML
      { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', proficiency: 75 }, //javaScript
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { logoUrl: springLogo, proficiency: 65 }, //Spring Boot
      { name: 'React', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', proficiency: 60 }, //React
    ],
  },
  {
    title: 'Databases/ORM',
    skills: [
      { logoUrl: 'https://static.cdnlogo.com/logos/m/10/mysql.svg', proficiency: 70 },
      { logoUrl: redisLogo, proficiency: 50 },
      { logoUrl: jpaLogo, proficiency: 50 }

    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { logoUrl: 'https://static.cdnlogo.com/logos/g/46/git.svg', proficiency: 80 },
      { logoUrl: 'https://static.cdnlogo.com/logos/d/17/docker.svg', proficiency: 50 },
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
                <div key={sIndex} className="skill-item">
                  <div className="skill-card">
                    <img src={skill.logoUrl} alt={`${skill.name} logo`} className="skill-logo" />
                    <span>{skill.name}</span>
                  </div>
                  <div className="proficiency-bar-container">
                    <div
                      className="proficiency-bar"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="proficiency-text">{skill.proficiency}%</span>
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

