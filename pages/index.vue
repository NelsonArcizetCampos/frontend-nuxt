<template>
  <div v-if="!images">Loading images...</div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <ImageCard v-for="image in images" :key="image.id" :file="image" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'; // Using useFetch for SSR
import ImageCard from '@/components/ImageCard.vue';
import { computed } from 'vue';

// Interface for the file type
interface DriveFile {
  id: string;
  name: string;
}

// Use useFetch to ensure that SSR also receives the data
const { data: response } = await useFetch<{ files: DriveFile[] }>(
  '/api/images',
  {
    key: 'images',
  }
);

const images = computed(() => response.value?.files ?? []);
</script>
