import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useLanguage } from './i18n/useLanguage.js';

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
  const { t } = useLanguage()
  return (
    <section id="not-found" className="flex">
      <h1>404</h1>
      <p>{t.notFound.title}</p>
    </section>
  )
}

function App() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  useEffect(() => {
    document.title = `${t.home.name} - ${t.home.eyebrow}`
  }, [t])

  return (
    <div className="app">
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
        <p>© {year} {t.home.name} · {t.footer.line}</p>
      </footer>
    </div>
  );
}

export default App;
