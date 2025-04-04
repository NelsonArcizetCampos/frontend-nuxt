<template>
  <div
    class="h-64 w-full border-4 border-black p-2 overflow-hidden flex items-center justify-center bg-gray-300"
  >
    <img
      :src="`/api/image/${file.id}`"
      :alt="`Image: ${file.name}`"
      loading="lazy"
      class="h-full w-auto max-w-none object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { DriveFile } from '@/types/DriveFile';

defineProps<{ file: DriveFile }>();
</script>
