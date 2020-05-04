import { config } from './config.js'
import { objectToQueryString } from '../utils/index.js'

export const fetchJjals = async parameterObject => {
  try {
    const response = await fetch(
      `${config.baseUrl}?${objectToQueryString(parameterObject)}`
    )
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
