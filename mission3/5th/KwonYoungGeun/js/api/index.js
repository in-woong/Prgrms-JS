import { config } from './api.config.js'
import { objectToQueryString } from '../utils/index.js'

const fetchJjals = async parameterObject => {
  try {
    const response = await fetch(
      `${config.baseUrl}?${objectToQueryString(parameterObject)}`
    )
    return response.json()
  } catch (error) {
    alert('api 에러닷!')
    console.error(error)
  }
}

export { fetchJjals }
