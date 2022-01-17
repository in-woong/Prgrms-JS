const getImages = async (value) => {
  try {
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)

    if (!response.ok) {
      return []
    }

    return response.json()
  } catch (e) {
    console.error(e)
  }
}

export default getImages
