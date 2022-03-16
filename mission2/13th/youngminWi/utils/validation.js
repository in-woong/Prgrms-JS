export const validateNewData = (data) => {
  if (data === null || data === undefined) {
    throw new Error(`해당 데이터는 입력할 수 없습니다. ( 현재 입력 데이터 : ${data} )`)
  }

  if (typeof data !== 'string') {
    throw new Error(`텍스트만 입력 가능합니다. ( 현재 입력 데이터 : ${typeof data} )`)
  }

  if (data.length === 0) {
    throw new Error(`할 일을 입력해주세요.`)
  }
}

export const validateNewState = (state) => {
  if (!Array.isArray(state)) {
    throw new Error(`state 가 배열이 아닙니다. ( 현재 state 타입 : ${typeof state} )`)
  }

  if (!state.every((todo) => typeof todo === 'object')) {
    throw new Error(`각 Todo 데이터는 object 형태여야 합니다.`)
  }

  if (!state.every((todo) => typeof todo.text === 'string' && typeof todo.isCompleted === 'boolean')) {
    throw new Error('올바른 데이터 타입 구성이 아닙니다.')
  }

  if (!state.every((todo) => 'text' in todo && 'isCompleted' in todo)) {
    throw new Error(`올바른 데이터 구성 요소가 아닙니다.`)
  }
}
