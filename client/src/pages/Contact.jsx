import { Mail } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { useLanguage } from '../i18n/useLanguage.js'

function Contact() {
  const { t } = useLanguage()

  // Email ofuscado para impedir el scraping por regex: el texto visible muestra
  // "matiasjsesto [at] gmail [dot] com" (sin patrón de email), pero el mailto
  // usa el email real y funciona igual al hacer click.
  const emailUser = 'matiasjsesto'
  const emailDomain = 'gmail.com'
  const email = `${emailUser}@${emailDomain}`
  const emailObfuscated = `${emailUser} [at] ${emailDomain.replace('.', ' [dot] ')}`

  return (
    <section id="contact" className="flex">
      <h2>{t.contact.title.split(' ')[0]} <span className="blue-text">{t.contact.title.split(' ').slice(1).join(' ')}</span></h2>
      <p id="contact-lead">{t.contact.lead}</p>
      <div id="contact-cards">
        <a className="contact-card" href={`mailto:${email}`}>
          <Mail size={26} />
          <h3>{t.contact.email}</h3>
          <p>{emailObfuscated}</p>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/matias-sesto-b5aa8b33a" target="_blank" rel="noreferrer">
          <FiLinkedin size={26} />
          <h3>{t.contact.linkedin}</h3>
          <p>/in/matias-sesto</p>
        </a>
        <a className="contact-card" href="https://github.com/Matiasjs1" target="_blank" rel="noreferrer">
          <FiGithub size={26} />
          <h3>{t.contact.github}</h3>
          <p>@Matiasjs1</p>
        </a>
      </div>
      <p id="contact-location">{t.contact.location}</p>
    </section>
  )
}

export default Contact
