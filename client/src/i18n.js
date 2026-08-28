// i18n sencillo para el portafolio: inglés y español con detección por región.
// `translations[lang]` se consume directo (ej: t.nav.home). Si falta un lang, cae a `en`.

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    home: {
      eyebrow: 'Full Stack Developer',
      name: 'Matias Sesto',
      role: 'Building clean, modern web apps',
      tagline:
        'I focus on crafting maintainable solutions and continuously improving through real projects across web, blockchain and beyond.',
      downloadCv: 'Download CV',
      viewProjects: 'View projects',
    },
    about: {
      title: 'About Me',
      lead:
        'Computer Technician currently studying Information Systems Engineering at UTN FRBA. Hands-on experience in full stack web development, smart contracts (Solidity/Ethereum) and building, optimizing and maintaining PCs through my own business. I enjoy turning ideas into functional, well-structured solutions.',
      values: [
        'Clean, readable code',
        'Understand the problem first',
        'Iterate until it feels right',
        'Always learning',
      ],
      facts: [
        { label: 'Full Name', value: 'Matias Joel Sesto' },
        { label: 'Location', value: 'CABA (Saavedra), Argentina' },
        { label: 'Availability', value: 'Open to opportunities' },
        { label: 'Languages', value: 'Spanish, English, French' },
      ],
      skillsTitle: 'My Skills',
      skillGroups: [
        { label: 'Frontend', items: [{ name: 'HTML', img: 'html.png' }, { name: 'CSS', img: 'css.png' }, { name: 'JavaScript', img: 'javascript.png' }, { name: 'React', img: 'react.png' }, { name: 'Vite', img: 'vite.svg' }] },
        { label: 'Backend & Databases', items: [{ name: 'Node.js', img: 'nodedotjs.svg' }, { name: 'Express', img: 'express.svg' }, { name: 'PHP', img: 'php.png' }, { name: 'MySQL', img: 'mysql.png' }, { name: 'MongoDB', img: 'mongodb.svg' }] },
        { label: 'Languages', items: [{ name: 'Java', img: 'java.png' }, { name: 'Python', img: 'python.png' }, { name: 'Solidity', img: 'solidity.png' }] },
        { label: 'Tools & Hardware', items: [{ name: 'Git', img: 'git.png' }, { name: 'Arduino', img: 'arduino.png' }] },
      ],
      educationTitle: 'My Education',
      education: [
        { title: 'Information Systems Engineering', org: 'UTN Regional Buenos Aires (FRBA)', dates: 'Mar 2026 · present', note: 'First year in progress.' },
        { title: 'Computer Technician', org: 'Escuela Técnica N°36 DE 15 "Alte. Guillermo Brown", CABA', dates: '2020 · 2025', note: '"Plant IT" project: Samsung Solve for Tomorrow semifinalist.' },
      ],
      experienceTitle: 'My Experience',
      experience: [
        {
          title: 'PC building, cleaning and optimization',
          org: 'Neumann PC (own business)',
          dates: 'Jan 2024 · present',
          bullets: [
            'Custom PC assembly based on each client\u2019s needs.',
            'Deep hardware cleaning and preventive maintenance.',
            'Software optimization to improve machine performance.',
          ],
        },
        {
          title: 'Blockchain intern',
          org: 'ETH KIPU',
          dates: 'Aug 2024 · Nov 2024',
          bullets: [
            'Designed and developed smart contracts in Solidity.',
            '50-hour professional practicum certified by the CABA Technical Schools Directorate.',
          ],
        },
        {
          title: 'Thumbnail designer',
          org: 'Fiverr ("matiasedit")',
          dates: 'Aug 2022 · present',
          bullets: [
            'Custom YouTube thumbnails for international clients.',
            'Direct client communication and order management, with verified reviews on profile.',
          ],
        },
      ],
      coursesTitle: 'Certified Courses',
      courses: [
        { title: 'Full Stack Web Development Jr.', provider: 'Generación T / Streambe', hours: '240 hs', year: '2024', cert: '/pdf/certs/fullstack-web-dev-jr.pdf' },
        { title: 'AI with Python', provider: 'Talento Tech, GCBA', hours: '40 hs', year: '2025', cert: '/pdf/certs/ai-with-python.pdf' },
        { title: 'Ethereum Development', provider: 'ETH KIPU', hours: '50 hs', year: '2024', cert: '/pdf/certs/ethereum-development.pdf' },
        { title: 'Database Fundamentals', provider: 'Platzi', year: '2025', cert: '/pdf/certs/database-fundamentals.pdf' },
        { title: 'REST APIs with JavaScript', provider: 'Platzi', year: '2025', cert: '/pdf/certs/rest-apis-javascript.pdf' },
        { title: 'Responsive Web Design', provider: 'freeCodeCamp', year: '2025', cert: '/pdf/certs/responsive-web-design.pdf' },
        { title: 'Unity Game Development', provider: 'Aprendé Programando, GCBA', year: '2023', cert: '/pdf/certs/unity-game-dev.pdf' },
        { title: 'Digital Marketing Tools', provider: 'CFP N°25, GCBA', year: '2025', cert: '/pdf/certs/digital-marketing.pdf' },
      ],
    },
    projects: {
      title: 'My Projects',
      loading: 'Loading projects...',
      error: 'Error',
      details: 'Details',
      liveDemo: 'Live demo',
      close: 'Close',
      aboutLabel: 'About',
      stackLabel: 'Stack',
      repository: 'Repository',
      thumbAlt: 'preview',
    },
    contact: {
      title: 'Contact Me',
      lead:
        'I\u2019m open to work opportunities, freelance projects and collaborations. The fastest way to reach me is by email or LinkedIn.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'CABA (Saavedra), Argentina · Available for remote work',
    },
    footer: { line: 'Full Stack Developer' },
    notFound: { title: 'Page not found.' },
    cert: {
      loading: 'Loading certificate…',
      comingSoonTitle: 'Certificate coming soon',
      comingSoonBody: 'I\u2019m uploading this certificate. Check back shortly to view or download it.',
      download: 'Download',
      open: 'Open in new tab',
    },
  },

  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', contact: 'Contacto' },
    theme: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    home: {
      eyebrow: 'Desarrollador Full Stack',
      name: 'Matias Sesto',
      role: 'Creando aplicaciones web limpias y modernas',
      tagline:
        'Me centro en construir soluciones mantenibles y mejorar continuamente a través de proyectos reales en web, blockchain y más.',
      downloadCv: 'Descargar CV',
      viewProjects: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      lead:
        'Técnico en Computación cursando Ingeniería en Sistemas de Información en UTN FRBA. Experiencia práctica en desarrollo web full stack, contratos inteligentes (Solidity/Ethereum) y en el armado, optimización y mantenimiento de PCs a través de mi emprendimiento propio. Me gusta convertir ideas en soluciones funcionales y bien estructuradas.',
      values: [
        'Código limpio y legible',
        'Entender el problema primero',
        'Iterar hasta que se sienta bien',
        'Aprender siempre',
      ],
      facts: [
        { label: 'Nombre completo', value: 'Matias Joel Sesto' },
        { label: 'Ubicación', value: 'CABA (Saavedra), Argentina' },
        { label: 'Disponibilidad', value: 'Abierto a oportunidades' },
        { label: 'Idiomas', value: 'Español, Inglés, Francés' },
      ],
      skillsTitle: 'Mis habilidades',
      skillGroups: [
        { label: 'Frontend', items: [{ name: 'HTML', img: 'html.png' }, { name: 'CSS', img: 'css.png' }, { name: 'JavaScript', img: 'javascript.png' }, { name: 'React', img: 'react.png' }, { name: 'Vite', img: 'vite.svg' }] },
        { label: 'Backend y bases de datos', items: [{ name: 'Node.js', img: 'nodedotjs.svg' }, { name: 'Express', img: 'express.svg' }, { name: 'PHP', img: 'php.png' }, { name: 'MySQL', img: 'mysql.png' }, { name: 'MongoDB', img: 'mongodb.svg' }] },
        { label: 'Lenguajes', items: [{ name: 'Java', img: 'java.png' }, { name: 'Python', img: 'python.png' }, { name: 'Solidity', img: 'solidity.png' }] },
        { label: 'Herramientas y hardware', items: [{ name: 'Git', img: 'git.png' }, { name: 'Arduino', img: 'arduino.png' }] },
      ],
      educationTitle: 'Mi educación',
      education: [
        { title: 'Ingeniería en Sistemas de Información', org: 'UTN Regional Buenos Aires (FRBA)', dates: 'Mar 2026 · presente', note: 'Primer año en curso.' },
        { title: 'Técnico en Computación', org: 'Escuela Técnica N°36 DE 15 "Alte. Guillermo Brown", CABA', dates: '2020 · 2025', note: 'Proyecto "Plant IT": semifinalistas de Samsung Solve for Tomorrow.' },
      ],
      experienceTitle: 'Mi experiencia',
      experience: [
        {
          title: 'Armado, limpieza y optimización de PCs',
          org: 'Neumann PC (emprendimiento propio)',
          dates: 'Ene 2024 · presente',
          bullets: [
            'Ensamblaje de computadoras a medida según cada cliente.',
            'Limpieza profunda de componentes y mantenimiento preventivo.',
            'Optimización de software para mejorar el rendimiento.',
          ],
        },
        {
          title: 'Pasante blockchain',
          org: 'ETH KIPU',
          dates: 'Ago 2024 · Nov 2024',
          bullets: [
            'Diseño y desarrollo de contratos inteligentes en Solidity.',
            'Práctica profesionalizante de 50 horas certificada por la Dirección de Escuelas Técnicas de CABA.',
          ],
        },
        {
          title: 'Diseñador de miniaturas',
          org: 'Fiverr ("matiasedit")',
          dates: 'Ago 2022 · presente',
          bullets: [
            'Miniaturas de YouTube para clientes internacionales.',
            'Gestión directa de pedidos y comunicación, con reseñas verificadas en el perfil.',
          ],
        },
      ],
      coursesTitle: 'Cursos certificados',
      courses: [
        { title: 'Desarrollo Web Full Stack Jr.', provider: 'Generación T / Streambe', hours: '240 hs', year: '2024', cert: '/pdf/certs/fullstack-web-dev-jr.pdf' },
        { title: 'IA con Python', provider: 'Talento Tech, GCBA', hours: '40 hs', year: '2025', cert: '/pdf/certs/ai-with-python.pdf' },
        { title: 'Desarrollo en Ethereum', provider: 'ETH KIPU', hours: '50 hs', year: '2024', cert: '/pdf/certs/ethereum-development.pdf' },
        { title: 'Fundamentos de Bases de Datos', provider: 'Platzi', year: '2025', cert: '/pdf/certs/database-fundamentals.pdf' },
        { title: 'API REST con JavaScript', provider: 'Platzi', year: '2025', cert: '/pdf/certs/rest-apis-javascript.pdf' },
        { title: 'Responsive Web Design', provider: 'freeCodeCamp', year: '2025', cert: '/pdf/certs/responsive-web-design.pdf' },
        { title: 'Desarrollo de videojuegos con Unity', provider: 'Aprendé Programando, GCBA', year: '2023', cert: '/pdf/certs/unity-game-dev.pdf' },
        { title: 'Herramientas de Marketing Digital', provider: 'CFP N°25, GCBA', year: '2025', cert: '/pdf/certs/digital-marketing.pdf' },
      ],
    },
    projects: {
      title: 'Mis proyectos',
      loading: 'Cargando proyectos...',
      error: 'Error',
      details: 'Detalles',
      liveDemo: 'Demo en vivo',
      close: 'Cerrar',
      aboutLabel: 'Acerca de',
      stackLabel: 'Stack',
      repository: 'Repositorio',
      thumbAlt: 'vista previa',
    },
    contact: {
      title: 'Contáctame',
      lead:
        'Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones. La forma más rápida de contactarme es por email o LinkedIn.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'CABA (Saavedra), Argentina · Disponible para trabajo remoto',
    },
    footer: { line: 'Desarrollador Full Stack' },
    notFound: { title: 'Página no encontrada.' },
    cert: {
      loading: 'Cargando certificado…',
      comingSoonTitle: 'Certificado en camino',
      comingSoonBody: 'Estoy subiendo este certificado. Volvé en un momento para verlo o descargarlo.',
      download: 'Descargar',
      open: 'Abrir en nueva pestaña',
    },
  },
}

export const supportedLangs = ['en', 'es']

// Descripciones de proyectos traducidas por nombre (fallback a la de projects.json si falta).
// Se consumen en Projects.jsx y ProjectModal.jsx.
export const projectDesc = {
  en: {
    'Animelink': 'Daily Connections-style puzzle game for anime fans. 3x3 grid, group 9 items into 3 hidden categories. Daily puzzles, archive, stats, streaks, hints. Shares MongoDB with Animedle.',
    'Animedle': 'Wordle-style anime guessing game with multiple modes. Progressive hints, daily challenge, statistics, streaks. Full-stack with shared MongoDB collections (anime/character data).',
    'Deb8': 'Online reservation system with real-time scheduling, duplicate booking prevention, online payment support, and a user-friendly interface.',
    'First Chatbot': 'Conversational AI chatbot built with Streamlit and LangChain. Document QA, conversation memory, deployable to Streamlit Cloud.',
    'MAYCO': 'Logistics management system for shipping company: driver management, delivery tracking, returns, dispatch workflows. Custom PHP + MySQL with vanilla JS frontend.',
    'EthereumCodes': 'Smart contract practice repo: voting systems (IVotingSystem, VotingSystem), ERC20 tokens, NFTs, access control patterns. Certified by ETH KIPU + CABA Technical Schools.',
    'Paintball': 'Online reservation system for paintball fields with real-time scheduling, duplicate booking prevention, payment integration, and admin panel.',
    'MyFit': 'Gym equipment management system with real-time availability tracking and an intuitive interface to simplify the administration of bars and accessories.',
    'JBrain': 'Educational quiz game with teacher and student roles, customizable features, user accounts, and persistent results stored in a database.',
  },
  es: {
    'Animelink': 'Juego de puzzle diario estilo Connections para fanáticos del anime. Grilla 3x3, agrupá 9 ítems en 3 categorías ocultas. Puzzles diarios, archivo, estadísticas, rachas y pistas. Comparte MongoDB con Animedle.',
    'Animedle': 'Juego de adivinanzas estilo Wordle de anime con múltiples modos. Pistas progresivas, desafío diario, estadísticas y rachas. Full-stack con colecciones MongoDB compartidas (datos de anime/personajes).',
    'Deb8': 'Sistema de reservas online con programación en tiempo real, prevención de reservas duplicadas, pagos online y una interfaz amigable.',
    'First Chatbot': 'Chatbot de IA conversacional construido con Streamlit y LangChain. Q&A de documentos, memoria de conversación, deployable en Streamlit Cloud.',
    'MAYCO': 'Sistema de gestión logística para empresa de envíos: gestión de conductores, seguimiento de entregas, devoluciones y flujos de despacho. PHP + MySQL a medida con frontend JS vanilla.',
    'EthereumCodes': 'Repositorio de práctica de contratos inteligentes: sistemas de votación (IVotingSystem, VotingSystem), tokens ERC20, NFTs, patrones de control de acceso. Certificado por ETH KIPU + Escuelas Técnicas de CABA.',
    'Paintball': 'Sistema de reservas online para canchas de paintball con programación en tiempo real, prevención de reservas duplicadas, integración de pagos y panel de administración.',
    'MyFit': 'Sistema de gestión de equipamiento de gimnasio con seguimiento de disponibilidad en tiempo real y una interfaz intuitiva para simplificar la administración de barras y accesorios.',
    'JBrain': 'Juego educativo de preguntas con roles de docente y alumno, funciones personalizables, cuentas de usuario y resultados persistentes en base de datos.',
  },
}

export function getProjectDesc(lang, name, fallback) {
  return (projectDesc[lang] && projectDesc[lang][name]) || (projectDesc.en && projectDesc.en[name]) || fallback
}

// Detecta el idioma: primero el guardado, luego la región del navegador.
export function detectLang() {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem('lang')
  if (saved && supportedLangs.includes(saved)) return saved
  const nav = (navigator.language || 'en').toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

export function applyLang(lang) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lang
  localStorage.setItem('lang', lang)
}
