<template>
  <div
    class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
  >
    <div
      class="w-full [aspect-ratio:9/16] bg-white flex items-center justify-center"
    >
      <img
        :src="`/api/image/${file.id}`"
        :alt="`Image: ${file.name}`"
        class="object-contain object-center transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        @error="onError"
        :sizes="sizes"
      />
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <p class="text-white text-sm font-medium line-clamp-2">
        {{ file.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

export interface DriveFile {
  id: string;
  name: string;
}

defineProps<{ file: DriveFile }>();

const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw';

function onError() {}
</script>
