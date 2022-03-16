function TodoList({ $app, initState, onTodoClick, onTodoRemove }) {
  this.$target = document.createElement('ul')
  this.$target.id = 'todo__list'
  $app.appendChild(this.$target)

  this.state = initState
  this.onTodoClick = onTodoClick
  this.onTodoRemove = onTodoRemove

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.state
      .map((todo) => {
        return todo.isCompleted
          ? `<li data-index=${todo.id} class='todo done'>${todo.text}<button class="todo__delete-btn">제거</button></li>`
          : `<li data-index=${todo.id} class='todo'>${todo.text}<button class="todo__delete-btn">제거</button></li>`
      })
      .join('')
  }

  this.render()

  this.$target.addEventListener('click', (e) => {
    const $clickedLIEl = e.target.closest('li')
    const $clickedButtonEl = e.target.closest('button')

    if ($clickedLIEl === e.target) {
      const { index } = $clickedLIEl.dataset
      this.onTodoClick(parseInt(index))
    }

    if ($clickedButtonEl === e.target) {
      const { index } = $clickedLIEl.dataset
      this.onTodoRemove(parseInt(index))
    }
  })
}

export default TodoList
