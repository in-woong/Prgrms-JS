import TodoCount from './TodoCount.js'

function TodoList(data, toggleTodo, deleteTodo) {
  this.data = data

  this.toggleTodo = toggleTodo
  this.deleteTodo = deleteTodo

  const $todoList = document.querySelector('#todo-list')

  $todoList.addEventListener('click', (event) => {
    event.stopPropagation()
    if (event.target.className === 'todo-item') {
      const index = Number(event.target.getAttribute('key'))
      this.toggleTodo(index)
    } else if (event.target.className === 'delete-button') {
      const index = Number(event.target.parentNode.getAttribute('key'))
      this.deleteTodo(index)
    }
  })

  this.render = function () {
    $todoList.innerHTML = this.data
      .map(
        (todo, index) =>
          `<li key="${index}" class="todo-item">${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`
          } <button class="delete-button">삭제</button></li>`
      )
      .join('')

    this.todoCount = new TodoCount(this.data)
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}

export default TodoList
