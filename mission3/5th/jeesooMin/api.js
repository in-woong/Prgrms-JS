import { queryString } from './util.js'

const JJAL_URL = `https://jjalbot.com/api/jjals`

const getJjalAPI = async value => {
  return await fetch(`${JJAL_URL}?${queryString(value)}`)
}

const api = { getJjalAPI }

export default api
