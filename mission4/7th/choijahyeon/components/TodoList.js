import Todo from './Todo.js'

function validate(todos) {
  if (!Array.isArray(todos)) {
    throw new Error('[error] parameter is not array.')
  }
  todos.forEach((todo) => {
    if (
      !todo.content ||
      typeof todo.content !== 'string' ||
      typeof todo.isCompleted !== 'boolean'
    ) {
      throw new Error(`[error] todo data type Error.`)
    }
  })
}

export default function TodoList({ target, removeTodo, toggleTodo, todos }) {
  if (!new.target) {
    throw new Error('[error] TodoList() must be called with new.')
  }

  validate(todos)

  this.$target = target
  this.removeTodo = removeTodo
  this.toggleTodo = toggleTodo
  this.todos = todos
  this.completedTodos = this.todos.filter((todo) => todo.isCompleted)
  this.incompletedTodos = this.todos.filter((todo) => !todo.isCompleted)
  this.$div = document.createElement('div')
  this.$completedUl = document.createElement('ul')
  this.$incompletedUl = document.createElement('ul')
  this.$completedUl.classList = ['drop-bag']
  this.$incompletedUl.classList = ['drop-bag']
  this.render = () => {
    this.$completedUl.innerHTML = ''
    this.$incompletedUl.innerHTML = ''
    this.todos.forEach((todo) => {
      new Todo({
        target: todo.isCompleted ? this.$completedUl : this.$incompletedUl,
        todo: todo,
      })
    })
  }
  this.setState = (nextData) => {
    this.todos = nextData
    this.render()
  }
  this.delegateEvent = (e) => {
    const id = e.target.getAttribute('id')
    if (e.target.tagName === 'BUTTON') {
      this.removeTodo(id)
    }
  }
  this.render()
  this.$div.appendChild(this.$completedUl)
  this.$div.appendChild(this.$incompletedUl)
  this.$target.appendChild(this.$div)
  this.$div.addEventListener('click', (e) => {
    this.delegateEvent(e)
  })
  this.$div.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('id', e.target.getAttribute('id'))
  })
  this.$div.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  this.$completedUl.addEventListener('drop', (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('id')
    this.toggleTodo(id, true)
  })
  this.$incompletedUl.addEventListener('drop', (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('id')
    this.toggleTodo(id, false)
  })
}
