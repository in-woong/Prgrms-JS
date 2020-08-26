function TodoInput({ elementId, addTodo }) {
  validateConstructor(this, TodoInput)

  this.$target = document.querySelector(`#${elementId}`)
  this.removeAllTodosEvent = new CustomEvent('remove-all', {
    bubbles: true,
  })

  this.addTodo = () => {
    const inputValue = this.$todoInput.value.trim()
    if (!inputValue) {
      return
    }

    addTodo(inputValue)

    this.$todoInput.value = ''
    this.$todoInput.focus()
  }

  this.render = () => {
    this.$todoInput = document.createElement('input')
    this.$todoInput.setAttribute('type', 'text')
    this.$todoInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.addTodo()
      }
    })
    this.$target.appendChild(this.$todoInput)

    this.$addTodoButton = document.createElement('button')
    this.$addTodoButton.innerHTML = '+'
    this.$addTodoButton.addEventListener('click', () => {
      this.addTodo()
    })
    this.$target.appendChild(this.$addTodoButton)

    this.$removeAllTodosButton = document.createElement('button')
    this.$removeAllTodosButton.innerHTML = 'Remove All'
    this.$removeAllTodosButton.addEventListener('click', (event) => {
      event.target.dispatchEvent(this.removeAllTodosEvent)
    })
    this.$target.appendChild(this.$removeAllTodosButton)
  }

  this.render()
}
