import { SELECTOR } from './constant.js'

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

export const showErrorMessage = error => {
  document.querySelector(SELECTOR.ERROR_MESSAGE).innerHTML = error.message
  console.error(error)
}
