import { validator } from '../utils.js'

function TodoList($app, todos, removeAllData) {
  this.$app = $app
  this.$list = document.createElement('ul')
  this.todos = todos
  this.removeAllData = removeAllData
  this.init()
}

TodoList.prototype.init = function() {
  this.bindEvent()
}

TodoList.prototype.bindEvent = function() {
  this.$list.addEventListener('remove-all', (e) => {
    this.removeAllData()
  })
}

TodoList.prototype.setState = function(nextData) {
  this.todos = nextData
  this.render()
}

TodoList.prototype.clear = function() {
  this.$list.innerHTML = ''
}

TodoList.prototype.render = function() {
  const { todos, $list, $app } = this
  
  this.clear()
  
  if (validator.isEmptyList(todos)) {
    $list.innerHTML += '<li class="empty-todos">- 할일을 추가해주세요! -</li>'
  } else {
    todos.forEach(({ id, text, isCompleted }, index) => {
      const liString = `
        <li id="todo-${id}" class="todo-li" data-index="${index}">
          <input type="checkbox" class="check-todo"${isCompleted ? ' checked' : ''}>
          <span class="text-todo">${isCompleted ? `<strike>${text}</strike>` : text}</span>
          <button type="button" class="btn-remove-todo">X</button>
        </li>
      `
      $list.innerHTML += liString
    })
  }

  $app.appendChild($list)
}

export default TodoList