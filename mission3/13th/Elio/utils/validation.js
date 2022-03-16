export const validateInstance = (obj, func) => {
  if (!obj instanceof func) {
    throw new Error('new 키워드와 함께 생성되지 않았습니다.')
  }
}

export const validateArray = (array) => {
  return Array.isArray(array)
}
