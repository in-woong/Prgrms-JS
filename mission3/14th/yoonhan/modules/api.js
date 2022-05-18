export async function fetchImageData(searchText) {
  try {
    const response = await fetch(
      `https://jjalbot.com/api/jjals?text=${searchText}`
    );
    const data = await response.json();
    return data;
  } catch {
    return [];
  }
}
