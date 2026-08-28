# Portafolio - Matias Sesto

Personal portfolio site: React + Vite single-page app with a light/dark theme, project carousel and modal previews.

## Structure

```
client/
  index.html        # entry, SEO meta + theme FOUC prevention
  public/
    projects.json   # project data (name, skills, links, screenshots)
    pdf/            # CV download
  img/              # static assets (profile, icons, screenshots, skill logos)
  src/
    App.jsx         # routes (/, /about, /projects, /contact, 404) + ScrollToTop
    components/     # Navbar, Caroussel, ProjectModal
    hooks/useTheme  # dark/light theme persisted in localStorage
    pages/          # Home, About, Projects, Contact
```

## Development

```bash
cd client
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint     # eslint
```

## Notes

- Project cards are driven entirely by `public/projects.json`; add an entry there to publish a new project.
- Screenshots live in `img/screens/<project>-screens/`.
- Deployed statically (dist/ is git-ignored; build it in CI or locally).
