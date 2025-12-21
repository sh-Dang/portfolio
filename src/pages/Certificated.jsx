import React from 'react';
import { motion } from 'framer-motion';
import './Certificated.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const certificates = [
  {
    name: 'SQLD\n(SQL 개발자)',
    date: '2025.12',
  },
  // 다른 추후 자격증 추가 양식
  // {
  //   name: '정보처리기사',
  //   date: '2026.04',
  // },
];

const Certificated = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      <div className="section-content">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <div className="certificate-card">
                <div className="certificate-info">
                  <h3 style={{whiteSpace:'pre-line'}}>{cert.name}</h3>
                  <p>{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certificated;
