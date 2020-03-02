export const $ = target => {
  return document.querySelector(target)
}

export const errorCheck = {
  isInvalidInstance(thisObj, Component) {
    if (!(thisObj instanceof Component)) {
      throw new Error('new 키워드로 생성해주세요')
    } else return thisObj
  },
  isNil(data) {
    if (!data) throw new Error('올바르지 않은 데이터 입니다.')
    else return data
  },
  isEmptyText(text) {
    if (text === '') {
      throw new Error('빈 텍스트 입니다.')
    } else text
  },
  isNotArray(data) {
    if (!Array.isArray(data)) {
      throw new Error('데이터 타입이 배열이 아닙니다.')
    } else return data
  },
  isInvalidData(data) {
    data.some(todo => {
      if (!todo.hasOwnProperty('text') || typeof todo.text !== 'string') {
        throw new Error('데이터 형식이 올바르지 않습니다')
      } else return data
    })
  },
}
