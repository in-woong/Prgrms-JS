class TodoForm {
  constructor({ $target, $input, onSubmit }) {
    this.$target = $target
    this.$input = $input
    this.onSubmit = onSubmit

    this.setEvent()
  }

  setEvent() {
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.$input.value.length <= 0) {
        alert('값을 입력하세요')
        return
      }
      this.onSubmit(this.$input.value)
    })
  }
}

export default TodoForm
