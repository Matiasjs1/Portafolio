import { Link } from 'react-router-dom'
import { ArrowUpRight, Download } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useLanguage } from '../i18n/useLanguage.js'

function downloadCV() {
  const link = document.createElement('a')
  link.href = '/pdf/Curriculum Vitae - Matias Sesto.pdf'
  link.download = 'CV - Matias Sesto - 2025.pdf'
  link.click()
}

function Home() {
  const { t } = useLanguage()

  return (
    <section id="home" className="flex">
      <img src="/img/profile.png" alt={t.home.name} id="profile2" />
      <div id="information">
        <span className="eyebrow">{t.home.eyebrow}</span>
        <h1>{t.home.name}</h1>
        <h2 className="role">{t.home.role}</h2>
        <p className="tagline">{t.home.tagline}</p>
        <div className="links">
          <button className="zoom" id="cv" onClick={downloadCV}>
            <Download size={18} />
            {t.home.downloadCv}
          </button>
          <Link className="btn-ghost" to="/projects">
            {t.home.viewProjects}
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
