import TodoCount from './TodoCount.js'

function TodoList(params) {
  this.$target = params.$target
  const toggleTodo = params.toggleTodo
  const deleteTodo = params.deleteTodo
  let data = params.data || []

  this.todoEventListener = () => {
    this.$target.addEventListener('click', (event) => {
      if (event.target.className === 'todo-item') {
        const id = event.target.closest('li').dataset.id
        toggleTodo(id)
      } else if (event.target.className === 'delete-button') {
        const id = event.target.closest('li').dataset.id
        deleteTodo(id)
      }
    })
  }

  this.render = function () {
    this.$target.innerHTML = data
      .map(
        (todo) =>
          `<li data-id="${todo._id}" class="todo-item">${
            todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`
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
