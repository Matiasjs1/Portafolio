import { NavLink } from 'react-router-dom'
import { Home as HomeIcon, User, BookOpen, Mail, Sun, Moon, Globe } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import { useLanguage } from '../i18n/useLanguage.js'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  return (
    <nav>
      <ul>
        <li className="navElement">
          <NavLink to="/" end aria-label={t.nav.home}>
            <HomeIcon />
            <p>{t.nav.home}</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/about" aria-label={t.nav.about}>
            <User />
            <p>{t.nav.about}</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/projects" aria-label={t.nav.projects}>
            <BookOpen />
            <p>{t.nav.projects}</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/contact" aria-label={t.nav.contact}>
            <Mail />
            <p>{t.nav.contact}</p>
          </NavLink>
        </li>
      </ul>
      <div className="nav-controls">
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
          title={lang === 'en' ? 'Español' : 'English'}
        >
          <Globe size={16} />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>
        <button
          className="icon-theme"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
        >
          {theme === 'dark' ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
