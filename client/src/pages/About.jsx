const education = [
  {
    title: 'Information Systems Engineering',
    org: 'UTN Regional Buenos Aires (FRBA)',
    dates: 'Mar 2026 · present',
    note: 'First year in progress.',
  },
  {
    title: 'Computer Technician',
    org: 'Escuela Técnica N°36 DE 15 "Alte. Guillermo Brown", CABA',
    dates: '2020 · 2025',
    note: '"Plant IT" project: Samsung Solve for Tomorrow semifinalist.',
  },
]

const experience = [
  {
    title: 'PC building, cleaning and optimization',
    org: 'Neumann PC (own business)',
    dates: 'Jan 2024 · present',
    bullets: [
      'Custom PC assembly based on each client\'s needs.',
      'Deep hardware cleaning and preventive maintenance.',
      'Software optimization to improve machine performance.',
    ],
  },
  {
    title: 'Blockchain intern',
    org: 'ETH KIPU',
    dates: 'Aug 2024 · Nov 2024',
    bullets: [
      'Designed and developed smart contracts in Solidity.',
      '50-hour professional practicum certified by the CABA Technical Schools Directorate.',
    ],
  },
  {
    title: 'Thumbnail designer',
    org: 'Fiverr ("matiasedit")',
    dates: 'Aug 2022 · present',
    bullets: [
      'Custom YouTube thumbnails for international clients.',
      'Direct client communication and order management, with verified reviews on profile.',
    ],
  },
]

const courses = [
  'Full Stack Web Development Jr. · Generación T / Streambe (240 hs)',
  'AI with Python · Talento Tech, GCBA (40 hs)',
  'Ethereum Development · ETH KIPU (50 hs)',
  'Database Fundamentals · Platzi',
  'REST APIs with JavaScript · Platzi',
  'Responsive Web Design · freeCodeCamp',
  'Unity Game Development · Aprendé Programando, GCBA',
  'Digital Marketing Tools · CFP N°25, GCBA',
]

function About() {
  return (
    <section id="about" className="flex">
      <h2>ABOUT <span className="blue-text">ME</span></h2>
      <div id="contain-about">
        <div id="personal-info">
          <h3>PERSONAL INFORMATION</h3>
          <div id="info">
            <p><span className="text-secondary">Full Name:</span> Matias Joel Sesto</p>
            <p><span className="text-secondary">Location:</span> CABA (Saavedra), Argentina</p>
            <p><span className="text-secondary">Availability:</span> Open to opportunities</p>
            <p><span className="text-secondary">Languages:</span> Spanish (native), English (B1), French (A1)</p>
          </div>
        </div>
        <div id="profile">
          <h3>PROFILE</h3>
          <p>Computer Technician currently studying Information Systems Engineering at UTN FRBA. Hands-on experience in full stack web development, smart contracts (Solidity/Ethereum) and building, optimizing and maintaining PCs through my own business. I enjoy turning ideas into functional and well-structured solutions, and I value clear communication and responsibility.</p>
        </div>
        <div id="how-i-work">
          <h3>HOW I WORK</h3>
          <p>I focus on writing clean, readable, and maintainable code. I understand the problem before coding and iterate until the solution feels solid and intuitive. I adapt quickly to new technologies and I&apos;m constantly learning.</p>
        </div>
      </div>

      <h2><span className="blue-text">MY</span> SKILLS</h2>
      <div id="skills">
        <div className="card zoom">
          <img src="/img/skills/javascript.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/nodedotjs.svg" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/express.svg" alt="Express" />
          <p>Express</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/mongodb.svg" alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/vite.svg" alt="Vite" />
          <p>Vite</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/mysql.png" alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/php.png" alt="PHP" id="php" />
          <p>PHP</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/git.png" alt="Git" />
          <p>Git</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/java.png" alt="Java" />
          <p>Java</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/solidity.png" alt="Solidity" />
          <p>Solidity</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/python.png" alt="Python" />
          <p>Python</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/arduino.png" alt="Arduino" />
          <p>Arduino</p>
        </div>
      </div>

      <h2><span className="blue-text">MY</span> EDUCATION</h2>
      <div className="timeline">
        {education.map((e) => (
          <div className="timeline-card" key={e.title}>
            <h3>{e.title}</h3>
            <p className="timeline-org">{e.org}</p>
            <p className="timeline-dates">{e.dates}</p>
            {e.note && <p className="timeline-note">{e.note}</p>}
          </div>
        ))}
      </div>

      <h2><span className="blue-text">MY</span> EXPERIENCE</h2>
      <div className="timeline">
        {experience.map((x) => (
          <div className="timeline-card" key={x.title}>
            <h3>{x.title}</h3>
            <p className="timeline-org">{x.org}</p>
            <p className="timeline-dates">{x.dates}</p>
            <ul className="timeline-bullets">
              {x.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2><span className="blue-text">CERTIFIED</span> COURSES</h2>
      <div id="courses">
        {courses.map((c) => <p className="course-chip" key={c}>{c}</p>)}
      </div>
    </section>
  )
}

export default About
