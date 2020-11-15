export const isArray = (dataArray) => {
  if (!Array.isArray(dataArray)) throw new Error('데이터가 배열이 아닙니다.')
}

export const isPlainObject = (dataObj) => {
  if (Object.prototype.toString.call(dataObj) !== '[object Object]')
    throw new Error('데이터 요소가 객체가 아닙니다.')
}

export const hasKey = (dataObj) => {
  if (!dataObj.hasOwnProperty('text')) throw new Error('text값이 없습니다.')
  if (!dataObj.hasOwnProperty('isCompleted'))
    throw new Error('isCompleted값이 없습니다.')
}

export const hasRightType = (data) => {
  if (typeof data.text !== 'string')
    throw new Error('text의 값이 문자열이 아닙니다.')
  if (typeof data.isCompleted !== 'boolean')
    throw new Error('isCompleted의 값이 참 혹은 거짓이 아닙니다.')
}
