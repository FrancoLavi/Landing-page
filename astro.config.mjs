// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambiar por el dominio propio cuando exista (se usa para las URLs absolutas de og:image, etc.)
  site: 'https://landingpage-nucleo-software1.vercel.app',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
