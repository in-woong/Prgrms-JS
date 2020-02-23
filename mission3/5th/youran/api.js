async function loadJSONData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new HTTPError(response.Error)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
