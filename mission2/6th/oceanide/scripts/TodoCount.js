function TodoCount(todos, $todoCount) {
  if (!(this instanceof TodoCount)) {
    throw new Error('TodoCount must be called with new')
  }

  this.todos = todos
  this.$todoCount = $todoCount

  const calculateTodoCount = () => {
    this.totalTodoCount = this.todos.length
    this.completedTodoCount = this.todos.filter(
      (todo) => todo.isCompleted
    ).length
  }

  this.setState = function (todos) {
    this.todos = todos
    calculateTodoCount()

    this.render()
  }

  this.render = function () {
    if (!$todoCount) {
      throw new Error('$todoCount must be injected')
    }

    $todoCount.innerHTML = `총 개수: ${this.totalTodoCount} 완료 개수: ${this.completedTodoCount}`
  }

  this.init = function () {
    calculateTodoCount()
  }

  this.init()
  this.render()
}

export default TodoCount
