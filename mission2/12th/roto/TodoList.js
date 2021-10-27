function TodoList({$target, initialState, onTodoClick, onRemove }) {
  const $todoList = document.createElement('div')
  $target.appendChild($todoList)

  this.onTodoClick = onTodoClick
  this.onRemove = onRemove

  this.state = initialState

  this.render = function() {
    $todoList.innerHTML = `<ul>${this.state
      .map(({ text, isCompleted }) => `<li>${isCompleted ? `<s>${text}</s>` : text} <button>x</button></li>`)
      .join('')
    }</ul>`

    $todoList.querySelectorAll('li').forEach(($li, i) => {
      $li.addEventListener('click', () => {
        onTodoClick(i)
      })
    })

    $todoList.querySelectorAll('button').forEach(($button, i) => {
      $button.addEventListener('click', (e) => {
        e.stopPropagation()
        onRemove(i)
      })
    })

  }

  this.setState = function(nextState) {
    this.state = nextState
    this.render()
  }

  this.render()

}
