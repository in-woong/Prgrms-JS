const isElement = $element => {
  return $element instanceof HTMLElement
}

export const validateElement = $element => {
  if (!isElement($element)) {
    throw new Error(`정상적인 요소가 아닙니다. element: ${$element}`)
  }
}
