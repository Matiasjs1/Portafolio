import { NavLink, useLocation } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

const icons = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,
  about: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  projects: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  contact: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>,
}

const sun = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
const moon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
      <NavLink to="/" aria-label="Home">
        <div className={isHome ? 'hidden' : 'flex'} id="logo">
          <img src="/img/profile.png" alt="Matias Sesto" id="profile1" />
          <h1>Matias Sesto</h1>
        </div>
      </NavLink>
      <ul>
        <li className="navElement">
          <NavLink to="/" end>
            {icons.home}
            <p>HOME</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/about">
            {icons.about}
            <p>ABOUT</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/projects">
            {icons.projects}
            <p>PROJECTS</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/contact">
            {icons.contact}
            <p>CONTACT</p>
          </NavLink>
        </li>
      </ul>
      <button
        className="icon-theme"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {theme === 'dark' ? moon : sun}
      </button>
    </nav>
  )
}

export default Navbar
