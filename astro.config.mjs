import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tuile-et-ardoise.fr',
  integrations: [sitemap()],
  output: 'static'
});
