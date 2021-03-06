const isArray = target => {
  return Array.isArray(target)
}

const isObject = target => {
  return target !== null && !Array.isArray(target) && typeof target === 'object'
}

const isElement = target => {
  return target instanceof HTMLElement
}

/**
 * 커스텀 타입을 검증합니다.
 * @param {object} type 커스텀 타입
 * @param {object} target 비교 당할 대상
 */
const checkCustomType = (type, target) => {
  if (!isObject(target) || !isObject(type)) return false

  for (let property in type) {
    if (
      !target.hasOwnProperty(property) ||
      typeof target[property] !== type[property]
    )
      return false
  }

  return true
}

const isAllTodo = todoList => {
  const todoType = { text: 'string', isCompleted: 'boolean' }
  for (todo of todoList) {
    if (!checkCustomType(todoType, todo)) return false
  }

  return true
}

const validateData = data => {
  if (!isArray(data))
    throw new Error(`데이터가 Array가 아닙니다. data: ${typeof data}`)

  if (!isAllTodo(data))
    throw new Error(`데이터 배열에 TODO 입이 아닌 원소가 있습니다. `)
}

const validateElement = $element => {
  if (!isElement($element))
    throw new Error(`정상적인 요소가 아닙니다. element: ${$element}`)
}
