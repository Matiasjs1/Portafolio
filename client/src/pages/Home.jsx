import { Link } from 'react-router-dom'
import { ArrowUpRight, Download } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function downloadCV() {
  const link = document.createElement('a')
  link.href = '/pdf/Curriculum Vitae - Matias Sesto.pdf'
  link.download = 'CV - Matias Sesto - 2025.pdf'
  link.click()
}

function Home() {
  return (
    <section id="home" className="flex">
      <img src="/img/profile.png" alt="Matias Sesto" id="profile2" />
      <div id="information">
        <span className="eyebrow">Full Stack Developer</span>
        <h1>Matias Sesto</h1>
        <h2 className="role">Building clean, modern web apps</h2>
        <p className="tagline">
          I focus on crafting maintainable solutions and continuously improving
          through real projects across web, blockchain and beyond.
        </p>
        <div className="links">
          <button className="zoom" id="cv" onClick={downloadCV}>
            <Download size={18} />
            Download CV
          </button>
          <Link className="btn-ghost" to="/projects">
            View projects
            <ArrowUpRight size={18} />
          </Link>
          <div className="social-links">
            <a href="https://github.com/Matiasjs1" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/matias-sesto-b5aa8b33a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
