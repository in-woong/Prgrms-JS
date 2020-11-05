export const validateTypeOfDataArray = (validate) => {
  return function (dataArr) {
    if (!Array.isArray(dataArr)) {
      throw Error('data is not array')
    }

    if (!dataArr.every((data) => validate(data))) {
      throw Error('data type is wrong')
    }
    return true
  }
}
