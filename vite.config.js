import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  base: '/',
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Ahmed Elsamman Portfolio',
        short_name: 'Portfolio',
        theme_color: '#181a27',
        icons: [
          // تحديث الأيقونات حسب manifest.json
        ],
      },
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
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
        manualChunks: {
          vendor: ['react', 'react-dom'],
          components: ['./src/components/'],
          utils: ['./src/utils/'],
        },
      },
    },
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    polyfillDynamicImport: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
