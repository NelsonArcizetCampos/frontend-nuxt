import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['@/assets/css/global.css'],
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  compatibilityDate: '2025-04-01',
  runtimeConfig: {
    IMAGE_PROXY_URL: process.env.IMAGE_PROXY_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
  },
});
