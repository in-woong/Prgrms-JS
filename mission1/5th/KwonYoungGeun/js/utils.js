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
 * 데이터가 '객체'이면서 'TODO 아이템'인지 검증하는 함수
 * TODO: 코드 복잡도가 높은거 같은데, 좋은 아이디어가 떠오르면 리팩토링하기
 * @param {*} target todo 데이터 배열 원소 1개
 */
const isTodoType = target => {
  if (!isObject(target)) return false

  const todoType = { text: 'string', isCompleted: 'boolean' }
  for (let property in todoType) {
    if (
      !target.hasOwnProperty(property) ||
      typeof target[property] !== todoType[property]
    )
      return false
  }

  return true
}

const isAllTodo = todoList => {
  for (let i = 0; i < todoList.length; i++) {
    if (!isTodoType(todoList[i])) return false
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
