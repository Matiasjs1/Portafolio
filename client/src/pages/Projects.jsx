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
        {projects.map((proyecto) => (
          <div key={proyecto.id} className="project">
            <div className='project-info'>
              <h2>{proyecto.name}</h2>
              <span id="description">{proyecto.description}</span>
            </div>
            <p>{(proyecto.skills || []).join(', ')}</p>
            <button className='details' onClick={() => setSelectedProject(proyecto)}>Details</button>
          </div>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
