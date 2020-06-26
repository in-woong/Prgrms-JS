function TodoList(data, $target, onToggleTodo, onDeleteTodo) {
  if (!(this instanceof TodoList)) {
    throw new Error('TodoList must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

  const clickEventHandler = (e) => {
    const parentNode = e.target.closest('.todo')
    if (!parentNode) {
      return
    }

    const id = parseInt(parentNode.getAttribute('todo-id'))

    if (e.target.classList.contains('todo-text')) {
      onToggleTodo(id)
    } else if (e.target.classList.contains('todo-remove')) {
      onDeleteTodo(id)
    }
  }

  const getTodosText = () =>
    this.todos
      .map(
        (todo, index) =>
          `<li class="todo" todo-id="${index}">
          ${
            todo.isCompleted
              ? `<s><span class="todo-text">${todo.content}</span></s>`
              : `<span class="todo-text">${todo.content}</span>`
          }
          <button class="todo-remove">X</button>
          </li>`
      )
      .join('')

  this.render = function () {
    $target.innerHTML = getTodosText()
  }

  this.setState = function (nextData) {
    this.todos = nextData

    $target.innerHTML = ''
    this.render()
  }

  this.bindEvents = function () {
    this.$target.addEventListener('click', clickEventHandler)
  }

  this.init = function () {
    this.todos = data
    this.$target = $target
    this.bindEvents()
  }

  this.init()
  this.render()
}

export default TodoList
