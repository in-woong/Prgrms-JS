import { validateConstructor } from './utils.js'

function TodoCount() {
  validateConstructor.call(this)
  this.$countComponent = document.createElement('div')  
}

TodoCount.prototype.render = function(todoData) {
  const totalCount = todoData.length
  const completedCount = (todoData.filter(todo => todo.isCompleted)).length
  const countHtmlString = `<span>Total: ${totalCount}</span> / <span>Completed: ${completedCount}</span>`
  this.$countComponent.innerHTML = countHtmlString
}

export default TodoCount