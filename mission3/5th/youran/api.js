import { URL, ERROR_MESSAGE } from '../constant.js'

export async function loadJSONData(keyword) {
  try {
    const response = await fetch(`${URL.IMAGE_API}?text=${keyword}`)
    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.API_ERROR)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
