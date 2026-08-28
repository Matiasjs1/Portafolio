import { useEffect, useState } from 'react'
import ProjectModal from '../components/ProjectModal'

function Projects() {
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

  if (loading) return <section className="flex"><p>Loading projects...</p></section>
  if (error) return <section className="flex"><p>Error: {error}</p></section>

  return (
    <section id="projects" className="flex">
      <h2><span className="blue-text">MY</span> PROJECTS</h2>
      <div className="projects">
        {projects.map((proyecto) => {
          const thumb = (proyecto.images || []).find(Boolean)
          return (
            <article key={proyecto.id} className="project">
              <div className="project-thumb">
                {thumb ? (
                  <img src={thumb} alt={`${proyecto.name} preview`} loading="lazy" />
                ) : (
                  <div className="thumb-placeholder">{proyecto.name.charAt(0)}</div>
                )}
              </div>
              <div className="project-info">
                <h2>{proyecto.name}</h2>
                <span className="tagline">{proyecto.description}</span>
              </div>
              <div className="project-tags">
                {(proyecto.skills || []).slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
                {(proyecto.skills || []).length > 4 && <span>+{(proyecto.skills || []).length - 4}</span>}
              </div>
              <div className="project-actions">
                <button className="details" onClick={() => setSelectedProject(proyecto)}>Details</button>
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
