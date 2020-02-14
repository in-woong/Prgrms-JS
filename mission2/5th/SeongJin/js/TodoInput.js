// 준비 중
function TodoInput(addTodo) {
  this.addTodo = addTodo
  this.$addButton = document.getElementById('addBtn')

  this.$addButton.addEventListener('click', () => {
    const $input = document.getElementById('newTodo')
    const newTodo = { text: $input.value, isCompleted: false }
    this.addTodo(newTodo)
    $input.value = ''
    $input.focus()
  })
}

export default TodoInput
