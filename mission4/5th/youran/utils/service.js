import { SELECTOR } from './constants.js'
/*
권영근님 코드 참조
mission3/5th/KwonYoungGeun/js/utils/index.js
*/
export const $ = selector => {
  return document.querySelector(selector)
}

export function handleError(error) {
  const $target = $(SELECTOR.ERROR)
  console.error(error)
  $target.innerHTML = `<p>${error.message} at ${this.constructor.name}</p>`
}
