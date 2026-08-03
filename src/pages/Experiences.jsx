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
              {/* 넥스트 아이씨티 */}
              <div className="section-content">
                <h2>Experiences / Career</h2>
                <div className="experience-item">
                  <h3>(주)넥스트아이씨티 SI사업부 | 2026.07 ~ </h3>
                    <ul>
                      <li>Java/JSP, Spring Legacy기반 웹 애플리케이션 개발</li>
                      <li>삼성SDS 수행 프로젝트 | 에스원 고객 네트워크 관리 시스템 개발</li>
                    </ul>
                </div>

              {/* 신세계 아이앤씨 */}
              <div className="experience-item">
                <h3>Java 백엔드 개발자 양성과정 수료 | 2025.04 - 2025.10</h3>
                <ul>
                  <li>Java, Spring 기반 웹 애플리케이션 개발 및 RESTful API 설계·구현</li>
                  <li>외부API(Toss Payments) 연동을 통한 결제기능 및 결제 프로세스 구축</li>
                  <li>MySQL을 활용한 데이터베이스 설계, 쿼리 최적화 및 트랜잭션 관리</li>
                  <li>Git / Jira를 활용한 버전 관리 및 협업 개발 프로세스 경험</li>
                  <li>API 명세서 및 코딩 컨벤션 작성 등 개발 가이드라인 수립 경험</li>
                  
                  <li>Docker도입을 통한 실행환경 안정화 경험</li>
                  <li>웹 애플리케이션의 요청 처리 과정과 시스템 아키텍처 학습 — Domain, URL, HTTP 통신부터 Static/DB/VM Layer까지 서비스 동작 구조 이해</li>
                </ul>
              </div>
            </div>
            </motion.div>
    )

}

export default Experiences;
