export default function debounce(fn, wait) {
  let timerId = null

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, wait)
  }
}