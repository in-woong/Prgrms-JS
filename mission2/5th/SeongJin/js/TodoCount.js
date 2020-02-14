function TodoCount(todos) {
  this.todos = todos
  this.$count = document.getElementById('count')

  this.totalCount = () => {
    return this.todos.length
  }

  this.completedCount = () => {
    return this.todos.filter(todo => todo.isCompleted).length
  }

  this.render = () => {
    this.$count.innerHTML = `총 Todo의 개수 : ${this.totalCount()} / 완료된 Todo의 개수 : ${this.completedCount()}`
  }
}

export default TodoCount
