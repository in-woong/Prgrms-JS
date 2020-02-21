import { config } from './api.config.js'
import { objectToQueryString } from '../utils/index.js'

const fetchJjals = parameters => {
  return fetch(`${config.baseUrl}?${objectToQueryString(parameters)}`).then(
    response => {
      return response.json()
    }
  )
}

export { fetchJjals }
