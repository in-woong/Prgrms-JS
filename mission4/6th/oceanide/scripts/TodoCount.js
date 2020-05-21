function TodoCount(todos, $target) {
  if (!(this instanceof TodoCount)) {
    throw new Error('TodoCount must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

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
    $target.innerHTML = `${this.completedTodoCount} / ${this.totalTodoCount}`
  }

  this.init = function () {
    this.todos = todos
    this.$target = $target

    calculateTodoCount()
  }

  this.init()
  this.render()
}

export default TodoCount
