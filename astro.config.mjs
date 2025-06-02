import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Warc0s.github.io',
  base: '/CurriculumLab',
  build: {
    assets: 'assets'
  }
});