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
        { label: 'Backend', items: [{ name: 'Node.js', img: 'nodedotjs.svg' }, { name: 'Express', img: 'express.svg' }, { name: 'PHP', img: 'php.png' }, { name: 'Java', img: 'java.png' }, { name: 'Python', img: 'python.png' }, { name: 'Solidity', img: 'solidity.png' }, { name: 'C++', img: 'cplusplus.svg' }] },
        { label: 'Databases', items: [{ name: 'MySQL', img: 'mysql.png' }, { name: 'MongoDB', img: 'mongodb.svg' }] },
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
      challengeLabel: 'The challenge',
      impactLabel: 'Impact',
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
        { label: 'Backend', items: [{ name: 'Node.js', img: 'nodedotjs.svg' }, { name: 'Express', img: 'express.svg' }, { name: 'PHP', img: 'php.png' }, { name: 'Java', img: 'java.png' }, { name: 'Python', img: 'python.png' }, { name: 'Solidity', img: 'solidity.png' }, { name: 'C++', img: 'cplusplus.svg' }] },
        { label: 'Bases de Datos', items: [{ name: 'MySQL', img: 'mysql.png' }, { name: 'MongoDB', img: 'mongodb.svg' }] },
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
      challengeLabel: 'El reto',
      impactLabel: 'Impacto',
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
    'Deb8': 'Web platform for formal, respectful debate. Text and voice debates between 2-4 people, with moderation, sanctions and personal statistics.',
    'First Chatbot': 'Conversational AI chatbot built with Streamlit and LangChain. Document QA, conversation memory, deployable to Streamlit Cloud.',
    'MAYCO': 'Logistics management system for shipping company: driver management, delivery tracking, returns, dispatch workflows. Custom PHP + MySQL with vanilla JS frontend.',
    'Coppay': 'Decentralized platform for school cooperatives (CABA) where families donate, audit on-chain and propose/vote improvements. A team project with the ETH Kipu Foundation and CABA technical-school students.',
    'Paintball': 'Online reservation system for paintball fields with real-time scheduling, duplicate booking prevention, payment integration, and admin panel.',
    'Plant It': 'A sustainability project combining an Arduino ESP32 plant-monitor with a MERN web app to manage plant care and promote greener habits.',
    'JBrain': 'Educational quiz game with teacher and student roles, customizable features, user accounts, and persistent results stored in a database.',
  },
  es: {
    'Animelink': 'Juego de puzzle diario estilo Connections para fanáticos del anime. Grilla 3x3, agrupá 9 ítems en 3 categorías ocultas. Puzzles diarios, archivo, estadísticas, rachas y pistas. Comparte MongoDB con Animedle.',
    'Animedle': 'Juego de adivinanzas estilo Wordle de anime con múltiples modos. Pistas progresivas, desafío diario, estadísticas y rachas. Full-stack con colecciones MongoDB compartidas (datos de anime/personajes).',
    'Deb8': 'Plataforma web para el debate formal y respetuoso. Debates por texto y voz entre 2 y 4 personas, con moderación, sanciones y estadísticas personales.',
    'First Chatbot': 'Chatbot de IA conversacional construido con Streamlit y LangChain. Q&A de documentos, memoria de conversación, deployable en Streamlit Cloud.',
    'MAYCO': 'Sistema de gestión logística para empresa de envíos: gestión de conductores, seguimiento de entregas, devoluciones y flujos de despacho. PHP + MySQL a medida con frontend JS vanilla.',
    'Coppay': 'Plataforma descentralizada para cooperadoras escolares (CABA) donde las familias donan, auditan on-chain y proponen/votan mejoras. Proyecto en equipo con la Fundación ETH Kipu y estudiantes de escuelas técnicas de CABA.',
    'Paintball': 'Sistema de reservas online para canchas de paintball con programación en tiempo real, prevención de reservas duplicadas, integración de pagos y panel de administración.',
    'Plant It': 'Un proyecto de sustentabilidad que une un monitor de plantas con Arduino (ESP32) y una app web MERN para gestionar el cuidado de las plantas y hábitos más verdes.',
    'JBrain': 'Juego educativo de preguntas con roles de docente y alumno, funciones personalizables, cuentas de usuario y resultados persistentes en base de datos.',
  },
}

// Contexto/Problema (challenge) e Impacto (impact) por proyecto y por idioma.
export const projectMeta = {
  en: {
    'Animelink': {
      challenge: 'Anime fans had no daily NYT-Connections-style puzzle: group 9 items into 3 hidden categories, one fresh puzzle each day.',
      impact: 'A daily Connections clone in production (animelink.lat) with a 3x3 grid, a 2/3 proximity hint, one hint per round, 4 dragon-ball lives, anime and character modes, an archive to replay any day, stats and streaks. Full MERN monorepo (React 18 + Vite 5, Express + MongoDB), i18n ES/EN/PT, deployed on Vercel + Render, sharing the database with Animedle.',
    },
    'Animedle': {
      challenge: 'Anime fans had no daily guessing game that covered both series and characters, with progressive hints.',
      impact: 'A daily guessing platform in production (animedle.lat) with 6 modes: Classic (anime and character, color-proximity table), Emoji (4 revealable emojis), Opening (audio clips), Pixel (progressively de-pixelated image), Silhouette, and VS multiplayer in real time (rooms). MERN stack, ES/EN/PT, sakura-petal Easter egg, in-app updates panel, sharing DB with AnimeLink.',
    },
    'Deb8': {
      challenge: 'Online arguments become chaotic and aggressive, so a formal debating space was needed.',
      impact: 'A web app for text and voice debates between 2-4 people, with moderation, unanimous expulsion voting, sanctions and personal stats (proyecto integrador 2025).',
    },
    'Paintball': {
      challenge: 'A real paintball field (running since 2010) booked its 3 courts by phone, causing double bookings and chaos on weekends.',
      impact: 'A reservation platform with user accounts, per-court scheduling (date/time), pricing by capacity, and online payment — used in place of manual phone booking.',
    },
    'MAYCO': {
      challenge: 'A shipping company managed drivers, deliveries and returns on paper, with no central system.',
      impact: 'A full CRUD logistics app: driver registry (id, DNI, age, salary), delivery dispatch, shipment tracking and returns, with role-based PHP pages.',
    },
    'Plant It': {
      challenge: 'Caring for plants is guesswork without live readings of their conditions, and green habits lack an accessible tool.',
      impact: 'An Arduino ESP32 sensor node (temperature/humidity, light, soil-moisture probe) streams plant conditions over WiFi to a MERN web app (React, Express, MongoDB, Node.js) that manages plant care and greener habits. Semifinalist in Samsung\'s Solve for Tomorrow.',
    },
    'First Chatbot': {
      challenge: 'Making AI document Q&A accessible without a heavy setup.',
      impact: 'A Streamlit + LangChain chatbot for document QA with conversation memory, deployable to Streamlit Cloud.',
    },
    'Coppay': {
      challenge: 'School cooperative funds are opaque and easily corrupted: little transparency, no community say in how the money is spent.',
      impact: 'Four Solidity 0.8.26 contracts (AccessControl, FirstRound, SecondRound, Vault): two voting rounds, double-voting prevention, quadratic voting and budget locking. My role was the FirstRound contract: proposal creation, a 7-day voting window, the 50% threshold and double-voting prevention (ETH Kipu professional practicum, team project).',
    },
    'JBrain': {
      challenge: 'Teachers needed a fun quiz tool with roles for students and teachers.',
      impact: 'An educational quiz game with customizable features, user accounts and persistent results in a MySQL database.',
    },
  },
  es: {
    'Animelink': {
      challenge: 'Los fanáticos del anime no tenían un puzzle diario estilo Connections del NYT: agrupar 9 ítems en 3 categorías ocultas, uno nuevo cada día.',
      impact: 'Un clone diario de Connections en producción (animelink.lat) con grilla 3x3, sistema de cercanía 2/3, una pista por ronda, 4 esferas del dragón, modos anime y personaje, archivo para rejugar cualquier día, estadísticas y rachas. Monorepo MERN completo (React 18 + Vite 5, Express + MongoDB), i18n ES/EN/PT, desplegado en Vercel + Render, compartiendo base de datos con Animedle.',
    },
    'Animedle': {
      challenge: 'Los fanáticos del anime no tenían un juego de adivinanzas diario que cubriera tanto series como personajes, con pistas progresivas.',
      impact: 'Una plataforma de adivinanzas diaria en producción (animedle.lat) con 6 modos: Classic (anime y personaje, tabla de colores de proximidad), Emoji (4 emojis revelables), Opening (fragmentos de audio), Pixel (imagen que se despixela), Silueta y VS multijugador en tiempo real (salas). Stack MERN, ES/EN/PT, Easter egg de pétalos de sakura, panel de novedades in-app, compartiendo base de datos con AnimeLink.',
    },
    'Deb8': {
      challenge: 'Los debates online se vuelven caóticos y agresivos, así que hacía falta un espacio formal de discusión.',
      impact: 'Una app web de debates por texto y voz entre 2 y 4 personas, con moderación, votación unánime para expulsar, sanciones y estadísticas personales (proyecto integrador 2025).',
    },
    'Paintball': {
      challenge: 'Un campo de paintball real (desde 2010) reservaba sus 3 canchas por teléfono, causando reservas duplicadas y caos los fines de semana.',
      impact: 'Una plataforma de reservas con cuentas de usuario, programación por cancha (fecha/hora), precios por capacidad y pago online — en lugar de la reserva telefónica manual.',
    },
    'MAYCO': {
      challenge: 'Una empresa de envíos manejaba conductores, entregas y devoluciones en papel, sin un sistema central.',
      impact: 'Una app de logística con CRUD completo: registro de conductores (id, DNI, edad, sueldo), despacho de envíos, seguimiento y devoluciones, con páginas PHP por rol.',
    },
    'Plant It': {
      challenge: 'Cuidar las plantas es una lotería sin lecturas en tiempo real de sus condiciones, y faltan herramientas accesibles para hábitos verdes.',
      impact: 'Un nodo sensor con Arduino (ESP32) (temperatura/humedad, luz, sonda de humedad de suelo) envía las condiciones de la planta por WiFi a una app web MERN (React, Express, MongoDB, Node.js) que gestiona su cuidado y hábitos más verdes. Semifinalista en Samsung Solve for Tomorrow.',
    },
    'First Chatbot': {
      challenge: 'Hacer accesible el Q&A de documentos con IA sin una configuración pesada.',
      impact: 'Un chatbot con Streamlit y LangChain para Q&A de documentos con memoria de conversación, deployable en Streamlit Cloud.',
    },
    'Coppay': {
      challenge: 'Los fondos de las cooperadoras escolares son opacos y fácilmente corruptibles: poca transparencia y sin participación de la comunidad en cómo se gasta el dinero.',
      impact: 'Cuatro contratos Solidity 0.8.26 (AccessControl, FirstRound, SecondRound, Vault): dos rondas de votación, prevención de doble voto, voto cuadrático y bloqueo de presupuesto. Mi rol fue el contrato FirstRound: creación de propuestas, ventana de votación de 7 días, umbral del 50% y prevención de doble voto (práctica profesionalizante ETH Kipu, proyecto en equipo).',
    },
    'JBrain': {
      challenge: 'Los docentes necesitaban una herramienta de quiz divertida con roles para alumnos y docentes.',
      impact: 'Un juego educativo con funciones personalizables, cuentas de usuario y resultados persistentes en base de datos MySQL.',
    },
  },
}

export function getProjectDesc(lang, name, fallback) {
  return (projectDesc[lang] && projectDesc[lang][name]) || (projectDesc.en && projectDesc.en[name]) || fallback
}

export function getProjectMeta(lang, name) {
  return (projectMeta[lang] && projectMeta[lang][name]) || (projectMeta.en && projectMeta.en[name]) || null
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
