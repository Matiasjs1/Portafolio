import { useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { useLanguage } from '../i18n/useLanguage.js'
import { getProjectDesc, getProjectMeta } from '../i18n'
import Carousel from './Caroussel'

function ProjectModal({ project, onClose }) {
  const { lang, t } = useLanguage()

  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const meta = getProjectMeta(lang, project.name)

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.name}</h3>
          <div className="header-actions">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer" aria-label={t.projects.repository} title={t.projects.repository} className="icon-link">
                <FiGithub size={20} />
              </a>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={t.projects.liveDemo} title={t.projects.liveDemo} className="icon-link">
                <ExternalLink size={20} />
              </a>
            )}
            <button className="modal-close" onClick={onClose} aria-label={t.projects.close}><X size={18} /></button>
          </div>
        </div>
        <div className="modal-body">
          {(project.images || []).length > 0 && (
            <Carousel images={project.images} projectName={project.name} />
          )}
          {project.video && (
            <div className="video-wrapper">
              <iframe src={project.video} title={`${project.name} demo`} allowFullScreen loading="lazy" />
            </div>
          )}
          {meta && (
            <div className="modal-section">
              <h4>{t.projects.challengeLabel}</h4>
              <p className="modal-description">{meta.challenge}</p>
            </div>
          )}
          <div className="modal-section">
            <h4>{t.projects.aboutLabel}</h4>
            <p className="modal-description">{getProjectDesc(lang, project.name, project.description)}</p>
          </div>
          {meta && (
            <div className="modal-section">
              <h4>{t.projects.impactLabel}</h4>
              <p className="modal-description modal-impact">{meta.impact}</p>
            </div>
          )}
          {(project.skills || []).length > 0 && (
            <div className="modal-section">
              <h4>{t.projects.stackLabel}</h4>
              <div className="modal-tags">
                {(project.skills || []).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
