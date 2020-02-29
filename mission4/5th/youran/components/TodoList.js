function TodoList(data, $target, { onToggleTodo, onRemoveTodo }) {
  this.data = data
  this.$target = $target
  this.onToggleTodo = onToggleTodo
  this.onRemoveTodo = onRemoveTodo

  $target.addEventListener('click', event => {
    // 보일러플레이트 코드
    const id = event.target.closest('li').dataset.id

    if (event.target.className === 'remove-button') {
      event.stopPropagation()
      onRemoveTodo(id)
    } else {
      onToggleTodo(id)
    }
  })

  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.generateHTMLString = () => {
    if (this.data.length < 1) {
      return '아직 할 일이 없어요.'
    }

    this.data
      .map(
        todo => `<li data-id="${todo._id}">
      ${todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`}
      <button class="remove-button">X</button>`
      )
      .join('')
  }

  this.render = () => {
    this.$target.innerHTML = `<ul>${this.generateHTMLString()}</ul>`
  }

  this.render()
}

export default TodoList
