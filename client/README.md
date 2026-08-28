# Portafolio - Matias Sesto

Portafolio personal: SPA React + Vite con tema claro/oscuro, bilingüe (ES/EN), carrusel de proyectos y certificados descargables.

> El README principal del repo está en la raíz (`/README.md`).

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción → dist/
npm run preview  # sirve el build localmente
npm run lint     # eslint
```

## Estructura

```
public/
  projects.json    # datos de los proyectos
  img/             # assets (avatar, iconos, screenshots, logos de skills)
  pdf/             # CV + certificados (pdf/certs/)
src/
  App.jsx          # rutas, ScrollToTop, footer
  i18n.js          # textos ES/EN + detección de idioma
  i18n/            # LanguageProvider + useLanguage
  components/      # Navbar, Caroussel, ProjectModal, CertificateModal
  pages/           # Home, About, Projects, Contact
  hooks/useTheme   # tema claro/oscuro
```
