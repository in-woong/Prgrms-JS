const getSearchResult = async (keyword) => {
  try {
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

export { getSearchResult }
