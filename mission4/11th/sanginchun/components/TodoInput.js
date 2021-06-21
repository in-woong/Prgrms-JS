class TodoInput {
  constructor({ $app, onSubmit, onDeleteAllButtonClick }) {
    this.$target = document.createElement('form')
    this.$target.className = 'todo-input'

    this.$target.addEventListener('submit', onSubmit)

    this.$target.addEventListener('click', (e) => {
      if (e.target.closest('.delete-all-button')) onDeleteAllButtonClick()
    })

    this._render()
    $app.appendChild(this.$target)
  }

  _render() {
    this.$target.innerHTML = `
      <div class="todo-input-content">
        <label for="content">할 일</label>
        <input type="text" id="content" name="content" required>
      </div>
      <div class="todo-input-button-group">
        <button type="submit">추가하기</button>
        <button type="button" class="delete-all-button">전체 삭제</button>
      </div>
    `
  }
}

export default TodoInput
