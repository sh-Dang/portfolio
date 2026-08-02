import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import './Projects.css';
import { details } from 'framer-motion/client';


const renderContent = (content) => {
  const elements = [];
  let listBuffer = [];

  const flushList = (key) => {
    if (listBuffer.length > 0) {
      elements.push(<ul key={`ul-${key}`}>{listBuffer}</ul>);
      listBuffer = [];
    }
  };

  content.split('\n').forEach((line, index) => {
    if (line.trim() === '') return;
    if (line.startsWith('## ')) {
      flushList(index);
      elements.push(<h3 key={index}>{line.substring(3)}</h3>);
      return;
    }
    if (line.startsWith('### ')) {
      flushList(index);
      elements.push(<h4 key={index}>{line.substring(4)}</h4>);
      return;
    }
    if (line.startsWith('- ')) {
      listBuffer.push(<li key={index}>{line.substring(2)}</li>);
      return;
    }
    if (line === '---') {
      flushList(index);
      elements.push(<hr key={index} />);
      return;
    }
    flushList(index);
    const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    elements.push(<p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />);
  });
  flushList('end');

  return elements;
};

const ProjectDetail = ({ project }) => (
  <div className="project-detail-inline">
    {project.period && <p><b>기간 : </b>{project.period}</p>}
    {project.team && <p><b>팀 구성 : </b>{project.team}</p>}
    <div className="detailed-description-content">
      {Array.isArray(project.detailedDescription)
        ? project.detailedDescription.map((section, index) => (
            <div key={index} className="detail-section">
              <h4>{section.title}</h4>
              {renderContent(section.content)}
            </div>
          ))
        : renderContent(project.detailedDescription)}
    </div>
  </div>
);
  
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
    title: 'Tabletopia (2025.09.08 ~ 2025.10.20)',
    description:
    '1. Spring Boot 기반의 실시간 레스토랑 예약 서비스입니다. \n\n' +
    '2. Hibernate: 객체 지향 프로그래밍과 관계형 데이터베이스 간의 매핑을 자동화하여 생산성을 높이고 SQL 작성 부담을 줄이기 위해 사용했습니다.\n\n' +
    '3. Redis: RefreshToken 검증 레이어를 DB에서 Redis로 변경하여 평균 응답시간을 697ms → 324ms로 53.5% 개선하였습니다. \n\n' +
    '4. Redis도입으로 발생한 SPOF를 Sentinel 도입으로 제거했으며, Docker를 활용해 환경 변화에 유연하게 대응했습니다.',
    period: '2025.09.08 ~ 2025.10.20 (6주)',
    team: '5명',
    detailedDescription: [
      {
        title: '개요',
        content: '실시간으로 레스토랑 테이블 예약 및 웨이팅을 관리하는 플랫폼입니다.\n고객은 원하는 레스토랑의 방문 시간과 테이블을 즉시 예약하거나 웨이팅 등록을 할 수 있으며, AI 챗봇을 통해 개인 취향에 맞는 레스토랑을 추천받을 수 있습니다. 레스토랑은 관리자 대시보드를 통해 테이블 예약 및 웨이팅 현황을 실시간으로 확인하며 매장을 효율적으로 관리할 수 있습니다.',
      },
      {
        title: '역할',
        content: '풀스택 개발자로서 UI 설계, JWT 기반 인증/인가, Redis를 활용한 세션 관리 기능을 담당했습니다. 또한 TossPayments API를 연동해 예약금 결제 기능을 구현했습니다.',
      },
      {
        title: 'Skills',
        content: '- Backend : Java, Spring Boot, Spring Security, JPA/Hibernate\n- Frontend : React, JavaScript, HTML5, CSS3, Bootstrap\n- Database: MySQL, Redis\n- API Integration : OpenAI API, Google Maps API, Toss Payments\n- Infra : AWS, WebSocket, JWT\n- Tools : Gradle, Lombok, Git, GitHub, Jira',
      },
      {
        title: 'JWT 기반 인증/인가 시스템',
        content: 'Spring Security와 JWT를 활용해 Stateless 인증 시스템을 구현했습니다. Access Token과 Refresh Token을 분리해 보안성을 강화했고, Refresh Token은 Redis에 저장해 안전하게 관리했습니다. 사용자 역할(고객/레스토랑/관리자)에 따라 접근 권한을 차등 적용하고, 각 기능별 인가(Authorization) 처리를 구현했습니다.',
      },
      {
        title: 'Redis 기반 세션 관리 & 성능 개선',
        content: 'Refresh Token 검증 레이어를 DB 조회에서 Redis 조회로 전환해 평균 응답시간을 697ms에서 324ms로 53.5% 단축했습니다. 브라우저 Cookie와 Redis에 저장된 값을 대조해 Token 유효성을 검증하는 방식으로 Stateless JWT 환경에서도 세션 보안을 확보했습니다. Redis 도입으로 새로 생긴 SPOF는 Sentinel 구성을 통해 제거했고, Docker로 배포 환경을 컨테이너화해 인프라 변화에 유연하게 대응했습니다.',
      },
      {
        title: 'Toss Payments 결제 시스템 연동',
        content: 'Toss Payments API를 연동해 예약 보증금 결제 기능을 구현했습니다. 결제 승인 후 예약이 확정되며, 노쇼(No-show) 발생 시 보증금을 차감하고 정상 방문 시에는 결제 금액에서 차감하는 방식으로 노쇼 리스크를 관리했습니다. 결제 실패 시 트랜잭션을 롤백해 데이터 정합성을 보장했습니다.',
      },
      {
        title: '회고',
        content: '실시간 데이터 처리와 동시성 제어의 중요성을 깊이 체감한 프로젝트였습니다. 팀원들과 구현 파트와 기술적 이해를 서로 공유하고 토론하는 과정이 특히 의미 있었습니다. Redis로 실시간성과 성능을 동시에 확보하는 방법을 배웠고, TossPayments를 비롯한 다양한 외부 API를 연동하며 실무형 API 통합 역량도 키울 수 있었습니다. 다음 프로젝트에서는 운영 환경의 안정성과 확장성을 고려한 설계와 모니터링에 더 신경 쓰고 싶습니다.',
      },
    ],
    imageUrl: `${import.meta.env.BASE_URL}TableTopia.png`,
    githubUrl: 'https://github.com/sh-Dang/Tabletopia',
  },
  {
    title: 'Peach-Store (2025.07.10 ~ 2025.08.05)',
    description:
    '1. Spring MVC 기반의 전자상거래 플랫폼입니다. \n\n' + 
    '2. MyBatis: SQL을 직접 작성하여 복잡한 쿼리를 제어하고, 동적 쿼리 생성으로 유연한 데이터 처리를 구현하기 위해 사용했습니다. \n\n' +
    '3. MySQL: 트랜잭션과 데이터 정합성이 중요한 주문, 회원, 제품 정보를 안전하게 저장하기 위해 사용했습니다. \n\n' + 
    '4. Soft Delete 패턴을 적용하여 데이터 무결성을 유지하고, 주문 스냅샷 시스템으로 주문 시점의 제품 정보를 보존했습니다.',
    period: '2025.07.10 ~ 2025.08.05 (4주)',
    team: '5명',
    detailedDescription: [
      {
        title: '개요',
        content: 'Apple 스타일의 전자기기와 악세서리를 판매하는 전자상거래 플랫폼입니다. pPhone, pPad, pMac 등의 제품을 판매하며, 제품 커스터마이징, 회원 등급별 할인 정책, SNS 로그인, 결제 시스템 등 실제 쇼핑몰의 핵심 기능을 구현했습니다. 관리자와 고객 간의 양방향 소통(문의/답변, 리뷰)을 지원하며, 주문 시점의 제품 정보를 스냅샷으로 보존하는 기능을 포함합니다.',
      },
      {
        title: '역할',
        content: '풀스택 개발자로서 전반적인 frontend 디자인과 회원가입/로그인 기능을 담당하여 개발했습니다.',
      },
      {
        title: 'Skills',
        content: '- Backend : Java, Spring MVC, MyBatis\n- Frontend : JSP, Bootstrap, jQuery\n- Database : MySQL\n- API Integration : 카카오/네이버 소셜 로그인, 다음 우편번호 API, 토스 페이먼츠\n- Infra : Apache Tomcat\n- Tools : Lombok, Git, GitHub, Jira',
      },
      {
        title: '회원가입 / 로그인',
        content: '이메일 인증과 비밀번호 암호화를 포함한 회원가입 기능을 구현해 회원 정보를 안전하게 저장하고 관리했습니다. 로그인한 회원에게는 장바구니, 주문 내역, 관심 상품 등 개인화된 기능을 제공했으며, 카카오/네이버 소셜 로그인을 연동해 가입 편의성을 높였습니다.',
      },
      {
        title: '유저별 장바구니 생성 및 조회',
        content: '회원가입 시 유저별 장바구니가 자동으로 생성되도록 구현했습니다. 로그인한 유저는 본인의 장바구니를 조회하고, 수량 변경/선택 삭제/전체 삭제가 가능합니다. 장바구니에서 주문을 생성하면 선택한 제품 정보가 주문 테이블로 스냅샷 복사되고, 주문 완료 후 해당 제품은 장바구니에서 자동으로 제거됩니다.',
      },
      {
        title: 'Soft Delete 패턴 적용',
        content: '제품, 리뷰, 회원 등 주요 테이블에 `is_active` 컬럼을 추가해 Soft Delete 패턴을 적용했습니다. 삭제 요청 시 물리적으로 삭제하지 않고 `is_active = false`로 변경해 화면에서만 숨기는 방식으로, 연관된 주문 내역이나 통계 데이터의 무결성을 유지하면서도 추후 복구와 분석이 가능하도록 설계했습니다.',
      },
      {
        title: '회고',
        content: 'Spring MVC의 전체 흐름과 MyBatis를 통한 데이터베이스 연동을 실전에서 깊이 이해할 수 있었습니다. 특히 주문 스냅샷 시스템을 설계하면서 데이터 무결성과 이력 관리의 중요성을 체감했습니다. 팀원들과 공통 모듈을 만들고 코드 리뷰를 진행하며 커뮤니케이션의 중요성도 배웠고, 다음 프로젝트에서는 테스트 코드 작성과 성능 최적화에 더 집중하고 싶습니다.',
      },
    ],
    imageUrl: `${import.meta.env.BASE_URL}peachstore.png`,
    githubUrl: 'https://github.com/zero5ive/Peach-Store',
  },
];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

// const Projects = ({ projects }) => {
const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
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
          <React.Fragment key={index}>
            <div className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-info">
                <h4
                  style={{
                    textDecoration: project.demoUrl ? 'underline' : 'none',
                    cursor: project.demoUrl ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (project.demoUrl) window.open(project.demoUrl, '_blank');
                  }}
                >
                  {project.title}
                </h4>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
                    GitHub Repository
                  </a>
                  <button onClick={() => toggleExpand(index)} className="toggle-button">
                    {expandedIndex === index ? '접기' : '자세히 보기'}
                  </button>
                </div>
              </div>
            </div>
            {expandedIndex === index && <ProjectDetail project={project} />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;