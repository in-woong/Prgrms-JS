export const fetchJjal = async (keyword) => {
  try {
    const response = fetch(`https://jjalbot.com/api/jjals?text=${keyword}`).then((res) => {
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
