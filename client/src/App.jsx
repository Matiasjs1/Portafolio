import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//anotaciones hechas por mi y no por chatgpt, por si no se entiende porq use algunas funciones.

// Vuelve arriba al cambiar de ruta (el navegador no lo hace solo con react-router)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section id="not-found" className="flex">
      <h1>404</h1>
      <p>Page not found.</p>
    </section>
  )
}

function App() {
  return (
    <>
      <div className="home-glow" aria-hidden="true"></div>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Matias Sesto · Full Stack Developer</p>
      </footer>
    </>
  );
}

export default App;
