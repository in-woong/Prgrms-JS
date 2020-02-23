export const debounce = (targetFunction, waitTime) => {
  let timer = null
  return (...args) => {
    const debouncedFunction = () => {
      clearTimeout(timer)
      timer = null
      return targetFunction.call(this, ...args)
    }
    if (timer) {
      return
    }
    timer = setTimeout(debouncedFunction, waitTime)
  }
}
