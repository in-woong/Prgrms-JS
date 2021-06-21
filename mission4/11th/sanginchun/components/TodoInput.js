class TodoInput {
  constructor({ $app, onSubmit }) {
    this.$target = document.createElement('form')
    this.$target.className = 'todo-input'

    this.$target.addEventListener('submit', onSubmit)

    this._render()
    $app.appendChild(this.$target)
  }

  _render() {
    this.$target.innerHTML = `
      <div class="todo-input-content">
        <label for="content">할 일</label>
        <input type="text" id="content" name="content" required>
      </div>
      <div class="todo-input-is-completed">
        <p>완료 여부</p>
        <input type="radio" id="not-completed" name="isCompleted" value="false" checked>
        <label for="not-completed">미완료</label>
        <input type="radio" id="completed" name="isCompleted" value="true">
        <label for="completed">완료</label>
      </div>
      <div class="todo-input-button-group">
        <button type="submit">추가하기</button>
      </div>
    `
  }
}

export default TodoInput
