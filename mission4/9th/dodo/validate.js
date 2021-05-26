export const checkCalledByNewKeyword = (target) => {
  if (!target) {
    throw Error('must be called by using new keyword')
  }
}

export const validateHTMLDOMElement = (target) => {
  if (!(target instanceof HTMLElement)) {
    throw new Error(`${target} is not HTML DOM Element`)
  }
}

export const validateTodo = ({ _id, content, isCompleted }) => {
  if (typeof _id !== 'string' || typeof content !== 'string' || typeof isCompleted !== 'boolean') {
    throw new Error('todo type error')
  }
  return true
}

const validateArray = ({ arr, validator, error }) => {
  if (!Array.isArray(arr) || arr.length === 0 ? false : arr.some(validator)) {
    throw error
  }
}

export const validateTodos = (todos) => {
  validateArray({ arr: todos, validator: (todo) => !validateTodo(todo), error: new Error('todos type error') })
}

export const validateUsers = (users) => {
  validateArray({ arr: users, validator: (user) => typeof user !== string, error: new Error('users type error') })
}
