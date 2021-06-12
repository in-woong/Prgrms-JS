const API_ENDPOINT = 'https://jjalbot.com'

const request = async (url) => {
  const response = await fetch(url)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(response.status)
  }
}

export const api = {
  fetchGifs: (keyword) => {
    return request(`${API_ENDPOINT}/api/jjals?text=${keyword}`)
  },
}
