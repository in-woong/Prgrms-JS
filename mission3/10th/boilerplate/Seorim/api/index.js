import { config } from './config.js'
import { objectToQueryString } from '../util/index.js'

const fetchJjals = parameters => {
  return fetch(`${config.baseUrl}?${objectToQueryString(parameters)}`).then(
    response => {
      return response.json()
    }
  )
}
export { fetchJjals }
