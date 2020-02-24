import { queryString } from './util.js'
import { JJAL_URL } from './constants.js'

const getJjalAPI = async value => {
  return await fetch(`${JJAL_URL}?${queryString(value)}`)
}

const api = { getJjalAPI }

export default api
