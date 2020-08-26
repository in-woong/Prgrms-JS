export const debounce = (func, threshold) => {
  let debounceTimeout
  return (...args) => {
    if (debounceTimeout) clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      func(...args)
      debounceTimeout = null
    }, threshold)
  }
}
