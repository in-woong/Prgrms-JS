export const $ = target => {
  return document.querySelector(target)
}

export const objectToQueryString = parameters =>
  Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join('&')

// 레퍼런스: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
export const debounce = (fn, delay) => {
  let timerId
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}
