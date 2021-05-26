const END_POINT = 'https://jjalbot.com/api'

export const fetchJjal = async (keyword) => {
  try {
    const response = fetch(`${END_POINT}/jjals?text=${keyword}`).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response was not ok')
    })
    return response
  } catch (e) {
    throw new Error(error)
  }
}
