class TodoInput {
  constructor({ $app, onSubmit }) {
    this.$target = document.createElement('form')
    this.$target.setAttribute('data-component-type', 'TodoInput')

    this.$target.addEventListener('submit', (e) => {
      e.preventDefault()

      const $input = e.target.querySelector('.todo-input-text')
      const text = $input.value

      // validate text 추가 필요
      if(!text) {
        alert('할 일을 입력하세요.')
        return
      }

      onSubmit(text)

      // reset
      $input.value = ''
      $input.focus()
    })

    this.render()
    $app.appendChild(this.$target)
  }

  render() {
    this.$target.innerHTML = `
      <input class="todo-input-text" type="text" />
      <button type="submit">할 일 추가</button>
    `
  }
}

export default TodoInput
