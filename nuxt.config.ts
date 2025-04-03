import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/global.css'],
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  compatibilityDate: '2025-04-01',
  runtimeConfig: {
    IMAGE_PROXY_URL: process.env.IMAGE_PROXY_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    PASSWORD: process.env.PASSWORD,
    public: {
      SECRET_TOKEN: process.env.SECRET_TOKEN,
    },
  },
});
