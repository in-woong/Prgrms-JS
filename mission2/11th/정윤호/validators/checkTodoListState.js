import ERROR_MESSAGE from '../constants/messages.js'
import STATE_TYPE from '../constants/type.js'

const checkTodoListState = (data) => {
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
    if (typeof todoItem !== STATE_TYPE.OBJECT) {
      throw new Error(ERROR_MESSAGE.HAS_NOT_OBJECT)
    }

    if (!todoItem.hasOwnProperty(STATE_TYPE.TEXT)) {
      throw new Error(ERROR_MESSAGE.HAS_NOT_TEXT)
    }

    if (!todoItem.hasOwnProperty(STATE_TYPE.ISCOMPLETED)) {
      throw new Error(ERROR_MESSAGE.HAS_NOT_ISCOMPLETED)
    }
  })
}

export default checkTodoListState
