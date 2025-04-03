<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <p v-if="response" class="mt-4 text-green-600">{{ response }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigateTo } from '#app'; // Import navigateTo for redirection

defineOptions({
  name: 'LoginPage',
});

const password = ref('');
const response = ref('');

async function submitLogin() {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: password.value }),
    });
    const data = await res.json();

    if (res.ok) {
      // Redirect to the home page on successful login
      navigateTo('/');
    } else {
      // Display the error message from the server
      response.value = data.message || 'Login failed.';
    }
  } catch {
    response.value = 'Error submitting login.';
  }
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
</style>
