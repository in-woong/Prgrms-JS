function TodoListDone({ $todoListDone, data, onDelete, onToggleCompleted }) {
  this.render = () => {
    $todoListDone.innerHTML = `${
      data &&
      data
        .map(
          ({ content, _id }) => `
          <div id=${_id}>
              <span class="text-area">${content} (완료)</span>
              <button class="delete-button">삭제</button>
          </div>`
        )
        .join('')
    }`
  }

  $todoListDone.addEventListener('click', (event) => {
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
    console.log('todo list done', data)
    this.render()
  }

  this.render()
}

export default TodoListDone
