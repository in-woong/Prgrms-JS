function TodoInput($target, onAddTodo) {
  if (!(this instanceof TodoInput)) {
    throw new Error('TodoInput must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

  const keyPressEventHandler = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onAddTodo(e.target.value)
      e.target.value = ''
    }
  }

  this.bindEvents = function () {
    this.$target.addEventListener('keypress', keyPressEventHandler)
  }

  this.init = function () {
    this.$target = $target
    this.bindEvents()
  }

  this.init()
}

export default TodoInput
