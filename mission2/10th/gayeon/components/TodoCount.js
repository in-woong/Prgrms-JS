export default function TodoCount(todoData, onCount) {
  this.data = todoData

  const todoCount = this.data.length
  const completedCount = this.data.filter(d => d.isCompleted).length

  onCount(todoCount, completedCount)
}
