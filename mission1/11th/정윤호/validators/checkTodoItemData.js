import { NULL, UNDEFINED, NOT_ARRAY, HAS_NOT_OBJECT, HAS_NOT_TEXT, HAS_NOT_ISCOMPLETED } from '../utils/messages.js'

const checkTodoItemData = (data) => {
  if (data === null) {
    throw new Error(NULL)
  }

  if (data === undefined) {
    throw new Error(UNDEFINED)
  }

  if (!Array.isArray(data)) {
    throw new Error(NOT_ARRAY)
  }

  data.forEach((todoItem) => {
    if (typeof todoItem !== 'object') {
      throw new Error(HAS_NOT_OBJECT)
    }

    if (!todoItem.hasOwnProperty('text')) {
      throw new Error(HAS_NOT_TEXT)
    }

    if (!todoItem.hasOwnProperty('isCompleted')) {
      throw new Error(HAS_NOT_ISCOMPLETED)
    }
  })
}

export default checkTodoItemData
