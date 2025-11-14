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
      <p>
        이곳에 진행했던 프로젝트들에 대한 설명을 추가할 예정입니다.
        각 프로젝트의 기술 스택, 역할, 그리고 성과를 중심으로 작성해주세요.
        (예: 쇼핑몰 백엔드, 블로그 API 서버 등)
      </p>
      {/* 프로젝트 예시 */}
      <div>
        <h4>프로젝트 1: Shinlogis-WMS</h4>
        <p>설명: Java의 swing을 사용하여 만든 창고관리 시스템입니다.</p>
        <a href="https://github.com/zero5ive" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <div>
        <h4>프로젝트 2: Peach-Store</h4>
        <p>설명: Spring framework를 사용하여 만든 쇼핑몰 웹사이트입니다.</p>
        <a href="https://github.com/zero5ive" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <div>
        <h4>프로젝트 3: Tabletopia</h4>
        <p>설명: Spring Boot를 사용하여 만든 실시간 레스토랑 예약 서비스 입니다.</p>
        <a href="https://github.com/zero5ive" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </motion.div>
  );
};

export default Projects;
