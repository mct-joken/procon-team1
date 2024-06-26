import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/procon-team1/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        iwa810: resolve(__dirname, 'iwa810/index.html'),
      },
    },
  },
});
