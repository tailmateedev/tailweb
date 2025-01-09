// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), icon()],
  vite: {
    resolve: {
      alias: {
        '@layouts': '/src/modules/shared/layouts',
        '@components': '/src/modules/shared/components',
        '@auth': '/src/modules/auth',
        '@business': '/src/modules/business',
        '@care': '/src/modules/care',
        '@contact': '/src/modules/contact',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
        '@maintenance': '/src/modules/maintenance',
      },
    },
  },
});