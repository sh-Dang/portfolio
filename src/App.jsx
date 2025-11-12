import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>SeHyung's Portfolio</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            안녕하세요! 저는 백엔드 개발자 이세형입니다.
            이곳은 저의 기술적인 여정과 프로젝트들을 기록한 공간입니다.
            문제 해결을 즐기며, 효율적이고 확장 가능한 시스템을 만드는 데 큰 관심을 가지고 있습니다.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>
            이곳에 진행했던 프로젝트들에 대한 설명을 추가할 예정입니다.
            각 프로젝트의 기술 스택, 역할, 그리고 성과를 중심으로 작성해주세요.
            (예: 쇼핑몰 백엔드, 블로그 API 서버 등)
          </p>
          {/* 프로젝트 예시 */}
          <div>
            <h4>프로젝트 1: Shinlogis-WMS</h4>
            <p>설명: Java의 swing을 사용하여 만든 창고관리 시스템입니다.</p>
            <a href="https://github.com/zero5ive">GitHub Repository</a>
          </div>
          <div>
            <h4>프로젝트 2: Peach-Store</h4>
            <p>설명: Java의 swing을 사용하여 만든 창고관리 시스템입니다.</p>
            <a href="https://github.com/zero5ive">GitHub Repository</a>
          </div>
          <div>
            <h4>프로젝트 3: Tabletopia</h4>
            <p>설명: Java의 swing을 사용하여 만든 창고관리 시스템입니다.</p>
            <a href="https://github.com/zero5ive">GitHub Repository</a>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <p>
            보유하고 있는 기술 스택을 나열합니다.
          </p>
          <ul>
            <li>Languages: Java, Python, JavaScript</li>
            <li>Frameworks: Spring Boot, Django, Node.js</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB</li>
            <li>Tools: Git, Docker, Jenkins</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            아래 연락처로 편하게 연락주세요.
          </p>
          <ul>
            <li>Email: henrys200632@gmail.com</li>
            <li>GitHub: https://github.com/sh-Dang</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} SeHyung's Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
