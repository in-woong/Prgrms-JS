function TodoInput(todoInputData) {
  const ENTER_KEYCODE = 13

  this.$todoInput = document.querySelector(todoInputData.inputSelector)
  this.$removeAllButton = document.querySelector(
    todoInputData.removeAllSelector
  )
  this.onInsertTodo = todoInputData.onInsertTodo
  this.eventTrigger = todoInputData.eventTrigger
  /*
  try {
    isValidSelector(selector)
  } catch (error) {
    showErrorMessage(error)
    return
  }
 */
  this.$todoInput.addEventListener('keyup', e => {
    if (e.keyCode !== ENTER_KEYCODE || !e.target.value) return
    this.onInsertTodo(e.target.value)
    this.$todoInput.value = ''
  })

  this.$removeAllButton.addEventListener('click', e => {
    const removeAllEvent = new CustomEvent('removeAll')
    this.eventTrigger(removeAllEvent)
    this.$todoInput.value = ''
  })
}
