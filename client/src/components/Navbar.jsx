import { NavLink } from 'react-router-dom'
import { Home as HomeIcon, User, BookOpen, Mail, Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
      <ul>
        <li className="navElement">
          <NavLink to="/" end>
            <HomeIcon />
            <p>HOME</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/about">
            <User />
            <p>ABOUT</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/projects">
            <BookOpen />
            <p>PROJECTS</p>
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/contact">
            <Mail />
            <p>CONTACT</p>
          </NavLink>
        </li>
      </ul>
      <button
        className="icon-theme"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {theme === 'dark' ? <Moon /> : <Sun />}
      </button>
    </nav>
  )
}

export default Navbar
