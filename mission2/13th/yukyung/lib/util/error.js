export function isValidData(data) {
  if (!data.text) {
    throw new Error('할 일을 입력해 주세요.')
  }

  if (typeof data.text !== 'string') {
    throw new Error('할 일은 문자만 입력 가능합니다.')
  }

  if (typeof data.isCompleted !== 'boolean') {
    throw new Error('할 일 완료의 값은 true/false만 가능합니다.')
  }
}

export function checkDataType(data) {
  if (!Array.isArray(data)) {
    throw new Error('유효하지 않은 데이터 타입입니다.')
  }

  data.every(isValidData)
}
