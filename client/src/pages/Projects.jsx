import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { getProjectDesc } from '../i18n'
import ProjectModal from '../components/ProjectModal'
import projectsData from '../data/projects.json'

function Projects() {
  const { lang, t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = Array.isArray(projectsData.projects) ? projectsData.projects : []

  return (
    <section id="projects" className="flex">
      <h2><span className="blue-text">{t.projects.title.split(' ')[0]}</span> {t.projects.title.split(' ').slice(1).join(' ')}</h2>
      <div className="projects">
        {projects.map((proyecto) => {
          const thumb = (proyecto.images || []).find(Boolean)
          const desc = getProjectDesc(lang, proyecto.name, proyecto.description)
          return (
            <article key={proyecto.id} className="project">
              <div className="project-thumb">
                {thumb ? (
                  <img src={thumb} alt={`${proyecto.name} ${t.projects.thumbAlt}`} loading="lazy" />
                ) : (
                  <div className="thumb-placeholder">{proyecto.name.charAt(0)}</div>
                )}
              </div>
              <div className="project-info">
                <h2>{proyecto.name}</h2>
                <span className="tagline">{desc}</span>
              </div>
              <div className="project-tags">
                {(proyecto.skills || []).slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
                {(proyecto.skills || []).length > 4 && <span>+{(proyecto.skills || []).length - 4}</span>}
              </div>
              <div className="project-actions">
                <button className="details" onClick={() => setSelectedProject(proyecto)}>{t.projects.details}</button>
                {proyecto.url && (
                  <a
                    className="details live"
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.projects.liveDemo}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
