import errorCheck from './errorCheck.js'

function TodoInput(addTodo, customEvent) {
  this.addTodo = addTodo
  this.customEvent = customEvent

  this.$addButton = document.getElementById('addBtn')
  this.$removeAllButton = document.getElementById('removeBtn')

  this.$addButton.addEventListener('click', () => {
    const $input = document.getElementById('newTodo')
    const newTodo = { text: $input.value, isCompleted: false }
    errorCheck.isEmptyText($input.value)
    this.addTodo(newTodo)
    $input.value = ''
    $input.focus()
  })

  this.$removeAllButton.addEventListener('click', () => {
    const removeAllEvent = new CustomEvent('removeAll')
    this.customEvent(removeAllEvent)
  })
}

export default TodoInput
