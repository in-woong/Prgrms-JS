const removeAllEvent = new MouseEvent('removeAll', {
  bubbles: true,
})

function TodoInput({ $app, addTodo }) {
  this.state = ''
  this.$target = document.createElement('div')

  $app.appendChild(this.$target)

  this.setState = (nextValue) => {
    this.state = nextValue

    this.$input.value = nextValue
  }

  this.render = () => {
    this.$target.innerHTML = `
      <p>
        <input type="text" value="${this.state}" id="todo-input" />
        <button type="button" id="add-button">추가</button>
      </p>
      <button type="button" id="remove-all-button">모든 할일 삭제</button>
    `
  }

  this.initialize = () => {
    this.$target.addEventListener('input', ({ target }) => {
      if (target.closest('#todo-input')) {
        this.setState(target.value)
      }
    })

    this.$input = document.querySelector('#todo-input')

    this.$removeAllButton = document.querySelector('#remove-all-button')
    this.$removeAllButton.addEventListener('click', () => {
      this.$removeAllButton.dispatchEvent(removeAllEvent)
    })

    this.$target.addEventListener('keydown', ({ target, key, isComposing }) => {
      if (!target.closest('#todo-input')) {
        return
      }

      if (key !== 'Enter') {
        return
      }

      if (isComposing) {
        return
      }

      if (this.checkEmpty({ value: this.state })) {
        return
      }

      addTodo({ todo: this.$input.value })

      this.onReset()
      this.onFocus()
    })

    this.$target.addEventListener('click', ({ target }) => {
      if (!target.closest('#add-button')) {
        return
      }

      if (this.checkEmpty({ value: this.state })) {
        return
      }

      addTodo({ todo: this.$input.value })

      this.onFocus()
      this.onReset()
    })
  }

  this.onFocus = () => {
    this.$input.focus()
  }

  this.onReset = () => {
    this.setState('')
  }

  this.checkEmpty = ({ value }) => {
    if (value === '') {
      alert('할일을 입력해주세요 ! ')
      this.onFocus()
      return true
    }

    return false
  }

  this.render()
  this.initialize()
  this.onFocus()
}

export default TodoInput
