import { config } from './config.js'
import { objectToQueryString } from '../util/index.js'

const fetchJjals = async parameters => {
  const response = await fetch(`${config.baseUrl}?${objectToQueryString(parameters)}`)

  return response.json()
}

export { fetchJjals }
