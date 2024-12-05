import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  base: '/',
  plugins: [svgr(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    minify: 'terser',
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: 'sass',
      },
    },
  },
});
