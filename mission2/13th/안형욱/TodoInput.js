class TodoInput {
  constructor($target, props) {
    this.$target = document.createElement('div')
    $target.appendChild(this.$target)
    this.props = props
    this.bindEvents()
    this.render()
  }
  render() {
    const template = `
      <form class="todo-form">
        <input type="text" name="todo"/>
        <button>추가</button>
      </form>
      <button class="reset-btn">Reset</button>
    `
    this.$target.innerHTML = template
    const $input = this.$target.querySelector('input[name=todo]')
    // input 자동 포커싱
    $input.focus()
  }
  bindEvents() {
    const { addTodo } = this.props
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault()
      const $input = this.$target.querySelector('input[name=todo]')
      if (!$input.value.trim()) {
        alert('올바른 값을 입력해주세요.')
      } else {
        addTodo($input.value)
      }
      $input.value = ''
    })
    this.$target.addEventListener('click', (e) => {
      if (e.target.classList.contains('reset-btn')) {
        const removeAllEvent = new Event('removeAll', { bubbles: true })
        this.$target.dispatchEvent(removeAllEvent)
      }
    })
  }
}
