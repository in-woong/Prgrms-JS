export const debounce = async (callback, limit = 500) => {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      await callback.apply(this, args)
    }, limit)
  }
}
