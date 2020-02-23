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

export const isString = targetData => {
  return typeof targetData === 'string'
}

export const isArray = targetData => {
  return Array.isArray(targetData)
}

export const isNil = targetData => {
  return targetData === null || targetData === undefined
}

export const isSet = targetData => {
  return typeof targetData === 'object' && targetData instanceof Set
}

export const isValidtarget = targetSelector => {
  const $domWithGivenSelector = document.querySelectorAll(`${targetSelector}`)
  return $domWithGivenSelector && $domWithGivenSelector.length === 1
}
