import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'splash/*.jpg'],
      manifest: {
        name: 'Know Your Nigeria',
        short_name: 'KYN',
        description: 'Your rights, constitution and history — in everyday language.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        // These two fill any area the system draws outside the web view
        // (launch screen, home-indicator strip). Forest green, not white.
        theme_color: '#0E2E12',
        background_color: '#0E2E12',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,webmanifest}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      },
    }),
  ],
});
