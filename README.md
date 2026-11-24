# Núcleo Software — Landing

Astro 5 + Tailwind v4 + React + Three.js (R3F) + GSAP + Lenis. Español (`/`) e inglés (`/en/`).

## Desarrollo

```
npm install
npm run dev        # http://localhost:4321
npm run build      # genera ./dist (sitio estático)
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Textos ES/EN, equipo | `src/i18n/content.ts` |
| Email, WhatsApp | `src/i18n/site.ts` |
| Capturas de Concesionar | `public/concesionaria/*.png` |
| Colores y tipografía | `src/styles/global.css` (`@theme`) |
| Átomo 3D | `src/components/Atom3D.tsx` |

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

- `PUBLIC_WEB3FORMS_KEY`: clave gratuita de https://web3forms.com (envía el mail del formulario a la casilla de la agencia). Es una clave pública: queda visible en el navegador por diseño.

## Publicar (Vercel, dominio gratuito `*.vercel.app`)

1. Subir el proyecto a un repositorio de GitHub (`.env` ya está en `.gitignore`).
2. En https://vercel.com → *Add New Project* → importar el repositorio. Vercel detecta Astro solo (build `npm run build`, salida `dist`).
3. En *Settings → Environment Variables* cargar `PUBLIC_WEB3FORMS_KEY`.
4. Deploy. Cada `git push` a la rama principal publica de nuevo.

Cuando tengan dominio propio: *Settings → Domains* en Vercel, y agregar `site: 'https://su-dominio.com'` en `astro.config.mjs` (sirve para sitemap y metadatos).

## Pendiente antes de lanzar

- [ ] Probar el botón "Continuar por WhatsApp" del formulario.
- [ ] Imagen para compartir en redes (Open Graph, 1200×630) en `public/` y `og:image` en `src/layouts/Base.astro`.
- [ ] Limitar la clave de Web3Forms al dominio final desde su panel.
