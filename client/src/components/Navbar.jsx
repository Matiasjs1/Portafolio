import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav>
      <NavLink to="/">
      <div className={isHome ? 'hidden' : 'flex'} id="logo">
        <img src="/img/profile.jpg" alt="Profile picture" id="profile1" />
        <h1 style={{fontSize: '20px'}}>Matias Sesto</h1>
      </div>
      </NavLink>
      <ul>
        <li className="navElement">
          <NavLink to="/">
            <p>HOME</p>
            <img src="/img/home.png" alt="home" id="imgHome" />
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/about">
            <p>ABOUT</p>
            <img src="/img/about.png" alt="about" id="imgAbout" />
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/projects">
            <p>PROJECTS</p>
            <img src="/img/projects.png" alt="projects" id="imgProjects" />
          </NavLink>
        </li>
        <li className="navElement">
          <NavLink to="/contact">
            <p>CONTACT</p>
            <img src="/img/contact.png" alt="contact" id="imgContact" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
