import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import javaLogo from '../assets/javalogo.png';
import springLogo from '../assets/springlogo.png';
import redisLogo from '../assets/redislogo.png';
import jpaLogo from '../assets/jpalogo.png';
import dockerLogo from '../assets/dockerlogo.png';

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
      { name: 'Java', logoUrl: javaLogo },
      { name: 'JavaScript', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', logoUrl: springLogo },
      { name: 'React', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    ],
  },
  {
    title: 'Databases / ORM',
    skills: [
      { name: 'MySQL', logoUrl: 'https://static.cdnlogo.com/logos/m/10/mysql.svg' },
      { name: 'Redis', logoUrl: redisLogo },
      { name: 'JPA / Hibernate', logoUrl: jpaLogo },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git / Github', logoUrl: 'https://static.cdnlogo.com/logos/g/46/git.svg' },
      { name: 'Docker', logoUrl: dockerLogo },
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
      <h2>Skills</h2>
      <div className="stacks-unified-card">
        {skillCategories.map((category, index) => (
          <div key={index} className="stack-row">
            <div className="stack-category-title">{category.title}</div>
            <div className="stack-pills-container">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="tech-pill">
                  {skill.logoUrl && (
                    <img src={skill.logoUrl} alt={`${skill.name} logo`} className="tech-pill-icon" />
                  )}
                  <span className="tech-pill-name">{skill.name}</span>
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
