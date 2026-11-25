import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.EXEMPLE-DOMAINE.fr',
  integrations: [sitemap()],
  output: 'static'
});
