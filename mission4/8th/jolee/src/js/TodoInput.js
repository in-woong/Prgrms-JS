const ENTER_KEY_CODE = 13

function TodoInput(params) {
  this.$target = params.$target
  this.addTodo = params.addTodo

  this.addTodoItem = function ({ todoText }) {
    const newTodoItem = {
      text: todoText,
      isCompleted: false,
    }

    this.addTodo(newTodoItem)
    this.$target.value = ''
  }

  const $addTodoButton = document.querySelector('#todo-add-button')

  $addTodoButton.addEventListener('click', () => {
    this.addTodoItem({ todoText: this.$target.value })
  })

  this.$target.addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.addTodoItem({ todoText: this.$target.value })
    }
  })
}

export default TodoInput
