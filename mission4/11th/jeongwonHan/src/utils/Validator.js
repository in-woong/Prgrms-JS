import ErrorMessage from './ErrorMessage.js'

export const todoValidator = (data) => {
  if (data === null && data === '') {
    throw new Error(ErrorMessage.DATA_IS_ERROR('Todo', '빈 값'))
  }

  if (!Array.isArray(data)) {
    throw new Error(ErrorMessage.DATA_IS_NOT_ERROR('Todo', 'Array'))
  }

  data.forEach((todo) => {
    if (typeof todo !== 'object') {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR('Todo', 'object'))
    }

    if (!todo.hasOwnProperty('_id')) {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR('Todo', '_id'))
    }

    if (!todo.hasOwnProperty('content')) {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR('Todo', 'content'))
    }

    if (!todo.hasOwnProperty('isCompleted')) {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR('Todo', 'isCompleted'))
    }
  })
}

export const userValidator = (data) => {
  if (data === null && data === '') {
    throw new Error(ErrorMessage.DATA_IS_ERROR('User', '빈 값'))
  }

  if (!Array.isArray(data)) {
    throw new Error(ErrorMessage.DATA_IS_NOT_ERROR('User', 'Array'))
  }
}
