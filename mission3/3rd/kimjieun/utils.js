const error = {
  NORARRAY_DATA: "타입은 Array가 아닙니다.",
  NO_USED_NEW_KEYWORD: "인스턴스가 아닙니다. new 키워드를 사용하여 생성해주세요.",
}

export const $target = (selector) => document.querySelector(selector)

export const createElement = (element, attrName, attrValue) => {
  const $element = document.createElement(element)
  $element.setAttribute(attrName, attrValue)
  return $element
}

export const checkValidData = (data) => {
  if (!Array.isArray(data)) throw new Error(error.NORARRAY_DATA)
}

export const checkUsedNewKeyword = (instance) => {
  if (!this instanceof instance) throw new Error(error.NO_USED_NEW_KEYWORD)
}

export const debounce = (callback, time) => {
  let timer = null
  if (timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(callback, time)
}
