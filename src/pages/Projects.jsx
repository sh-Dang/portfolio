import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

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

const projects = [
  {
    title: 'Shinlogis-WMS',
    description: 'Java의 swing을 사용하여 만든 창고관리 시스템입니다.',
    imageUrl: `${import.meta.env.BASE_URL}shinlogis.png`,
    githubUrl: 'https://github.com/zero5ive',
  },
  {
    title: 'Peach-Store',
    description: 'Spring framework를 사용하여 만든 쇼핑몰 웹사이트입니다.',
    imageUrl: `${import.meta.env.BASE_URL}peachstore.png`,
    githubUrl: 'https://github.com/zero5ive',
  },
  {
    title: 'Tabletopia',
    description: 'Spring Boot를 사용하여 만든 실시간 레스토랑 예약 서비스 입니다.',
    imageUrl: `${import.meta.env.BASE_URL}TableTopia.png`,
    githubUrl: 'https://github.com/zero5ive',
  },
];

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;