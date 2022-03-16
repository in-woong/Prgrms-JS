export const validateInstance = (obj, func) => {
  if (!obj instanceof func) {
    throw new Error('new 키워드와 함께 생성되지 않았습니다.')
  }
}

export const validateData = (data) => {
  if (_.isNil(data)) {
    throw new Error('데이터를 식별할 수 없습니다.')
  }

  if (!Array.isArray(data)) {
    throw new Error('array가 아닌 형태의 데이터입니다.')
  }

  data.forEach((todo) => {
    if (!todo.hasOwnProperty('text') || !todo.hasOwnProperty('isCompleted')) {
      throw new Error('데이터의 내용이 올바르지 않습니다.')
    }
    if (todo.text === '') {
      throw new Error('todo의 내용이 비어있습니다.')
    }
    // 데이터 타입 체크 로직
    if (typeof todo.text !== 'string') {
      throw new Error('text의 타입이 올바르지 않습니다.')
    }
    if (typeof todo.isCompleted !== 'boolean') {
      throw new Error('isCompleted의 타입이 올바르지 않습니다.')
    }
    if (_.isNil(todo)) {
      throw new Error('todo의 데이터를 식별할 수 없습니다.')
    }
  })
}
