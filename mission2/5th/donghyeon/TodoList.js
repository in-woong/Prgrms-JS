function TodoList($target, todos) {
  if (!(this instanceof TodoList)) {
    throw new Error('new를 사용하세요.')
  }

  if (!Array.isArray(todos)) {
    throw new Error('array type이 필요합니다.')
  }

  todos.forEach(todo => {
    if (typeof todo.text !== 'string') {
      throw new Error('todo 항목은 string이 필요합니다. ')
    }
  })

  this.todos = todos
  this.$target = $target

  this.render = function() {
    $target.innerHTML = this.todos.reduce(
      (sum, current, index) =>
        sum +
        `<div>
        <span id="todo-${index}" 
              class="${current.isCompleted ? 'completed' : ''}"
              data-index=${index}> 
          ${current.text} 
        </span>
        <button id="delete-${index}" value=${index}>X</button>
        </div>`,
      ''
    )

    this.$target.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', e => {
        this.todos.splice(e.target.value, 1)
        this.setState(this.todos)
      })
    })

    this.$target.querySelectorAll('span').forEach(text => {
      text.addEventListener('click', e => {
        this.todos[e.target.dataset.index].isCompleted = true
        this.setState(this.todos)
      })
    })
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
