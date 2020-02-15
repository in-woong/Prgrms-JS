const isNullOrUndefined = function(data) {
  return data === null || data === undefined
}

const isArray = function(data) {
  return Array.isArray(data)
}

const isInteger = function(data) {
  return Number.isInteger(data)
}

// 전달받는 데이터가 원하는 타입의 형태가 맞는지 확인하는 함수
const isDataTypeCorrect = function(data, type) {
  return toString.call(data) === type
}

const isEventHandlerValid = function(handler) {
  return handler && isDataTypeCorrect(handler, '[object Function]')
}
