function validate(todos) {
  if (!Array.isArray(todos)) {
    throw new Error('[error] parameter is not array.')
  }
  todos.forEach((todo) => {
    if (
      !todo.text ||
      typeof todo.text !== 'string' ||
      typeof todo.isCompleted !== 'boolean'
    ) {
      throw new Error(`[error] todo data type Error.`)
    }
  })
}

function TodoList(props) {
  if (!new.target) {
    throw new Error('[error] TodoList() must be called with new.')
  }

  validate(props.todos)

  this.$target = props.target
  this.deleteTodo = props.deleteTodo
  this.toggleTodo = props.toggleTodo
  this.todos = props.todos
  this.$ul = document.createElement('ul')
  this.$ul.addEventListener('click', (e) => {
    this.delegateEvent(e)
  })
  this.render = function () {
    this.$ul.innerHTML = ''
    this.todos.forEach((todo, index) => {
      new Todo({
        target: this.$ul,
        todo: todo,
        index: index,
      })
    })
  }
  this.setState = function (nextData) {
    this.todos = nextData
    this.render()
  }
  this.delegateEvent = function (e) {
    const index = e.target.getAttribute('index')
    if (e.target.tagName === 'BUTTON') {
      this.deleteTodo(index)
    }
    if (e.target.tagName === 'LI') {
      this.toggleTodo(index)
    }
  }
  this.render()
  this.$target.appendChild(this.$ul)
}
