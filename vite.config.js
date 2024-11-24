import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  base: '/',
  plugins: [svgr(), react()],
  server: {
    open: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
