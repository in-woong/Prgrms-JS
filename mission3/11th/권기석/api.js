const baseUrl = 'https://jjalbot.com/api/jjals?text='

const getSearchResult = async (keyword) => {
  const url = `${baseUrl}${keyword}`
  try {
    const res = await fetch(url, {
      method: 'GET',
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export default getSearchResult
