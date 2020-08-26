function TodoInput(todoApp) {
  const inputTextElement = document.createElement('input')
  inputTextElement.type = 'text'

  const inputAddElement = document.createElement('input')
  inputAddElement.type = 'button'
  inputAddElement.value = 'add'

  const inputClearElement = document.createElement('input')
  inputClearElement.type = 'button'
  inputClearElement.value = 'clear'

  const removeAllEvent = new CustomEvent('removeAll')
  inputClearElement.addEventListener('removeAll', (event) => {
    todoApp.clearStates()
  })

  inputTextElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      todoApp.addState(inputTextElement.value || '')
      inputTextElement.value = ''
    }
  })

  inputAddElement.addEventListener('click', (event) => {
    event.preventDefault()
    todoApp.addState(inputTextElement.value || '')
    inputTextElement.value = ''
    inputTextElement.focus()
  })

  inputClearElement.addEventListener('click', (event) => {
    event.preventDefault()
    event.target.dispatchEvent(removeAllEvent)
    inputTextElement.focus()
  })

  todoApp.todoAppElement.append(inputTextElement)
  todoApp.todoAppElement.append(inputAddElement)
  todoApp.todoAppElement.append(inputClearElement)
}
