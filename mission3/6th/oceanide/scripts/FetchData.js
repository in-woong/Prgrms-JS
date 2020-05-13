import { JJAL_URL } from './constant.js'
import { getURL } from './util.js'

const FetchData = (params, onFetchData) => {
  const url = getURL(JJAL_URL, params)

  fetch(url)
    .then((rsp) => {
      if (rsp.status === 200) {
        return rsp.json()
      } else {
        throw new Error('Invalid response status')
      }
    })
    .then((data) => onFetchData(data))
    .catch((err) => console.log(err))
}

export default FetchData
