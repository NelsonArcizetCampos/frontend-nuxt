<template>
  <html lang="en">
    <body :class="geistSans + ' ' + geistMono + ' antialiased'">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </body>
  </html>
</template>

<script setup lang="ts">
import { useHead } from '#app';

// Metadata updated for the Image Lienage application
useHead({
  title: 'Image Lienage - Image Gallery',
  meta: [
    {
      name: 'description',
      content:
        'Image Lienage - A modern and efficient image gallery application.',
    },
    { name: 'author', content: 'Nélson Campos' },
    {
      name: 'keywords',
      content: 'Image Lienage, gallery, images, Nuxt, Vue, web application',
    },
  ],
});

// Defining classes for fonts
const geistSans = '--font-geist-sans';
const geistMono = '--font-geist-mono';
</script>

<style>
/* Importing fonts directly into global CSS */
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;700&display=swap');

body {
  font-family: var(--font-geist-sans), sans-serif;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
