import { ERR_MSG } from '../constants/index.js'

function validateTarget($el) {
  if ($el === document.body || !document.body.contains($el)) {
    throw new Error(ERR_MSG.NO_ELEMENT)
  }
  return $el
}

function validateTodoObj(obj) {
  if (!('content' in obj) && typeof obj.content !== 'string') {
    throw new Error('todo-content: ' + ERR_MSG.INVAILD_DATA)
  }
  if (!('isCompleted' in obj) && typeof obj.isCompleted !== 'boolean') {
    throw new Error('todo-isCompleted' + ERR_MSG.INVAILD_DATA)
  }
  return obj
}

function vaildateTodos(data) {
  if (!data) {
    throw new Error(ERR_MSG.NO_DATA)
  }
  if (!Array.isArray(data)) {
    throw new Error(ERR_MSG.INVAILD_DATA)
  }
  data.forEach((obj) => validateTodoObj(obj))

  return data
}

export { vaildateTodos, validateTodoObj, validateTarget }
