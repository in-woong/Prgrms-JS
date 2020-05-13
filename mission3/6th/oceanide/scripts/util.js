import { DEBOUNCE_TIME } from './constant.js'

export const debounce = (callback, delay = DEBOUNCE_TIME) => {
  let timeoutId = null

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = null
      callback(...args)
    }, delay)
  }
}

export const getURL = (baseUrl, params) => {
  const paramsString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')

  return `${baseUrl}?${paramsString}`
}
