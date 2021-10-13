export const $ = (ele, dom = document) => dom.querySelector(ele)

export const ERROR_MSSAGE = {
  IS_NOT_NEW: 'new 키워드로 생성된 인스턴스가 아닙니다.',
  DATA_IS_NOT_ARRAY: '데이터의 형태가 배열이 아닙니다.',
  VALUE_IS_NOT_OBJECT: '데이터의 값 중 객체가 아닌 값이 있습니다.',
  TEXT_UNDEFINED: '데이터의 text들 중 적합하지 않은 값이 있습니다.',
  INPUT_TEXT_ERROR: '입력한 텍스트가 적합하지 않은 형태입니다.',
}

const isOnlySpace = (str) => str.trim().length === 0

export const isAvailableValue = (str) => str == undefined || typeof str !== 'string' || isOnlySpace(str)
