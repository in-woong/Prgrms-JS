function TodoInput(props) {
  this.$target = props.target
  this.addTodo = props.addTodo
  this.removeAll = new CustomEvent('remove-all', {
    bubbles: true,
  })
  this.$input = document.createElement('input')
  this.$input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.addTodo(this.$input.value)
      this.$input.value = ''
      this.$input.focus()
    }
  })
  this.$removeAllButton = document.createElement('button')
  this.$removeAllButton.textContent = '전체삭제'
  this.$removeAllButton.addEventListener('click', (e) => {
    e.target.dispatchEvent(this.removeAll)
  })
  this.render = function () {
    this.$target.appendChild(this.$input)
    this.$target.appendChild(this.$removeAllButton)
  }
  this.render()
}
