import { ERR_MSG, TODO_ITEM_STATUS_ENUM } from '../constants/index.js'

function validateTarget($el) {
  if ($el === document.body || !document.body.contains($el)) {
    throw new Error(ERR_MSG.NO_ELEMENT)
  }
  return $el
}

function validateTodoObj(obj) {
  if (!('text' in obj) && typeof obj.text !== 'string') {
    throw new Error('todo-text' + ERR_MSG.INVAILD_DATA)
  }
  if (!('isCompleted' in obj) && typeof obj.isCompleted !== 'boolean') {
    throw new Error('todo-isCompleted' + ERR_MSG.INVAILD_DATA)
  }
  if (!('status' in obj) && !(obj.status in TODO_ITEM_STATUS_ENUM)) {
    throw new Error('todo-status' + ERR_MSG.INVAILD_DATA)
  }
  return obj
}

function validateData(data) {
  if (!data) {
    throw new Error(ERR_MSG.NO_DATA)
  }
  if (!Array.isArray(data)) {
    throw new Error(ERR_MSG.INVAILD_DATA)
  }
  data.forEach((obj) => validateTodoObj(obj))

  return data
}

export { validateData, validateTodoObj, validateTarget }
