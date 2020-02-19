const $ = selector => {
  return document.querySelector(selector)
}

const makeID = () => {
  return Date.now()
}

const isObject = target => {
  return target !== null && !Array.isArray(target) && typeof target === 'object'
}

const isElement = target => {
  return target instanceof HTMLElement
}

const checkCustomType = (type, target) => {
  if (!isObject(target) || !isObject(type)) return false

  for (const property in type) {
    if (
      !target.hasOwnProperty(property) ||
      typeof target[property] !== type[property]
    )
      return false
  }
  return true
}

const isAllTodoType = todoList => {
  const todoType = { id: 'number', text: 'string', isCompleted: 'boolean' }
  for (const todo of todoList) {
    if (!checkCustomType(todoType, todo)) return false
  }

  return true
}

const validateData = data => {
  if (!Array.isArray(data)) {
    throw new Error(`데이터가 Array가 아닙니다. data: ${typeof data}`)
  }

  if (!isAllTodoType(data)) {
    throw new Error(`데이터 배열에 TODO 입이 아닌 원소가 있습니다. `)
  }
}

const validateElement = $element => {
  if (!isElement($element))
    throw new Error(`정상적인 요소가 아닙니다. element: ${$element}`)
}

export { $, makeID, validateData, validateElement }
