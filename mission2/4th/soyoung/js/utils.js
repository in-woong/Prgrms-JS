export const throwError = message => {
  throw new Error(message)
}

export const hasValidProperty = (obj, property) => {
  for (const prop in property) {
    if (!obj.hasOwnProperty(prop)) {
      return false
    }
    if (typeof obj[prop] !== property[prop]) {
      return false
    }
  }
  return true
}
export const isElement = obj => obj instanceof Element

export const setAttr = (elem, attrName, value) => {
  const attr = document.createAttribute(attrName)
  attr.value = value
  elem.setAttributeNode(attr)
}
