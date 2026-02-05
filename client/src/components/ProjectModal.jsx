import React, { useEffect } from 'react'
import Carousel from './Caroussel'
function ProjectModal({ project, onClose }) {
  if (!project) return null

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="items-left">
          <h3>{project.name}</h3>
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              <img src="../img/github.png" alt="GitHub" className="modal-github" />
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer">
              <button>View demo</button>
            </a>
          )}
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
          
        </div>
        <div className="modal-body">
          {Array.isArray(project.images) && project.images.length > 0 && (
            <div className="modal-section">
              <h4>Screenshots</h4>
              <Carousel images={project.images} projectName={project.name} />
            </div>
          )}
          {project.video && (
            <div className="modal-section">
              <h4>Video</h4>
              <div className="video-wrapper">
                <iframe
                  src={project.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          {project.description && (
            <p className="modal-description">{project.description}</p>
          )}
          {Array.isArray(project.skills) && project.skills.length > 0 && (
            <div className="modal-section">
              <h4>Skills</h4>
              <p>{project.skills.join(', ')}</p>
            </div>
          )}
          {project.link && (
            <div className="modal-section">
              <h4>Link</h4>
              <a href={project.link} target="_blank" rel="noreferrer" className="modal-link">{project.link}</a>
            </div>
          )}
          {project.repo && (
            <div className="modal-section">
              <h4>Repository</h4>
              <a href={project.repo} target="_blank" rel="noreferrer" className="modal-link">{project.repo}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
