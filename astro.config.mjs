import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zalomaflorist.com',
  // GitHub Pages project site: https://arganaart-prog.github.io/zaloma-florist/
  base: '/',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  }
});
