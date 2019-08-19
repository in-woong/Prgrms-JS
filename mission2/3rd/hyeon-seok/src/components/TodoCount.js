const TodoCount = function({ isCompleted = false, count = 0 }) {
  const message = isCompleted ? '완료된 할 일' : '진행 중인 할 일'

  return `<div>${message} : <span>${count}</span> 개</div>`
}

export default TodoCount
