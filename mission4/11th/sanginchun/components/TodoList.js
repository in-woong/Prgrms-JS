class TodoList {
  constructor({ $app, initialState }) {
    this.state = initialState

    this.$target = document.createElement('section')
    this.$target.className = 'todo-list'

    this._render()
    $app.appendChild(this.$target)
  }

  _render() {
    this.$target.innerHTML = `
      <ul>
        ${this.state.map(({ _id, content, isCompleted }) => `<li data-id="${_id}">${isCompleted ? `<s>${content}</s>` : content}</li>`).join('')}
      </ul>
    `
  }
}

export default TodoList
