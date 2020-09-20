const ENTER_KEY_CODE = 13

function TodoInput(params) {
  this.$target = params.$target
  this.addTodo = params.addTodo

  const $addTodoButton = document.querySelector('#todo-add-button')

  $addTodoButton.addEventListener('click', () => {
    this.addTodo(this.$target.value)
    this.$target.value = ''
  })

  this.$target.addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.addTodo(this.$target.value)
      this.$target.value = ''
    }
  })
}

export default TodoInput
