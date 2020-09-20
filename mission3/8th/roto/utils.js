let timer = null

export const debounce = (callback, debounceMS) => {
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(callback, debounceMS)
}
