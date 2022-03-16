class TodoList {
  constructor({ $target, onClick, initialState, onRemove }) {
    this.$target = $target
    this.state = initialState
    this.onClick = onClick
    this.onRemove = onRemove

    this.setEvent()
    this.render()
  }

  setState(nextState) {
    // TODO: nextState 값 validation check 추가
    this.state = nextState
    this.render()
  }

  setEvent() {
    this.$target.addEventListener('click', (e) => {
      const id = e.target.closest('li').dataset.id

      if (e.target.className === 'remove-button') {
        e.stopPropagation()
        this.onRemove(id)
        return
      }
      this.onClick(id)
    })
  }

  render() {
    const htmlString = this.state.data.map((todo) => {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
    })

    this.$target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }
}

export default TodoList
