import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {fileURLToPath} from 'node:url';

export default defineConfig({
  site: 'https://www.computer-monitor-guide.com',
  publicDir: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@site': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
