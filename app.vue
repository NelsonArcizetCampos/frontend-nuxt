<template>
  <div>
    <h1>Hello, Nuxt!</h1>
    <p>The environment is ready and configured!</p>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const message = 'Welcome to your configured Nuxt application!';
</script>

<style>
h1 {
  color: #42b983;
}
</style>
