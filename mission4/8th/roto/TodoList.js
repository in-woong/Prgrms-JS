export default function TodoList({ $app, initialState, onClick, onRemove }) {
  this.$target = document.createElement('div')
  $app.appendChild(this.$target)

  this.state = initialState || {
    selectedUsername: null,
    isLoading: false,
    todos: [],
  }

  this.$target.addEventListener('click', (e) => {
    if (this.state.isLoading) {
      return
    }
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onClick(id)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { isLoading, todos, selectedUsername } = this.state
    const htmlString = todos.map((todo) => {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `<li data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button" ${
        isLoading ? 'disabled' : ''
      }>Remove</button></li>`
    })

    this.$target.innerHTML = `<h1>${selectedUsername}의 할 일</h1><ul>${htmlString.join(
      ''
    )}</ul>`
  }

  this.render()
}
