export function debounce(fn, wait) {
  let lastTimeoutId = null

  return (...args) => {
    if (lastTimeoutId) {
      clearTimeout(lastTimeoutId)
    }

    lastTimeoutId = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
