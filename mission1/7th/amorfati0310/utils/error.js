class NotArray extends Error {
  name = 'NotArray'
  message = 'Array가 아닙니다.'
}

class NotComponentsElement extends Error {
  name = 'NotComponentsElement'
  message = 'string | HTMLLIElement 이 아닙니다.'
}

class InvalidTodoItems extends Error {
  name = 'InvalidTodoItems'
  constructor(payload) {
    super()
    this.payload = payload
  }
  message = '부적절한 todoItem 입니다. example ({text: "todo"})'
}

export { NotArray, NotComponentsElement, InvalidTodoItems }
