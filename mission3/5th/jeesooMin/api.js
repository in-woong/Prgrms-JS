const JJAL_URL = `https://jjalbot.com/api/jjals`

const getJjalAPI = async value => {
  return await fetch(`${JJAL_URL}?text=${value}`)
}

const api = { getJjalAPI }

export default api
