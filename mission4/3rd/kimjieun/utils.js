export const $ = selector => document.querySelector(selector)

export const createElement = (element, attrs) => {
  const $element = document.createElement(element)
  attrs.forEach(attr => $element.setAttribute(attr.name, attr.value))
  return $element
}
