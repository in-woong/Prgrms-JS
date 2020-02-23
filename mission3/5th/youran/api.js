import { URL } from '../constant.js'

export async function loadJSONData(keyword) {
  try {
    const response = await fetch(`${URL.IMAGE_API}?text=${keyword}`)
    if (!response.ok) {
      throw new HTTPError(response.Error)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
