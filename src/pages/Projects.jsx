import React, { useState } from 'react';
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
    detailedDescription: '이 프로젝트는 CRUD에 대한 기본 감각을 익히기 위해 WMS(Warehouse Management System)의 핵심 기능을 구현한 데스크톱 애플리케이션입니다. 입고, 출고, 재고 관리 및 보고서 생성 기능을 포함하고 있습니다. Java Swing을 사용하여 GUI를 구축했으며, JDBC를 통해 데이터베이스와 연동됩니다.',
    imageUrl: `${import.meta.env.BASE_URL}shinlogis.png`,
    githubUrl: 'https://github.com/zero5ive/Shinlogis-WMS',
  },
  {
    title: 'Peach-Store',
    description: 'Spring framework를 사용하여 만든 쇼핑몰 웹사이트입니다.',
    detailedDescription: 'Spring MVC, Spring Security, JPA(Hibernate)를 사용하여 개발한 온라인 쇼핑몰입니다. 사용자 회원가입, 로그인, 상품 검색, 장바구니, 주문 및 결제 기능이 구현되어 있습니다. 프론트엔드는 Thymeleaf와 Bootstrap을 사용했습니다.',
    imageUrl: `${import.meta.env.BASE_URL}peachstore.png`,
    githubUrl: 'https://github.com/zero5ive/Peach-Store',
  },
  {
    title: 'Tabletopia',
    description: 'Spring Boot를 사용하여 만든 실시간 레스토랑 예약 서비스 입니다.',
    detailedDescription: '실시간 예약 기능 구현을 위해 WebSocket을 활용했으며, 점주와 고객 간의 양방향 통신을 지원합니다. Spring Boot, Spring Security, JPA, QueryDSL을 사용하여 백엔드를 구축했고, Redis를 이용해 예약 가능 시간 등 빠른 조회가 필요한 데이터를 캐싱 처리했습니다. 프론트엔드는 React와 함께 Tailwind CSS를 사용해 구현되었습니다.',
    imageUrl: `${import.meta.env.BASE_URL}TableTopia.png`,
    githubUrl: 'https://github.com/zero5ive/Tabletopia',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              {expandedIndex === index && (
                <p className="detailed-description">{project.detailedDescription}</p>
              )}
              <div className="project-links">
                <button onClick={() => handleToggle(index)} className="toggle-button">
                  {expandedIndex === index ? '간략히' : '자세히 보기'}
                </button>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;