import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

//anotaciones hechas por mi y no por chatgpt, por si no se entiende porq use algunas funciones.
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [proyectos, setProyectos] = useState([])
  axios.get('http://localhost:3000/proyectos')
    .then((res)=>{
      setProyectos(res.data)
    })
  // actualiza la seccion segun el URL al cargar la pagina, esto es para que al recargar la pagina sigas en la misma section
  useEffect(() => {
    const url = window.location.hash.slice(1); // saca el # del hash
    if (['home', 'about', 'projects', 'contact'].includes(url)) {
      setActiveSection(url);
    }
  }, []);

  // actualiza la url seteando el hash segun la seccion en la que estas
  const handleNavbar = (section) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  //permite descargar el cv
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = './pdf/CV.pdf'; 
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <>
      <header></header>
      <nav>
        <div className={activeSection === 'home' ? 'hidden' : 'flex'} id="logo"> 
          <img src="../../img/profile.jpg" alt="Foto de perfil" id="profile1" />
          <h1>Matias Sesto</h1>
        </div>
        <ul>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li
              key={section}
              className="navElement"
              onClick={() => handleNavbar(section)}
            >
              <a>
                <p>{section.toUpperCase()}</p>
                <img src={`img/${section}.png`} alt={section} id={`img${section.charAt(0).toUpperCase() + section.slice(1)}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <section id="home" className={activeSection === 'home' ? 'flex' : 'hidden'}> 
          <img src="../img/profile.jpg" alt="Foto de perfil" id="profile2" />
          <div id="information">
            <h1>Matias Sesto</h1>
            <h2 className="blue-text">Junior Developer</h2>
            <p>I am a junior programmer with experience in both backend and frontend development...</p>
            <button className="zoom" id="cv" onClick={downloadCV}>Download CV</button>
          </div>
        </section>
        
        <section id="about" className={activeSection === 'about' ? 'flex' : 'hidden'}>
        <h2>ABOUT <span className="blue-text">ME</span></h2>
          <div id="contain-about">
            <div id="personal-info">
              <h3>PERSONAL INFORMATION</h3>
              <div id="info">
                <p><span style={{ color: "gray" }}>Full Name:</span> Matias Joel Sesto</p>
                <p><span style={{ color: "gray" }}>Freelance Availability:</span> Available</p>
                <p><span style={{ color: "gray" }}>Specialty:</span> Frontend Developer</p>
                <p><span style={{ color: "gray" }}>Languages:</span> Spanish, English</p>
              </div>
            </div>
            <div id="cards">
              <div id="experience" className="card">
                <h4>+1<small> years</small></h4>
                <p>experience</p>
              </div>
              <div id="projectsCompleted" className="card">
                <h4>+5<small> projects</small></h4>
                <p>completed</p>
              </div>
            </div>
          </div>
          <h2><span className="blue-text">MY</span> SKILLS</h2>
          <div id="skills">
              <div class="card">
                  <img src="../img/javascript.png" alt=""/>
                  <p>JavaScript</p>
              </div>
              <div class="card">
                  <img src="../img/html.png" alt=""/>
                  <p>HTML</p>
              </div>
              <div class="card">
                  <img src="../img/css.png" alt=""/>
                  <p>CSS</p>
              </div>
              <div class="card">
                  <img src="../img/mysql.png" alt=""/>
                  <p>MySQL</p>
              </div>
              <div class="card">
                  <img src="../img/php.png" alt="" id="php"/>
                  <p>PHP</p>
              </div>
              <div class="card">
                  <img src="../img/git.png" alt=""/>
                  <p>Git</p>
              </div>
              <div class="card">
                  <img src="../img/java.png" alt=""/>
                  <p>Java</p>
              </div>
              <div class="card">
                  <img src="../img/solidity.png" alt=""/>
                  <p>Solidity</p>
              </div>
              <div class="card">
                  <img src="../img/python.png" alt=""/>
                  <p>Python</p>
              </div>
              <div class="card">
                  <img src="../../img/react.png" alt=""/>
                  <p>React</p>
              </div>
            </div>
          <h2><span className="blue-text">MY</span> EDUCATION</h2>
        </section>
        
        <section id="projects" className={activeSection === 'projects' ? 'flex' : 'hidden'}>
          <h2><span className="blue-text">MY</span> PROJECTS</h2>
          <div className="projects">
          {proyectos.map(proyecto => (
          <div key={proyecto.id} className="proyecto">
            <h2 id="nombreProyecto">{proyecto.nombre}</h2>
            <span id="descripcion">{proyecto.descripcion/*oculte la descripcion temporalmente para despues usarla*/}</span>
            <p><span style={{ color: "gray" }}>Skills: </span>{proyecto.skills.join(', ')/*para separar con una coma cada skill y no quede todo junto*/}</p>
            <p><span style={{ color: "gray" }}>Fecha: </span> {proyecto.fecha}</p>
            <p><span style={{ color: "gray" }}>Desarrollo: </span> {proyecto.desarrollo}</p>
            <a href={proyecto.repositorio} target="_blank"><img src="../img/github.png" alt="" /></a>
          </div>
          ))}
          </div>
        </section>
        
        <section id="contact" className={activeSection === 'contact' ? 'flex' : 'hidden'}>
          <h2>CONTACT <span className="blue-text">ME</span></h2>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
