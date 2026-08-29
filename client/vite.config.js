import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync, readFileSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

// Base del sitio. Cambiá acá (o en .env VITE_SITE_URL) cuando tengas dominio propio.
const SITE_URL = (process.env.VITE_SITE_URL || 'https://msesto.dev').replace(/\/$/, '')

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

// Inliera el CSS de entrada en dist/index.html y borra el archivo .css,
// para que no haya un request render-blocking. Solo toca /assets/*.css
// (deja los <link> de Google Fonts, modulepreload y el CSS de rutas lazy).
function inlineEntryCss() {
  return {
    name: 'inline-entry-css',
    apply: 'build',
    closeBundle() {
      const outDir = 'dist'
      const indexPath = join(outDir, 'index.html')
      let html = readFileSync(indexPath, 'utf-8')
      const styles = []
      const removed = []
      const linkTagRe = /<link\b[^>]*>/g
      html = html.replace(linkTagRe, (tag) => {
        const rel = tag.match(/\brel\s*=\s*["']([^"']*)["']/i)
        const href = tag.match(/\bhref\s*=\s*["']([^"']*)["']/i)
        if (rel && /\bstylesheet\b/i.test(rel[1]) && href && /^\/assets\/[^"']+\.css$/i.test(href[1])) {
          styles.push(readFileSync(join(outDir, '.' + href[1]), 'utf-8'))
          removed.push(href[1])
          return ''
        }
        return tag
      })
      if (removed.length) {
        html = html.replace('</head>', '<style>' + styles.join('\n') + '</style>\n</head>')
        writeFileSync(indexPath, html)
        removed.forEach((h) => unlinkSync(join(outDir, '.' + h)))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPlugin(), inlineEntryCss()],
})
