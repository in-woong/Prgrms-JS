export default function debounce(timer, fn) {
  let timerId = null

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, timer)
  }
}
