function TodoInput($app, addTodo) {
  const createInputElement = () => {
    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    return inputElement
  }

  const createRemoveAllButton = () => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = 'removeAll'
    buttonElement.addEventListener('click', () => {
      const removeAllEvent = new Event('removeAll', {
        bubbles: true,
      })
      buttonElement.dispatchEvent(removeAllEvent)
    })
    return buttonElement
  }

  this.$target = $app
  this.$todoInput = createInputElement()

  this.$target.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value)
      this.$todoInput.value = ''
    }
  })

  this.render = () => {
    this.$target.appendChild(this.$todoInput)
    this.$target.appendChild(createRemoveAllButton())
    this.$todoInput.focus()
  }
}
