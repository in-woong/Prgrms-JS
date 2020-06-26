class TodoInput {
  constructor(inputHandler) {
    const $addButton = document.querySelector('#add-todo')
    const $input = document.querySelector('#todo-input')

    $input.focus()

    $addButton.addEventListener('click', () => {
      if ($input.value) {
        inputHandler($input.value)
        $input.focus()
        $input.value = ''
      }
    })
  }
}

export default TodoInput
