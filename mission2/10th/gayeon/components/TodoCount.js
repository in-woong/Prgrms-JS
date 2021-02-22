export default function TodoCount(countElement, todoElement) {
  const todoCount = todoElement.childElementCount
  const completedCount = todoElement.getElementsByClassName('completed').length

  countElement.innerHTML = `<div>${completedCount}/${todoCount}</div>`
}
