import TodoCount from './TodoCount.js'

function TodoList(toggleTodo, deleteTodo) {
  this.data = []

  this.toggleTodo = toggleTodo
  this.deleteTodo = deleteTodo

  const $todoList = document.querySelector('#todo-list')

  this.render = function () {
    $todoList.innerHTML = this.data
      .map(
        (todo) =>
          `<li class="todo-item">${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`
          } <button class="delete-button">삭제</button></li>`
      )
      .join('')

    const $todoItems = document.querySelectorAll('.todo-item')
    $todoItems.forEach(($todoItem, index) => {
      $todoItem.addEventListener('click', () => {
        this.toggleTodo(index)
      })
    })

    const $deleteTodoBtns = document.querySelectorAll('.delete-button')
    $deleteTodoBtns.forEach(($deleteTodoBtn, index) => {
      $deleteTodoBtn.addEventListener('click', () => {
        this.deleteTodo(index)
      })
    })

    this.todoCount = new TodoCount(this.data)
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.toggleTodo = function (index) {
    this.data[index].isCompleted = !this.data[index].isCompleted
    this.render()
  }

  this.deleteTodo = function (index) {
    this.data.splice(index, 1)
    this.render()
  }

  this.render()
}

export default TodoList
