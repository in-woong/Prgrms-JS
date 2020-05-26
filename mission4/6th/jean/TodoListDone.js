export default function TodoListDone({ $target, data, onRemove }) {
  this.data = data

  $target.addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(todoId)
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
          ${todo.content}
          <button class="remove-button">Remove</button>
        </li>`
      ).join('')

      $target.innerHTML = `<ul>${htmlString}</ul>`
    }

  }

  this.render()
}
