export const validateTodo = (data) => {
  const dataType = {
    currentUser: 'string',
    todos: 'object',
  }
  if (typeof data !== 'object') {
    throw new Error('데이터 타입이 Object가 아닙니다.')
  }
  if (Object.keys(dataType).some((key) => !(key in data))) {
    throw new Error('Object에 해당하는 property가 없습니다.')
  }
  if (Object.keys(dataType).some((key) => typeof data[key] !== dataType[key])) {
    throw new Error('property의 값이 지정한 타입과 다릅니다.')
  }
}

export const validateArray = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('데이터 타입이 Array가 아닙니다.')
  }
  return data
}

export const validateBoolean = (data) => {
  if (typeof data !== 'boolean') {
    throw new Error('데이터 타입이 Boolean이 아닙니다.')
  }
  return data
}

export const validateString = (data) => {
  if (typeof data !== 'string') {
    throw new Error('데이터 타입이 string이 아닙니다.')
  }
  return data
}
