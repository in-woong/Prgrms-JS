const APP_URL = 'https://jjalbot.com/api/jjals'

const getSearchResult = async (keyword) => {
  try {
    const response = await fetch(`${APP_URL}?text=${keyword}`)
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

export { getSearchResult }
