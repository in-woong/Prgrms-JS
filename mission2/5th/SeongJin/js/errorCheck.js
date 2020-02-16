const errorCheck = {
  isInvalidInstance(thisObj, Component) {
    if (!(thisObj instanceof Component))
      throw new Error('new 키워드로 생성해주세요')
  },
  isNotArray(data) {
    if (!Array.isArray(data)) throw new Error('데이터 타입이 배열이 아닙니다.')
  },
  isNotData(data) {
    if (data === null || data === undefined)
      throw new Error('데이터가 올바르지 않습니다.')
  },
  isInvalidData(data) {
    data.forEach(todo => {
      if (!todo.hasOwnProperty('text') || typeof todo.text !== 'string')
        throw new Error('데이터 형식이 올바르지 않습니다')
    })
  },
  isEmptyText(text) {
    if (text === '') throw new Error('투두가 빈 텍스트 입니다.')
  },
}

export default errorCheck
