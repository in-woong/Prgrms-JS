import { JJAL_URL } from './constants.js'
import { queryString } from './util.js'

export const fetchJjalData = async value => {
  try {
    const res = await fetch(`${JJAL_URL}?${queryString(value)}`)
    if (!res.ok) {
      throw new Error('[api] API를 확인해주세요.')
    }
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}
