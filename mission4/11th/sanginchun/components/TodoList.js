class TodoList {
  constructor({ $app, initialState, isCompletedList, onTodoItemClick, onDeleteButtonClick }) {
    this.state = initialState
    this.isCompletedList = isCompletedList

    this.$target = document.createElement('section')
    this.$target.className = 'todo-list'

    this.$target.addEventListener('click', (e) => {
      if (e.target.closest('.todo-item-delete-button')) {
        onDeleteButtonClick(e)
        return
      }

      if (e.target.closest('.todo-item-checkbox')) {
        e.preventDefault()
        onTodoItemClick(e)
      }
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
              <label>
                <input class="todo-item-checkbox" type="checkbox" ${isCompleted ? 'checked' : ''}>
                <span class="todo-item-content">${isCompleted ? `<s>${content}</s>` : content}</span>
              </label>
              <button class="todo-item-delete-button">삭제</button>
            </li>
          `
          )
          .join('')}
      </ul>
    `
  }
}

export default TodoList
