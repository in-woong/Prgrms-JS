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

export const buildQueryString = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')
}

export const getType = (value) =>
  Object.prototype.toString.call(value).slice(8, -1)
export const isNull = (value) => getType(value) === 'Null'
export const isUndefined = (value) => getType(value) === 'Undefined'
export const isString = (value) => getType(value) === 'String'
export const isArray = (value) => getType(value) === 'Array'
export const isObject = (value) => getType(value) === 'Object'
export const isBoolean = (value) => getType(value) === 'Boolean'
