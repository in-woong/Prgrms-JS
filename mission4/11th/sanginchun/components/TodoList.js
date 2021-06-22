class TodoList {
  constructor({ $app, initialState, isCompletedList, onTodoItemClick }) {
    this.state = initialState
    this.isCompletedList = isCompletedList

    this.$target = document.createElement('section')
    this.$target.className = 'todo-list'
    if (this.isCompletedList) this.$target.classList.add('completed')

    this.$target.addEventListener('click', (e) => {
      if (!e.target.closest('li.todo-item')) return

      onTodoItemClick(e)
    })

    this._render()
    $app.appendChild(this.$target)
  }

  setState(nextState) {
    this.state = nextState
    this._render()
  }

  _render() {
    this.$target.innerHTML = `
      <h2>${this.isCompletedList ? '완료한 일' : '할 일'}</h2>
      ${this.state.todoItems.length === 0 ? '<p>없음</p>' : ''}
      <ul class="todo-items-list">
        ${this.state.todoItems
          .map(
            ({ _id, content, isCompleted }) =>
              `
            <li class="todo-item" data-id="${_id}">
              <label class="todo-item-toggle">
                <input class="todo-item-checkbox" type="checkbox" ${isCompleted ? 'checked' : ''}>
                <span class="todo-item-content">${isCompleted ? `<s>${content}</s>` : content}</span>
              </label>
              <div class="todo-item-button-group">
                <button class="todo-item-move-button">이동</button>
                <button class="todo-item-delete-button">삭제</button>
              </div>
            </li>
          `
          )
          .join('')}
      </ul>
    `
  }
}

export default TodoList
