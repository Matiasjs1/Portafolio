import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// Base del sitio. Cambiá acá (o en .env VITE_SITE_URL) cuando tengas dominio propio.
const SITE_URL = (process.env.VITE_SITE_URL || 'https://matiasjs1.github.io/Portafolio').replace(/\/$/, '')

// Inyecta %SITE_URL% en index.html y genera robots.txt + sitemap.xml en el build.
function seoPlugin() {
  return {
    name: 'seo',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', SITE_URL)
    },
    closeBundle() {
      const outDir = 'dist'
      mkdirSync(outDir, { recursive: true })

      writeFileSync(join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

      const pages = [
        { path: '/', priority: '1.0' },
        { path: '/about', priority: '0.8' },
        { path: '/projects', priority: '0.9' },
        { path: '/contact', priority: '0.7' },
      ]
      const urls = pages
        .map((p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`)
        .join('\n')
      writeFileSync(join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPlugin()],
})
