export const debounce = (callback, time) => {
  let timer = null

  const delayedCallback = (...params) => {
    clearTimeout(timer)
    timer = null
    return callback(...params)
  }

  const debouncedCallback = (...params) => {
    if (timer) return
    timer = setTimeout(() => delayedCallback(...params), time)
  }

  return debouncedCallback
}
