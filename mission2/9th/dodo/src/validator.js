export const validateTypeOfDataArray = (validate) => {
  return function (dataArr) {
    if (!Array.isArray(dataArr)) {
      throw Error('data is not array')
    }

    if (!dataArr.some((data) => validate(data))) {
      throw Error('data type is wrong')
    }
    return true
  }
}

export const validateDOMElement = (element) => {
  if (element instanceof HTMLElement) return true
  throw Error('target is not found')
}
