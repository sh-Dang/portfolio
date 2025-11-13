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
      <h2>About Me</h2>
      <p>
        안녕하세요! 저는 백엔드 개발자 이세형입니다.
        이곳은 저의 기술적인 여정과 프로젝트들을 기록한 공간입니다.
        문제 해결을 즐기며, 효율적이고 확장 가능한 시스템을 만드는 데 큰 관심을 가지고 있습니다.
      </p>
    </motion.div>
  );
};

export default About;
