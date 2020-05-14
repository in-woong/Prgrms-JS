import { JJAL_URL } from './constant.js'
import { getURL } from './util.js'

const FetchData = async (params) => {
  const url = getURL(JJAL_URL, params)

  try {
    const rsp = await fetch(url)
    if (!rsp.ok) {
      throw new Error('response status failed')
    }
    return await rsp.json()
  } catch (err) {
    console.log(err)
  }
}

export default FetchData
