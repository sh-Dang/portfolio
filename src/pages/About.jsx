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
            부트캠프 팀 프로젝트에서 팀장으로 개발 방향을 조율하며
            협업의 중요성과 커뮤니케이션 역량을 키웠습니다.

          </p>
          <h2>Contacts</h2>
          <p>
            e-mail : henrys200632@gmail.com<br></br>
            phone : 010-9009-0592
            
      <div className="social-links">
        <a href="https://github.com/sh-Dang" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={`${import.meta.env.BASE_URL}gitlogo.png`} alt="GitHub" className="social-icon" />
          <span>GitHub</span>
        </a>
        <a href="https://velog.io/@lee_dang/posts" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={`${import.meta.env.BASE_URL}velogimage.png`} alt="Velog" className="social-icon" />
          <span>Velog</span>
        </a>
      </div>

          </p>
        </div>
      </div>

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
        {/* <div className="why-backend-item">
          <h3>비즈니스와 기술을 연결하는 개발자</h3>
          <p>
            다양한 현장 경험을 통해 실제 비즈니스 문제를 이해하고, 이를 기술로 해결하는 백엔드 개발자가 되고자 합니다.<br />
            데이터를 다루고 분석했던 경험이 효율적인 데이터베이스 설계와 API 개발에 큰 강점이 될 것입니다.
          </p>
        </div>
        <div className="why-backend-item">
          <h3>검증된 꾸준함과 책임감</h3>
          <p>
            초·중·고 12년 개근으로 입증된 성실함과 일관성<br />
            장기적인 목표를 위해 끈기 있게 학습하고 성장하는 자세<br />
            맡은 코드와 시스템에 대한 책임감 있는 관리 및 유지보수 의지
          </p>
        </div>
        <div className="why-backend-item">
          <h3>빠른 학습 능력과 문제 해결 마인드</h3>
          <p>
            새로운 기술 습득에 대한 적극적인 태도<br />
            다양한 실무 경험을 통해 길러진 상황 대처 능력과 문제 해결 능력<br />
            사용자 관점에서 생각하고 최적의 솔루션을 찾는 개발자
          </p>
        </div> */}
      </div>
    </motion.div>
  );
};

export default About;
