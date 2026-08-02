import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

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

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      {/* 이미지 배경 히어 비주얼 소개 박스 (좌우로 넓게 배치) */}
      <div className="hero-box">
        <h1 className="hero-title">안녕하세요<br></br>불편함과 문제해결을 즐기는 개발자 이세형입니다.</h1>
      </div>

      <div className="about-me-container">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            안녕하세요! 웹개발자 이세형입니다.<br></br>
            저는 Java 백엔드 개발자 부트캠프로 시작하여 Spring기반 웹 애플리케이션 개발 역량을 쌓았습니다.<br></br>
            6개월간의 팀 프로젝트에서 팀장으로 개발 방향을 조율하며 리더십과 협업경험을 쌓았으며<br></br>
            다년간 다양한 업무환경에서 이해관계자들과 소통하며 원활한 커뮤니케이션 능력또한 길렀습니다.<br></br>
            현재도 개발자로서 역량을 높이기 위해 새로운 기술과 언어를 꾸준히 학습하며 성장하고 있습니다.
          </p>
          <h2>Contacts</h2>
          <p>
            Tel : 010-9009-0592<br></br>
            E-mail : henrys200632@gmail.com<br></br>
            </p>
      <div className="social-links">
        <a href="https://github.com/sh-Dang" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={`https://github.com/fluidicon.png`} alt="GitHub" className="social-icon" />
          <span>GitHub</span>
        </a>
        <a href="https://sehyung.tistory.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={`${import.meta.env.BASE_URL}tstoryicon.png`} alt="Velog" className="social-icon" />
          <span>블로그</span>
        </a>
      </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
