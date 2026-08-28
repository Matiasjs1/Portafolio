import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { getProjectDesc } from '../i18n'
import ProjectModal from '../components/ProjectModal'

function Projects() {
  const { lang, t } = useLanguage()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    let active = true
    fetch('/projects.json')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load projects.json')
        return r.json()
      })
      .then((data) => {
        if (!active) return
        setProjects(Array.isArray(data.projects) ? data.projects : [])
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
    return () => {
      active = false
    }
  }, [])

  if (loading) return <section className="flex"><p>{t.projects.loading}</p></section>
  if (error) return <section className="flex"><p>{t.projects.error}: {error}</p></section>

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
