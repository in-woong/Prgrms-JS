function TodoCount($app, todos) {
  this.$app = $app
  this.todos = todos
  this.$count = document.createElement('dl')
  this.totalCount = this.getTotalCount()
  this.completedCount = this.getCompletedCount()
}

TodoCount.prototype.getTotalCount = function() {
  return this.todos.length
}

TodoCount.prototype.getCompletedCount = function() {
  return this.todos.filter(({ isCompleted }) => isCompleted).length
}

TodoCount.prototype.setState = function (nextData) {
  this.todos = nextData
  this.totalCount = this.getTotalCount()
  this.completedCount = this.getCompletedCount()
  this.render()
}

TodoCount.prototype.render = function () {
  const { totalCount, completedCount, $count, $app } = this 
  $count.className = 'todo-count'
  $count.innerHTML = `
    <dt>전체 수</dt>
    <dd>${ totalCount }</dd>
    <dt>완료 수</dt>
    <dd>${ completedCount }</dd>
  `
  $app.appendChild($count)
}

export default TodoCount