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
      <label for="content">할 일</label>
      <input type="text" id="content" name="content" required>
      <button type="submit">추가하기</button>
    `
  }
}

export default TodoInput
