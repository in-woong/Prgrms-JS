function TodoCount(todos, $target) {
  this.todos = todos
  this.$target = $target

  this.render()
}

TodoCount.prototype.render = function() {
  const completedCount = this.todos.filter(todo => todo.isCompleted).length

  this.$target.innerHTML = `
    <span>${completedCount}/${this.todos.length}<span/>
  `
}
