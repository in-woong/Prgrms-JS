function TodoInput($todoInput, onAddNewTodo) {
  if (!(this instanceof TodoInput)) {
    throw new Error('TodoInput must be called with new')
  }

  this.$todoInput = $todoInput

  this.init = function () {
    this.$todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.value) {
        onAddNewTodo(e.target.value)
        e.target.value = ''
      }
    })
  }
  this.init()
}

export default TodoInput
