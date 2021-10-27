function TodoList({$target, initialState }) {
  const $todoList = document.createElement('div')
  $target.appendChild($todoList)

  this.state = initialState

  this.render = function() {
    $todoList.innerHTML = this.state
      .map(todo => `<div>${todo.text}</div>`)
      .join('')
  }

  this.setState = function(nextState) {
    this.state = nextState
    this.render()
  }

  this.render()

}
