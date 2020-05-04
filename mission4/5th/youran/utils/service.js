import { SELECTOR } from './constants.js'
/*
권영근님 코드 참조
mission3/5th/KwonYoungGeun/js/utils/index.js
*/
export const $ = selector => {
  return document.querySelector(selector)
}

export function handleError(error) {
  console.error(error)
  let message
  if (error.status) {
    message = `Api Error - ${error.message} (${error.status})`
  } else if (this) {
    // component에서 발생
    message = `${error.message} at ${this.constructor.name}`
  } else {
    message = `Unhandled Error - ${error.message}`
  }
  $(SELECTOR.ERROR).innerHTML = message
}
