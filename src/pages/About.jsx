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
      <div className="about-me-container">
        <img src={`${import.meta.env.BASE_URL}leesphoto.png`} alt="이세형 사진" className="profile-photo" />
        
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            안녕하세요! 저는 Java 백엔드 개발자를 희망하고있는 이세형입니다.<br></br>
            비전공자로 시작했지만, Java 백엔드 개발자 양성과정에서 Spring Boot 기반 웹 애플리케이션 개발 역량을 쌓았습니다.<br></br>
            부트캠프 팀 프로젝트에서 팀장으로 개발 방향을 조율하며 협업경험을 쌓았으며<br></br>
            다년간의 프랜차이즈 현장 근무경험으로 다양한 사람들과의 커뮤니케이션 역량과 문제상황 대처능력을 키웠습니다.
          </p>
          <h2>Contacts</h2>
          <p>
            E-mail : henrys200632@gmail.com<br></br>
            Phone : 010-9009-0592
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
