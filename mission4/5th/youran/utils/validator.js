import { MESSAGE } from './constants.js'

export const validateString = data => {
  if (typeof data !== 'string') {
    throw new Error(MESSAGE.TYPE_ERROR)
  }
  return data
}

export const validateArray = data => {
  if (!Array.isArray(data)) {
    throw new Error(MESSAGE.TYPE_ERROR)
  }
  return data
}
