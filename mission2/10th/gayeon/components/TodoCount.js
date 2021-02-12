export default function TodoCount(countElement, todoData) {
  this.data = todoData

  const todoCount = this.data.length
  const completedCount = this.data.filter(d => d.isCompleted).length

  countElement.innerHTML = `<div>${completedCount}/${todoCount}</div>`
}
