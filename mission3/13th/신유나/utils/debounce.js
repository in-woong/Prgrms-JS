export function debounce(callback, delay = 0) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(null, args)
    }, delay)
  }
}
