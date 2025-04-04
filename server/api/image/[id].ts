export default defineEventHandler(async (event) => {
  const { IMAGE_PROXY_URL, API_SECRET_KEY } = useRuntimeConfig();
  const { id } = event.context.params;

  if (!IMAGE_PROXY_URL || !API_SECRET_KEY) {
    return { error: 'Environment variables are not properly set.' };
  }

  if (!id) {
    return { error: 'Missing image ID parameter.', statusCode: 400 };
  }

  try {
    const workerResponse = await fetch(`${IMAGE_PROXY_URL}/image?id=${id}`, {
      headers: {
        'X-API-Key': API_SECRET_KEY,
      },
    });

    if (!workerResponse.ok) {
      throw new Error(
        `Worker responded with status ${workerResponse.status}: ${workerResponse.statusText}`
      );
    }

    const imageBuffer = await workerResponse.arrayBuffer();

    setHeader(
      event,
      'Content-Type',
      workerResponse.headers.get('Content-Type') || 'image/png'
    );

    // Return as a Node.js Buffer to send binary data
    return Buffer.from(imageBuffer);
  } catch (error) {
    console.error('Error fetching image from worker:', error);
    return {
      error: 'Failed to fetch image from the worker.',
      statusCode: 500,
    };
  }
});
