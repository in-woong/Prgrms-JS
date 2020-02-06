export const ERROR_MSG = {
  ELEMENT: 'Invalid element',
  ARRAY: 'Invalid array',
  STRING: 'Invalid string',
}

export const checkElement = obj => {
  if (obj instanceof Element) return true
  return false
}

export const checkArray = arr => {
  if (Array.isArray(arr)) return true
  return false
}

export const checkString = str => {
  if (typeof str === 'string') return true
  return false
}

//동주님 코드를 참고하였습니다.
export const debounce = (callback, delay) => {
  let timer = null
  return e => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(e)
    }, delay)
  }
}
