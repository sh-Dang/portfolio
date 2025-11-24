import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
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

const projects = [
  {
    title: 'Tabletopia',
    description: 'Spring Boot를 사용하여 만든 실시간 레스토랑 예약 서비스 입니다.',
    period: '2025.09.08 ~ 2025.10.20 (6주)',
    team: '5명',
    detailedDescription: [
      {
        title: '개요',
        content: '실시간으로 레스토랑 테이블 예약 및 웨이팅을 관리하는 종합 플랫폼입니다. 고객은 레스토랑의 방문 시간과 원하는 테이블을 즉시 예약하거나 웨이팅을 등록할 수 있으며, AI 챗봇을 통해 개인 취향에 맞는 레스토랑을 추천받을 수 있습니다. 레스토랑은 직관적인 관리자 대시보드를 통해 테이블 예약 및 웨이팅 현황을 실시간으로 확인하며 매장을 효율적으로 관리할 수 있습니다.',
      },
      {
        title: '역할',
        content: '풀스택 개발자로서 JWT 인증/인가, Redis를 활용한 캐싱 및 세션 관리를 담당했습니다. 또한 TossPayments API를 연동하여 예약금을 결제하는 기능을 구현했습니다.',
      },
      {
        title: 'Skills',
        content: '- Backend : Java, Spring Boot, Spring Security, JPA/Hibernate\n- Frontend : React, JavaScript, HTML5, CSS3, Bootstrap\n- Database: MySQL, Redis\n- API Integration : OpenAI API, Google Maps API, Toss Payments\n- Infra : AWS, WebSocket, JWT\n- Tools : Gradle, Lombok, Git, GitHub, Jira',
      },
      {
        title: 'JWT 기반 인증/인가 시스템',
        content: '### AS-IS\n- 세션 기반 인증 방식 사용 → 서버 메모리 사용량 증가\n- 분산 환경에서 세션 동기화 문제 발생 가능\n\n### TO-BE\n- Spring Security와 JWT를 활용하여 Stateless 인증 시스템 구현\n- Access Token / Refresh Token 분리로 보안성 강화\n- Refresh Token은 Redis에 저장하여 안전하게 관리\n- 사용자 역할(고객/레스토랑/관리자)에 따라 접근 권한 차등 적용\n- 각 기능별 인가(Authorization) 처리 구현',
      },
      {
        title: 'Redis 기반 세션 관리',
        content: '### AS-IS\n- 세션 기반 인증 시 서버 메모리에 사용자 세션 저장 → 분산 환경에서 세션 동기화 문제 발생\n- Refresh Token 관리 기능 부재\n\n### TO-BE\n- Redis를 활용하여 Refresh Token 안전하게 저장\n- 브라우저에서 받은 Cookie와 대조하여 Token 유효성 검증\n- Stateless JWT 환경에서 세션 관리 및 보안 강화',
      },
      {
        title: 'Toss Payments 결제 시스템 연동',
        content: '### AS-IS\n- 예약 보증금 결제 기능 부재 → 노쇼(No-show) 발생 시 문제 우려\n\n### TO-BE\n- Toss Payments API 연동하여 예약 보증금 결제 기능 구현\n- 결제 승인 후 예약 확정, 노쇼 발생 시 보증금 차감, 정상 방문 시 환불 처리\n- 결제 실패 시 트랜잭션 롤백으로 데이터 정합성 보장',
      },
      {
        title: '개선할 점',
        content: '- 검색 기능 고도화: Elasticsearch를 활용하여 레스토랑 검색 정확도 및 속도 향상\n- 모니터링 및 로깅 강화: 운영 환경에서 발생할 수 있는 문제를 실시간으로 감지하고 대응 가능하도록 시스템 개선',
      },
      {
        title: '회고',
        content: '이번 프로젝트를 통해 실시간 데이터 처리와 동시성 제어의 중요성을 깊이 체감할 수 있었습니다.\n\n교육 목적의 프로젝트였던 만큼, 팀원들과 각자의 구현 파트와 기술적 이해를 공유하며 서로의 학습 내용을 설명하고 토론하는 과정이 매우 의미 있었습니다.\n\nRedis를 활용하여 실시간성과 성능을 동시에 확보하는 방법을 학습했고, TossPayments를 필두로 다양한 외부 API를 연동하며 실무에서 필요한 API 통합 역량도 크게 향상되었습니다.\n\n이번 경험을 바탕으로, 다음 프로젝트에서는 운영 환경에서의 안정성과 확장성을 고려한 설계와 모니터링에도 더욱 신경 쓰고 싶습니다.',
      },
    ],
    imageUrl: `${import.meta.env.BASE_URL}TableTopia.png`,
    githubUrl: 'https://github.com/zero5ive/Tabletopia',
  },
  {
    title: 'Peach-Store',
    description: 'Spring framework를 사용하여 만든 쇼핑몰 웹사이트입니다.',
    period: '2025.07.10 ~ 2025.08.05 (4주)',
    team: '5명',
    detailedDescription: [
      {
        title: '개요',
        content: 'Apple 스타일의 전자기기와 악세서리를 판매하는 전자상거래 플랫폼입니다. pPhone, pPad, pMac 등의 제품을 판매하며, 제품 커스터마이징, 회원 등급별 할인 정책, SNS 로그인, 결제 시스템 등 실제 쇼핑몰의 핵심 기능을 구현했습니다. 관리자와 고객 간의 양방향 소통(문의/답변, 리뷰)을 지원하며, 주문 시점의 제품 정보를 스냅샷으로 보존하는 기능을 포함합니다.',
      },
      {
        title: '역할',
        content: '풀스택 개발자로서 전반적인 frontend디자인과 회원가입/로그인 기능을 담담하여 개발했습니다.',
      },
      {
        title: 'Skills',
        content: '- Backend : Java, Spring MVC, MyBatis, Maven\n- Frontend : JSP, Bootstrap, jQuery\n- Database : MySQL\n- API Integration : 카카오/네이버 소셜 로그인, 다음 우편번호 API, 토스 페이먼츠\n- Infra : Apache Tomcat\n- Tools : Gradle, Lombok, Git, GitHub, Jira',
      },
      {
        title: '회원가입 / 로그인',
        content: '### AS-IS\n- 회원을 식별할 수 있는 로그인 기능의 부재\n- 회원의 계정 정보, 이메일 인증, 비밀번호 관리 기능이 없음\n- 비회원 상태에서는 구매 내역, 장바구니, 맞춤 추천 등의 개인화 서비스 이용 불가\n- 보안이나 데이터 관리 측면에서 취약함\n\n### TO-BE\n- 회원가입 시 이름, 이메일, 비밀번호 등 필수 정보를 안전하게 저장\n- 이메일 인증, 비밀번호 암호화 등 기본 보안 기능 추가\n- 로그인 시 저장된 회원 정보를 기반으로 개인화된 서비스 제공\n- 장바구니, 주문 내역, 관심 상품 등 회원 전용 기능 사용 가능\n- 소셜 로그인(Google, Apple 등) 연동으로 편의성 향상',
      },
      {
        title: '유저 별 장바구니 생성 및 조회',
        content: '### AS-IS\n- 유저가 본인이 선택한 제품들을 저장하거나 담아두는 기능의 부재\n\n### TO-BE\n- 회원가입한 유저별로 장바구니를 생성하여, 각 유저가 선택한 제품을 저장하고 조회할 수 있는 기능을 구현\n- 장바구니 생성: 회원가입 시 자동으로 유저 별 장바구니를 생성합니다.\n- 장바구니 조회: 로그인한 유저는 본인의 장바구니 내역을 확인할 수 있습니다.\n- 장바구니 수정/삭제: 제품 수량 변경, 선택 삭제, 전체 삭제 기능을 제공합니다.\n- 장바구니와 주문 연동: 장바구니에서 주문 생성 시, 선택한 제품의 정보를 주문 테이블로 복사(스냅샷)합니다. 주문 완료 후 장바구니에서 해당 제품은 자동으로 제거됩니다.',
      },
      {
        title: 'Soft Delete 패턴 적용',
        content: '### AS-IS\n- 제품, 리뷰, 회원 등의 데이터를 물리적으로 삭제(Hard Delete)할 경우 연관된 주문 내역, 통계 데이터 등에 문제가 발생할 수 있음.\n- 삭제된 데이터는 복구가 불가능하며, 통계/분석용 데이터 활용이 어려움.\n\n### TO-BE\n- 모든 주요 테이블에 `is_active` 컬럼을 추가하여 Soft Delete 패턴 적용.\n- 삭제 요청 시 실제로 데이터를 삭제하지 않고 `is_active = false`로 변경하여 화면에서는 보이지 않도록 처리.\n- Soft Delete 적용으로 데이터 무결성을 유지하며, 추후 데이터 복구 및 통계 분석 가능.\n- 회원, 제품, 리뷰 등 다양한 엔티티에 일관적으로 적용하여 시스템 안정성과 관리 편의성 향상.',
      },
      {
        title: '개선할 점',
        content: '- 제품 각인 서비스, 멤버십 자동 승급, 쿠폰 시스템 등 미구현 기능 개발\n- 예외 처리 강화 및 사용자 친화적인 에러 메시지 제공\n- 단위 테스트 및 통합 테스트 코드 작성',
      },
      {
        title: '회고',
        content: '배운 내용을 실제로 적용하며 Spring MVC의 전체적인 흐름과 MyBatis를 통한 데이터베이스 연동을 깊이 이해할 수 있었습니다. \n\n특히 주문 스냅샷 시스템을 설계하면서 데이터 무결성과 이력 관리의 중요성을 체감했습니다.\n\n 또한 팀원들과 협업하며 공통 모듈을 만들고 코드 리뷰를 진행하는 과정에서 커뮤니케이션의 중요성도 배웠습니다. 다음 프로젝트에서는 테스트 코드 작성과 성능 최적화에 더 집중하고 싶습니다.',
      },
    ],
    imageUrl: `${import.meta.env.BASE_URL}peachstore.png`,
    githubUrl: 'https://github.com/zero5ive/Peach-Store',



  },
  {
    title: 'Shinlogis-WMS',
    description: 'Java의 swing을 사용하여 만든 창고관리 시스템입니다.',
    period: '2025.06.02 ~ 2025.06.29 (4주)',
    team: '5명',
    detailedDescription: [
      {
        title: '개요',
        content: '창고 내 입고·출고·재고·보관을 종합적으로 관리하는 경량형 창고관리(WMS) 시스템입니다.\n\n실제 물류 프로세스(공급사 → 창고 → 지점)의 흐름을 기반으로, 출고 처리와 재고 차감, 파손 관리 등 핵심 업무를 수행할 수 있도록 설계되었습니다.',
      },
      {
        title: '역할',
        content: 'Java Swing 기반 클라이언트에서 다음 출고(Outbound) 기능과 주문 조회 기능을 개발했습니다.\n\n- 출고 예정 목록 조회, 주문 상세 조회 화면 구현\n- 출고 확정 시 재고 차감 및 입출고 기록 저장 로직 개발\n- 주문 데이터 필터 검색 기능 구현\n- JDBC 기반 DAO 구성 및 SQL 작성',
      },
      {
        title: 'Skills',
        content: 'Backend : Java, JDBC, MVC Pattern\n\nFrontend(UI) : Java Swing\n\nDatabase : MySQL',
      },
      {
        title: '출고(Outbound) 기능',
        content: '### AS-IS\n- 기존 출고 흐름이 정리되어 있지 않아 작업자가 물류 프로세스를 단계별로 확인하기 어려웠음\n- 재고 차감, 출고 기록 저장, 파손 처리 등 각 기능이 분리되어 있어 연계 작업 중 데이터 불일치 가능성이 존재\n- GUI가 단순 조회 수준에 그쳐 실작업 프로세스를 반영하기 어려움\n\n### TO-BE\n- 출고 조회 → 상세 확인 → 출고 확정까지 이어지는 단일 프로세스 흐름 완성\n- 출고 확정 시\n    - 재고 자동 차감\n    - 출고 기록 저장\n    - 출고 상세 테이블 기록까지 일괄 처리\n- 파손/부분 출고 등 예외 처리 로직 반영\n- Swing UI와 DAO 로직 연동으로 실제 현장의 물류 처리 흐름을 반영',
      },
      {
        title: '주문 조회(Order Inquiry)',
        content: '### AS-IS\n- 주문을 창고/지점별로 필터링하거나 상세 데이터를 확인하는 기능이 부재\n- 주문번호로만 관리되어 작업 편의성이 떨어짐\n\n### TO-BE\n- 창고·지점 기준 주문 검색 기능 추가\n- 주문 상세 팝업 구현으로 제품별 수량/상세 정보 확인 가능\n- UI에서 검색 조건 선택 → DB 조회 → 테이블 렌더링 구조로 개선',
      },
      {
        title: 'Soft Delete 적용(미니 개선 사항)',
        content: '### AS-IS\n- 출고/주문 관련 기록을 삭제하면 데이터 추적이 불가능\n- 테스트 과정에서 실수로 삭제하면 데이터 무결성 붕괴 가능\n\n### TO-BE\n- 주요 테이블에 `is_active` 플래그 추가\n- 실제 삭제 대신 상태값 변경 방식으로 처리\n- 로그·이력 관리가 쉬워지고, 테스트 시 복구도 가능',
      },
      {
        title: '개선할 점',
        content: '- 출고 프로세스에 대한 로그 시스템 추가\n- 입고/재고 모듈과의 연동 강화\n- 실제 트랜잭션 기반 처리로 확장(SPRING 전환 시도 가능)',
      },
      {
        title: '회고',
        content: 'Java Swing 기반으로 실제 업무 도메인을 반영해보며 물류 시스템의 구조를 깊이 이해할 수 있었습니다.\n\n특히 출고 확정 시 재고 차감·기록 저장·예외 처리까지 하나의 흐름으로 연결하는 과정에서 데이터 정합성의 중요성을 크게 느꼈습니다.\n\n또 팀원들과 역할을 분배해 협업하면서 UI 흐름 설계, 프로젝트의 방향성 통일등의 협업 경험을 할 수 있었고, 이후 Spring 기반 프로젝트에서도 많은 도움이 되었습니다.\n\n마지막으로 Java Swing GUI를 통한 개발로 개발 초심자였던 저에게 API활용 방법 및 API문서 학습에 큰 도움이 되어 개발자로서 기초를 닦는데 도움이 된 프로젝트였습니다.',
      },
    ],
    imageUrl: `${import.meta.env.BASE_URL}shinlogis.png`,
    githubUrl: 'https://github.com/zero5ive/Shinlogis-WMS',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-links">
                <button onClick={() => openModal(project)} className="toggle-button">
                  자세히 보기
                </button>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal project={selectedProject} onClose={closeModal} />
    </motion.div>
  );
};

export default Projects;