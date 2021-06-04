class TodoInput {
  constructor({ $parent, onSubmit }) {
    this.$target = document.createElement('form')
    this.$target.setAttribute('data-component-type', 'TodoInput')

    this.$target.addEventListener('submit', (e) => {
      e.preventDefault()

      const $input = e.target.querySelector('.todo-input-text')
      const text = $input.value
      
      if(!text) {
        alert('할 일을 입력하세요.')
        return
      }

      // reset
      $input.value = ''
      $input.focus()

      onSubmit(this.filterInputText(text))
    })

    this.render()
    $parent.appendChild(this.$target)
  }

  filterInputText(text) {
    return text.split('').map((char) => {
      switch(char) {
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case "'":
          return '&#39;'
        default:
          return char
      }
    }).join('')
  }

  render() {
    this.$target.innerHTML = `
      <input class="todo-input-text" type="text" />
      <button type="submit">할 일 추가</button>
    `
  }
}

export default TodoInput
