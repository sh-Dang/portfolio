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
      <img src="/leesphoto.png" alt="이세형 사진" className="profile-photo" />
      <h2>About Me</h2>
      <p>
        안녕하세요! 저는 백엔드 개발자를 희망하고있는 이세형입니다.<br></br>
        이곳은 저의 기술적인 여정과 프로젝트들을 기록한 공간입니다.<br></br>
        안정적이면서 확장 가능한 시스템을 만드는 데 큰 관심을 가지고 있습니다.
      </p>
      <div className="social-links">
        <a href="https://github.com/zero5ive" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/gitlogo.png" alt="GitHub" className="social-icon" />
          <span>GitHub</span>
        </a>
        <a href="https://velog.io/@lee_dang/posts" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/velogimage.png" alt="Velog" className="social-icon" />
          <span>Velog</span>
        </a>
      </div>
    </motion.div>
  );
};

export default About;
