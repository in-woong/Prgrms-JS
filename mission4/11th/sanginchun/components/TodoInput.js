class TodoInput {
  constructor({ $app, onSubmit }) {
    this.$target = document.createElement('section')
    this.$target.className = 'todo-input'

    this.$target.addEventListener('submit', onSubmit)

    this._render()
    $app.appendChild(this.$target)
  }

  _render() {
    this.$target.innerHTML = `
      <h2>할 일 추가하기</h2>
      <form>
        <label for="content">내용 입력 (<, > 사용 불가)</label>
        <input type="text" id="content" name="content" required autofocus pattern="[^<>]+" spellcheck="false" autocomplete="off">
        <button class="submit-button" type="submit">추가</button>
      </form>
    `
  }
}

export default TodoInput
