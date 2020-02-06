class TodoInput {
  constructor(sourceId, buttonId) {
    this.addItem = () => {}
    this.$source = document.querySelector(sourceId)
    this.$button = document.querySelector(buttonId)

    this.$button.addEventListener('click', this.onClick.bind(this), false)
    this.$source.addEventListener('keypress', this.onKeyPress.bind(this), false)
  }

  setAddItem(addItem) {
    this.addItem = addItem
  }

  // 이벤트 리스너라는 걸 명시하기위해 add 와 하나로 합치지 않았습니다.
  onClick() {
    this.add()
  }

  onKeyPress(e) {
    const ENTER = 13
    if (e.keyCode === ENTER) this.add()
  }

  async add() {
    await this.addItem(this.$source.value, false)

    this.$source.value = ''
    this.$source.focus()
  }
}

export default TodoInput
