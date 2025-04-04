<template>
  <div v-if="!images">Loading images...</div>
  <div v-else class="grid grid-cols-6 gap-4 p-4 bg-black">
    <ImageCard v-for="image in images" :key="image.id" :file="image" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'; // Using useFetch for SSR
import ImageCard from '@/components/ImageCard.vue';
import { computed } from 'vue';
import type { DriveFile } from '@/types/DriveFile';

defineOptions({
  name: 'LoginPage',
});

// Use useFetch to ensure that SSR also receives the data
const { data: response } = await useFetch<{ files: DriveFile[] }>(
  '/api/images',
  {
    key: 'images',
  }
);

const images = computed(() => response.value?.files ?? []);
</script>
