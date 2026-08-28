import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import CertificateModal from '../components/CertificateModal'

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

// Skills agrupadas por categoría. El campo `img` es el archivo en /img/skills/.
const skillGroups = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', img: 'html.png' },
      { name: 'CSS', img: 'css.png' },
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'React', img: 'react.png' },
      { name: 'Vite', img: 'vite.svg' },
    ],
  },
  {
    label: 'Backend & Databases',
    items: [
      { name: 'Node.js', img: 'nodedotjs.svg' },
      { name: 'Express', img: 'express.svg' },
      { name: 'PHP', img: 'php.png' },
      { name: 'MySQL', img: 'mysql.png' },
      { name: 'MongoDB', img: 'mongodb.svg' },
    ],
  },
  {
    label: 'Languages',
    items: [
      { name: 'Java', img: 'java.png' },
      { name: 'Python', img: 'python.png' },
      { name: 'Solidity', img: 'solidity.png' },
    ],
  },
  {
    label: 'Tools & Hardware',
    items: [
      { name: 'Git', img: 'git.png' },
      { name: 'Arduino', img: 'arduino.png' },
    ],
  },
]

// Cada curso tiene una ruta `cert` de antemano. Tirá los PDFs en public/pdf/certs/
// con ese nombre y el modal los muestra/descarga automáticamente.
const courses = [
  { title: 'Full Stack Web Development Jr.', provider: 'Generación T / Streambe', hours: '240 hs', year: '2024', cert: '/pdf/certs/fullstack-web-dev-jr.pdf' },
  { title: 'AI with Python', provider: 'Talento Tech, GCBA', hours: '40 hs', year: '2025', cert: '/pdf/certs/ai-with-python.pdf' },
  { title: 'Ethereum Development', provider: 'ETH KIPU', hours: '50 hs', year: '2024', cert: '/pdf/certs/ethereum-development.pdf' },
  { title: 'Database Fundamentals', provider: 'Platzi', year: '2025', cert: '/pdf/certs/database-fundamentals.pdf' },
  { title: 'REST APIs with JavaScript', provider: 'Platzi', year: '2025', cert: '/pdf/certs/rest-apis-javascript.pdf' },
  { title: 'Responsive Web Design', provider: 'freeCodeCamp', year: '2025', cert: '/pdf/certs/responsive-web-design.pdf' },
  { title: 'Unity Game Development', provider: 'Aprendé Programando, GCBA', year: '2023', cert: '/pdf/certs/unity-game-dev.pdf' },
  { title: 'Digital Marketing Tools', provider: 'CFP N°25, GCBA', year: '2025', cert: '/pdf/certs/digital-marketing.pdf' },
]

const facts = [
  { label: 'Full Name', value: 'Matias Joel Sesto' },
  { label: 'Location', value: 'CABA (Saavedra), Argentina' },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Languages', value: 'Spanish, English, French' },
]

const values = ['Clean, readable code', 'Understand the problem first', 'Iterate until it feels right', 'Always learning']

function About() {
  const [course, setCourse] = useState(null)

  return (
    <section id="about" className="flex">
      <h2>ABOUT <span className="blue-text">ME</span></h2>

      <div className="about-intro">
        <div>
          <p className="about-lead">
            Computer Technician currently studying Information Systems Engineering at UTN FRBA.
            Hands-on experience in full stack web development, smart contracts (Solidity/Ethereum)
            and building, optimizing and maintaining PCs through my own business. I enjoy turning
            ideas into functional, well-structured solutions.
          </p>
          <div className="value-chips">
            {values.map((v) => <span className="value-chip" key={v}>{v}</span>)}
          </div>
        </div>
      </div>

      <div className="facts-grid">
        {facts.map((f) => (
          <div className="fact" key={f.label}>
            <span className="fact-label">{f.label}</span>
            <span className="fact-value">{f.value}</span>
          </div>
        ))}
      </div>

      <h2><span className="blue-text">MY</span> SKILLS</h2>
      <div className="skills-groups">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.label}>
            <h3 className="skill-group-label">{g.label}</h3>
            <div className="skill-tiles">
              {g.items.map((s) => (
                <div className="skill-tile zoom" key={s.name} title={s.name}>
                  <img src={`/img/skills/${s.img}`} alt={s.name} />
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
      <div className="courses-grid">
        {courses.map((c) => (
          <button className="course-card zoom" key={c.title} onClick={() => setCourse(c)}>
            <GraduationCap size={26} stroke="var(--accent)" />
            <span className="course-card-title">{c.title}</span>
            <span className="course-card-meta">{c.provider}{c.year ? ` · ${c.year}` : ''}</span>
          </button>
        ))}
      </div>

      <CertificateModal course={course} onClose={() => setCourse(null)} />
    </section>
  )
}

export default About
