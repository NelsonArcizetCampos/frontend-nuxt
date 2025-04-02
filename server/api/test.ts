export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    message: 'Test endpoint working',
    IMAGE_PROXY_URL: config.IMAGE_PROXY_URL,
    API_SECRET_KEY: config.API_SECRET_KEY,
  };
});
