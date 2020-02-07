const errorHandle = message => {
  throw new Error(message)
}

const isArray = target => {
  return Array.isArray(target)
}

const isElement = target => {
  return target instanceof HTMLElement
}

const dataValidator = data => {
  !isArray(data) &&
    errorHandle(`데이터가 Array가 아닙니다. data: ${typeof data}`)
}

const elementValidator = element => {
  !isElement(element) &&
    errorHandle(`정상적인 요소가 아닙니다. element: ${element}`)
}
