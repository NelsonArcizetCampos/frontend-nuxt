export async function useImages() {
  try {
    const response = await fetch('/api/images');
    if (!response.ok) throw new Error('Failed to fetch images');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
