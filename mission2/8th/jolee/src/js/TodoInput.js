function TodoInput(addTodo) {
  this.addTodo = addTodo

  this.addTodoItem = function ({ todoText }) {
    const newTodoItem = {
      text: todoText,
      isCompleted: false,
    }

    this.addTodo(newTodoItem)
    $inputTodoText.value = ''
  }

  const $inputTodoText = document.querySelector('#todo-input-text')
  const $addTodoButton = document.querySelector('#todo-add-button')

  $addTodoButton.addEventListener('click', () => {
    this.addTodoItem({ todoText: $inputTodoText.value })
  })

  $inputTodoText.addEventListener('keyup', (event) => {
    const ENTER_KEY_CODE = 13
    if (event.keyCode === ENTER_KEY_CODE) {
      this.addTodoItem({ todoText: $inputTodoText.value })
    }
  })
}

export default TodoInput
