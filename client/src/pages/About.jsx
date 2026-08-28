import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import CertificateModal from '../components/CertificateModal'

function About() {
  const { t } = useLanguage()
  const [course, setCourse] = useState(null)

  return (
    <section id="about" className="flex">
      <h2>{t.about.title.split(' ')[0]} <span className="blue-text">{t.about.title.split(' ').slice(1).join(' ')}</span></h2>

      <div className="about-intro">
        <div>
          <p className="about-lead">{t.about.lead}</p>
          <div className="value-chips">
            {t.about.values.map((v) => <span className="value-chip" key={v}>{v}</span>)}
          </div>
        </div>
      </div>

      <div className="facts-grid">
        {t.about.facts.map((f) => (
          <div className="fact" key={f.label}>
            <span className="fact-label">{f.label}</span>
            <span className="fact-value">{f.value}</span>
          </div>
        ))}
      </div>

      <h2><span className="blue-text">{t.about.skillsTitle.split(' ')[0]}</span> {t.about.skillsTitle.split(' ').slice(1).join(' ')}</h2>
      <div className="skills-groups">
        {t.about.skillGroups.map((g) => (
          <div className="skill-group" key={g.label}>
            <h3 className="skill-group-label">{g.label}</h3>
            <div className="skill-tiles">
              {g.items.map((s) => (
                <div className="skill-tile zoom" key={s.name} title={s.name}>
                  <img src={`/img/skills/${s.img}`} alt={s.name} />
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2><span className="blue-text">{t.about.experienceTitle.split(' ')[0]}</span> {t.about.experienceTitle.split(' ').slice(1).join(' ')}</h2>
      <div className="timeline">
        {t.about.experience.map((x) => (
          <div className="timeline-card" key={x.title}>
            <h3>{x.title}</h3>
            <p className="timeline-org">{x.org}</p>
            <p className="timeline-dates">{x.dates}</p>
            <ul className="timeline-bullets">
              {x.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2><span className="blue-text">{t.about.educationTitle.split(' ')[0]}</span> {t.about.educationTitle.split(' ').slice(1).join(' ')}</h2>
      <div className="timeline">
        {t.about.education.map((e) => (
          <div className="timeline-card" key={e.title}>
            <h3>{e.title}</h3>
            <p className="timeline-org">{e.org}</p>
            <p className="timeline-dates">{e.dates}</p>
            {e.note && <p className="timeline-note">{e.note}</p>}
          </div>
        ))}
      </div>

      <h2><span className="blue-text">{t.about.coursesTitle.split(' ')[0]}</span> {t.about.coursesTitle.split(' ').slice(1).join(' ')}</h2>
      <div className="courses-grid">
        {t.about.courses.map((c) => (
          <button className="course-card zoom" key={c.cert} onClick={() => setCourse(c)}>
            <GraduationCap size={26} stroke="var(--accent)" />
            <span className="course-card-title">{c.title}</span>
            <span className="course-card-meta">{c.provider}{c.year ? ` · ${c.year}` : ''}</span>
          </button>
        ))}
      </div>

      <CertificateModal course={course} onClose={() => setCourse(null)} />
    </section>
  )
}

export default About
