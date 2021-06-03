import { ERROR_MESSAGE } from '../utils/messages.js'

const checkTodoItemData = (data) => {
  if (data === null) {
    throw new Error(ERROR_MESSAGE.NULL)
  }

  if (data === undefined) {
    throw new Error(ERROR_MESSAGE.UNDEFINED)
  }

  if (!Array.isArray(data)) {
    throw new Error(ERROR_MESSAGE.NOT_ARRAY)
  }

  data.forEach((todoItem) => {
    if (typeof todoItem !== 'object') {
      throw new Error(ERROR_MESSAGE.HAS_NOT_OBJECT)
    }

    if (!todoItem.hasOwnProperty('text')) {
      throw new Error(ERROR_MESSAGE.HAS_NOT_TEXT)
    }

    if (!todoItem.hasOwnProperty('isCompleted')) {
      throw new Error(ERROR_MESSAGE.HAS_NOT_ISCOMPLETED)
    }
  })
}

export default checkTodoItemData
