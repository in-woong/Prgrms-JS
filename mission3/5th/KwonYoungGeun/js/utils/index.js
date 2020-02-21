const $ = target => {
  return document.querySelector(target)
}

const objectToQueryString = parameters => {
  let queries = []

  console.log(parameters)
  for (let key in parameters) {
    queries.push(`${key}=${parameters[key]}`)
  }

  console.log('결과:', queries.join('&'))

  return queries.join('&')
}

// 레퍼런스: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
const debounced = (delay, fn) => {
  let timerId
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

export { $, objectToQueryString, debounced }
