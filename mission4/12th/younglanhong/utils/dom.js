export const $ = (selector) => document.querySelector(selector) 
export const $$ = (selector) => document.querySelectorAll(selector)

export const createDOMElement = ($target, tagName) => {
  const el = document.createElement(tagName)
  if($target) {
    $target.appendChild(el)
  }
  return el
}
