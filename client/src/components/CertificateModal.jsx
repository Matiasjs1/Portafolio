import { useEffect, useState } from 'react'

function CertificateModal({ course, onClose }) {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!course) return
    let active = true
    setStatus('loading')
    if (!course.cert) {
      setStatus('missing')
      return
    }
    fetch(course.cert, { method: 'HEAD' })
      .then((r) => {
        if (!active) return
        const type = r.headers.get('content-type') || ''
        // Vite dev sirve index.html (content-type text/html) para rutas inexistentes,
        // por eso distinguimos: un PDF/imagen real nunca es text/html.
        if (r.ok && !type.includes('text/html')) {
          setStatus('ok')
        } else {
          setStatus('missing')
        }
      })
      .catch(() => { if (active) setStatus('missing') })
    return () => { active = false }
  }, [course])

  useEffect(() => {
    if (!course) return
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [course, onClose])

  if (!course) return null

  const isPdf = course.cert && course.cert.trim().toLowerCase().endsWith('.pdf')
  const filename = course.cert ? course.cert.split('/').pop() : ''
  const extended = [course.hours, course.year].filter(Boolean).join(' · ')

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={course.title}>
      <div className="modal cert-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="cert-title">
            <h3>{course.title}</h3>
            <p className="cert-provider">
              {course.provider}
              {extended ? ` · ${extended}` : ''}
            </p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body">
          {status === 'loading' && <p className="cert-status">Loading certificate…</p>}

          {status === 'missing' && (
            <div className="cert-empty">
              <svg viewBox="0 0 24 24" width="54" height="54" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z"/>
                <circle cx="12" cy="15" r="2"/>
              </svg>
              <h4>Certificate coming soon</h4>
              <p>I&apos;m uploading this certificate. Check back shortly to view or download it.</p>
              {course.cert && <code className="cert-path">{course.cert}</code>}
            </div>
          )}

          {status === 'ok' && (
            <>
              {isPdf ? (
                <iframe className="cert-preview" src={course.cert} title={course.title} />
              ) : (
                <img className="cert-preview cert-preview-img" src={course.cert} alt={`${course.title} certificate`} />
              )}
              <div className="cert-actions">
                <a className="btn-primary" href={course.cert} download={filename}>Download</a>
                <a className="btn-ghost" href={course.cert} target="_blank" rel="noreferrer">Open in new tab</a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
