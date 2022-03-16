export const validateInstance = (obj, func) => {
  try {
    if (!obj instanceof func) {
      throw new Error('new 키워드와 함께 생성되지 않았습니다.')
    }
  } catch (e) {
    alert(e.message)
  }
}

export const validateData = (data) => {
  try {
    if (_.isNil(data)) {
      throw new Error('데이터를 식별할 수 없습니다.')
    }

    if (!Array.isArray(data)) {
      throw new Error('Array가 아닌 형태의 데이터입니다.')
    }

    data.forEach((todo) => {
      if (
        !todo.hasOwnProperty('content') ||
        !todo.hasOwnProperty('isCompleted') ||
        !todo.hasOwnProperty('_id')
      ) {
        throw new Error('데이터의 프로퍼티가 올바르지 않습니다.')
      }
      if (todo.content === '') {
        throw new Error('todo의 내용이 비어있습니다.')
      }
      // 데이터 타입 체크 로직
      if (typeof todo.content !== 'string') {
        throw new Error('text의 타입이 올바르지 않습니다.')
      }
      if (typeof todo.isCompleted !== 'boolean') {
        throw new Error('isCompleted의 타입이 올바르지 않습니다.')
      }
      if (_.isNil(todo)) {
        throw new Error('todo의 데이터를 식별할 수 없습니다.')
      }
    })
  } catch (e) {
    alert(e.message)
  }
}
