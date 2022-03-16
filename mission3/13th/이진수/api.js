const API = 'https://jjalbot.com/api/jjals'

export const fetchJjalbot = async (search) => {
  try {
    const res = await fetch(`${API}?text=${search}`)
    if (!res.ok) return []
    const resJson = await res.json()
    return resJson
  } catch (e) {
    return []
  }
}
