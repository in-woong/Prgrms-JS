function TodoCount($app, totalTodoCount, completedTodoCount) {
  const craeteTodoCountElement = (text, count) => {
    const pElement = document.createElement('p')
    pElement.textContent = `${text} ${count}`
    return pElement
  }

  this.$target = $app
  this.totalTodoCount = totalTodoCount
  this.completedTodoCount = completedTodoCount

  this.setState = function (newTotalTodoCount, newCompletedTodoCount) {
    this.totalTodoCount = newTotalTodoCount
    this.completedTodoCount = newCompletedTodoCount
  }

  this.render = function () {
    this.$target.appendChild(craeteTodoCountElement(`총 Todo 수`, this.totalTodoCount))
    this.$target.appendChild(craeteTodoCountElement(`완료한 To do 수`, this.completedTodoCount))
  }
}
