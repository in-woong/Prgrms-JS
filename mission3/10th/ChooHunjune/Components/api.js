const END_POINT = 'https://jjalbot.com/api'


const request = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw Error('HTTP Error')
    }

    const result = await response.json()

    return result
  } catch (e) {
    alert(e.message)
  }
}

export const fetchJjal = async (keyword) => {
  return await request(`${END_POINT}/jjals?text=${keyword}`)
}
