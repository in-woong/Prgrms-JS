const API_URL = 'https://jjalbot.com/api/jjals?text='

export async function loadData(keyword) {
  try {
    const response = await fetch(`${API_URL}${keyword}`)
    const result = await response.json()
    return result
  } catch (e) {
    console.log(e)
  }
}
