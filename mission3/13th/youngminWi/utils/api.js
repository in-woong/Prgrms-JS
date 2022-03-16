import { API_URL } from '../common/constants.js'

const request = async (url) => {
  const response = await fetch(`${API_URL}${url}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok, status code : ${(response.ok, response.status)}`)
    }
    return response.json()
  })

  return await response
}

export const getZzalData = (keyword) => request(keyword)
