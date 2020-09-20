import TodoCount from './TodoCount.js'

function TodoList(params) {
  this.$target = params.$target
  const toggleTodo = params.toggleTodo
  const deleteTodo = params.deleteTodo
  let data = params.data || []

  this.todoEventListener = () => {
    this.$target.addEventListener('click', (e) => {
      if (event.target.className === 'todo-item') {
        const index = Number(event.target.getAttribute('key'))
        toggleTodo(index)
      } else if (event.target.className === 'delete-button') {
        const index = Number(event.target.parentNode.getAttribute('key'))
        deleteTodo(index)
      }
    })
  }

  this.render = function () {
    this.$target.innerHTML = data
      .map(
        (todo, index) =>
          `<li key="${index}" class="todo-item">${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`
          } <button class="delete-button">삭제</button></li>`
      )
      .join('')

    this.todoCount = new TodoCount(data)
  }

  this.setState = function (nextData) {
    data = nextData
    this.render()
  }

  this.render()
  this.todoEventListener()
}

export default TodoList
