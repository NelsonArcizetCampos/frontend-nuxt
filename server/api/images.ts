// server/api/images.ts
export default defineEventHandler(async (event) => {
  const { IMAGE_PROXY_URL, API_SECRET_KEY } = useRuntimeConfig();

  if (!IMAGE_PROXY_URL || !API_SECRET_KEY) {
    return { error: 'Environment variables are not properly set.' };
  }

  try {
    const workerResponse = await fetch(`${IMAGE_PROXY_URL}/files`, {
      headers: {
        'X-API-Key': API_SECRET_KEY,
      },
    });

    if (!workerResponse.ok) {
      throw new Error(
        `Worker responded with status ${workerResponse.status}: ${workerResponse.statusText}`
      );
    }

    const data = await workerResponse.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from the worker:', error);
    return {
      error: 'Failed to fetch data from the worker.',
      statusCode: 500,
    };
  }
});
