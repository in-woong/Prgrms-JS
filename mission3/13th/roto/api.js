const API_URL = 'https://jjalbot.com'

export const request = async (url) => {
  const res = await fetch(`${API_URL}${url}`)

  if (!res.ok) {
    throw new Error('api error!!')
  }
  return await res.json()
}

export const fetchJjalImages = (keyword) =>
  request(`/api/jjals?text=${keyword}`)
