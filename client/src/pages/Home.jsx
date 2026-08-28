import { Link } from 'react-router-dom'
function downloadCV() {
  const link = document.createElement('a')
  link.href = '/pdf/Curriculum Vitae - Matias Sesto.pdf'
  link.download = 'CV - Matias Sesto - 2025.pdf'
  link.click()
}

const githubIcon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.3 9.6 7.9 11.2.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-11.2A11.5 11.5 0 0 0 12 .5z"/></svg>
const linkedinIcon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5V24H.25zM8.5 8h4.3v2.2h.06c.6-1.1 2.05-2.26 4.22-2.26 4.5 0 5.34 2.96 5.34 6.8V24h-4.5v-8.2c0-1.96-.04-4.48-2.73-4.48-2.74 0-3.16 2.14-3.16 4.35V24H8.5z"/></svg>

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
          <button className="zoom" id="cv" onClick={downloadCV}>Download CV</button>
          <Link className="btn-ghost" to="/projects">View projects</Link>
          <div className="social-links">
            <a href="https://github.com/Matiasjs1" target="_blank" rel="noreferrer" aria-label="GitHub">{githubIcon}</a>
            <a href="https://www.linkedin.com/in/matias-sesto-b5aa8b33a" target="_blank" rel="noreferrer" aria-label="LinkedIn">{linkedinIcon}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
