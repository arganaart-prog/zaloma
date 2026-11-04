import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokobungamurahmalang.web.id',
  // GitHub Pages project site: https://arganaart-prog.github.io/zaloma-florist/
  base: '/',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  }
});
