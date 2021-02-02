class TodoInput {
  /**
   *
   * @param {String} target
   * @param {Function} addTodo
   */
  constructor({ target, addTodo }) {
    this.$target = target
    this.state = ''
    this.addTodo = addTodo
    this.$target.focus()
    this.initEventListner()
  }

  initEventListner() {
    this.$target.addEventListener('input', this.onInput.bind(this))
    this.$target.addEventListener('keypress', this.onSubmit.bind(this))
  }

  onInput(e) {
    e.preventDefault()
    this.setState(e.target.value)
  }

  onSubmit(e) {
    if (e.key !== 'Enter') return
    if (this.state.length === 0) return
    this.addTodo({ text: this.state, isCompleted: false })
    this.setState('')
  }

  setState(newState) {
    this.state = newState
    this.render()
  }

  render() {
    this.$target.value = this.state
  }
}

class TodoList {
  /**
   *
   * @param {String} target
   * @param {Array} initialData
   */
  constructor({ target, initialData = [] }) {
    this.$target = target
    this.$target.addEventListener('click', this.onClick.bind(this))
    this.state = initialData
    this.render()
  }

  toggleComplete(target) {
    const index = parseInt(target.parentNode.dataset.index)
    const { text, isCompleted } = this.state[index]
    this.setState([
      ...this.state.slice(0, index),
      {
        text,
        isCompleted: !isCompleted,
      },
      ...this.state.slice(index + 1),
    ])
  }

  delete(target) {
    const index = parseInt(target.parentNode.dataset.index)
    this.setState([...this.state.slice(0, index), ...this.state.slice(index + 1)])
  }

  onClick(event) {
    const action = event.target.dataset.action
    if (!action) return
    this[action](event.target)
  }

  setState(newData) {
    this.state = newData
    this.render()
  }

  render() {
    this.$target.innerHTML = this.state.reduce((htmlString, { text, isCompleted }, index) => htmlString + `<li data-index=${index}><span data-action="toggleComplete" class=${isCompleted ? 'complete' : ''}>${text}</span><button data-action="delete">삭제</button></li>`, '') || ''
  }
}

const todoList = new TodoList({
  target: document.getElementById('todo-list'),
})

new TodoInput({
  target: document.getElementById('input-todo'),
  addTodo: (todo) => {
    todoList.setState([...todoList.state, todo])
  },
})
