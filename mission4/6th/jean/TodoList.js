export default function TodoList({ $target, data, onClick, onRemove }) {
  this.data = data

  $target.addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.id
    const index = e.target.dataset.index

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(todoId)
    } else {
      onClick(todoId, index)
    }
  })

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    if (this.data) {
      const htmlString = this.data.map((todo, index) =>
        `<li data-id="${todo._id}" data-index="${index}">
          ${todo.isCompleted
            ? `<strike>${todo.content}</strike>`
            : `${todo.content}`}
          <button class="remove-button">Remove</button>
        </li>`
      ).join('')

      $target.innerHTML = `<ul>${htmlString}</ul>`
    }

  }

  this.render()
}
