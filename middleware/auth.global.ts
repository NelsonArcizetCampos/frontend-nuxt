export default defineNuxtRouteMiddleware((to) => {
  // Allow the login route without authentication
  if (to.path === '/login') return;

  const token = useCookie('auth_token');

  // Redirect to the login page if the token is missing or invalid
  if (!token.value || token.value !== useRuntimeConfig().public.SECRET_TOKEN) {
    return navigateTo('/login');
  }
});
