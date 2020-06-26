import { JJAL_URL } from './constant.js'
import { buildQueryString, isNull, isUndefined, isObject } from './util.js'

const validateParams = (params) => {
  if (isNull(params) || isUndefined(params)) {
    return false
  }

  if (!(isObject(params) && 'text' in params)) {
    return false
  }

  return true
}

const fetchData = async (params) => {
  if (!validateParams(params)) {
    throw new Error('Invalid data')
  }

  const res = await fetch(`${JJAL_URL}?${buildQueryString(params)}`)
  if (!res.ok) {
    throw new Error('response status failed')
  }
  return await res.json()
}

export default fetchData
