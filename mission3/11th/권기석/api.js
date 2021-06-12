const baseUrl = 'https://jjalbot.com/api/jjals?text='

const getSearchResult = (keyword) => {
  const url = `${baseUrl}${keyword}`
  return fetch(url, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      console.error(error)
      alert(error)
    })
}

export default getSearchResult
