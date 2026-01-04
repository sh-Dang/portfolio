import React from 'react';
import { motion } from 'framer-motion';
import './Experiences.css';

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

const Experiences=()=>{
    return(
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="section"
            >
                <div className="section-content">
                  <h2>Experiences</h2>
                  <div className="experience-item">
                    <h3>Java 백엔드 개발자 양성과정 수료 | 2025.04 - 2025.10 (6개월)</h3>
                    <ul>
                      <li>Java, Spring Boot 기반 웹 애플리케이션 개발 및 RESTful API 설계/구현</li>
                      <li>MySQL을 활용한 데이터베이스 설계, 쿼리 최적화 및 트랜잭션 관리</li>
                      <li>Git을 통한 버전 관리 및 협업 개발 프로세스 경험</li>
                      <li>MVC 패턴을 적용한 유지보수 가능한 코드 작성</li>
                      <li>팀 프로젝트를 통한 요구사항 분석, API 명세서 작성, 배포 경험</li>
                    </ul>
                  </div>
                </div>
            </motion.div>
    )

}

export default Experiences;
