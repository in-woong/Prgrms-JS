function TodoList({ $todoList, data, onDelete, onToggleCompleted }) {
  this.render = () => {
    $todoList.innerHTML = `${
      data &&
      data
        .map(
          ({ content, _id }) => `
        <div id=${_id} class="item">
            <span class="text-area">${content}</span>
            <button class="delete-button">삭제</button>
        </div>`
        )
        .join('')
    }`
  }

  $todoList.addEventListener('click', (event) => {
    const { target } = event
    if (target.className === 'delete-button') {
      onDelete(target.parentNode.id)
    }
    if (target.className === 'text-area') {
      onToggleCompleted(target.parentNode.id)
    }
  })

  this.setState = (nextData) => {
    data = nextData
    console.log('todo list', data)
    this.render()
  }

  this.render()
}

export default TodoList
