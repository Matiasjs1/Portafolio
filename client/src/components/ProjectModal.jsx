import React, { useEffect } from 'react'

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
          <h3>{project.name}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body">
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
        <style>{`
          .modal-backdrop{
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }
          .modal{
            width: 100%;
            max-width: 720px;
            background: #111;
            color: #fff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            overflow: hidden;
          }
          .modal-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .modal-body{
            padding: 20px;
            max-height: 70vh;
            overflow: auto;
          }
          .modal-section h4{ margin: 16px 0 6px; }
          .modal-description{ color: #cfcfcf; }
          .modal-link{ color: #4da3ff; text-decoration: underline; }
          .modal-close{ background: transparent; border: none; color: #fff; font-size: 20px; cursor: pointer; line-height: 1; }
        `}</style>
      </div>
    </div>
  )
}

export default ProjectModal
