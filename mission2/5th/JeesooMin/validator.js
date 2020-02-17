const isNil = function(data) {
  return data === null || data === undefined
}

// 전달받는 데이터가 원하는 타입의 형태가 맞는지 확인하는 함수
const isDataTypeCorrect = function(data, type) {
  return typeof type === 'string' && toString.call(data) === type
}

export { isNil, isDataTypeCorrect }
