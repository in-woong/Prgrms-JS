import { config } from './api.config.js'
import { objectToQueryString } from '../utils/index.js'

const fetchJjals = async parameters => {
  const response = await fetch(
    `${config.baseUrl}?${objectToQueryString(parameters)}`
  )
  return response.json()
}

export { fetchJjals }
