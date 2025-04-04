<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="p-6 bg-gray-800 text-white border-4 border-black">
      <h2 class="text-3xl font-bold mb-4">Login</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="password" class="block text-lg font-bold mb-2"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border-2 border-black bg-gray-700 text-white focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-black text-white border-2 border-black uppercase font-bold hover:bg-gray-700"
        >
          Submit
        </button>
      </form>
      <p v-if="response" class="mt-4 text-red-500">{{ response }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigateTo } from '#app';

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
      navigateTo('/');
    } else {
      response.value = data.message || 'Login failed.';
    }
  } catch {
    response.value = 'Error submitting login.';
  }
}
</script>

<style scoped>
body {
  background-color: #333333;
  color: white;
  font-family: Arial, sans-serif;
}

input,
button {
  font-family: Arial, sans-serif;
}

input::placeholder {
  color: #ccc;
}

input:focus {
  border-color: #000;
}

button:hover {
  cursor: pointer;
}
</style>
