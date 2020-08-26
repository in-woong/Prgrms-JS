export default function TodoInput({ target, addTodo }) {
  this.$target = target
  this.addTodo = addTodo
  this.$input = document.createElement('input')
  this.$input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.addTodo(this.$input.value)
      this.$input.value = ''
      this.$input.focus()
    }
  })
  this.render = () => {
    this.$target.appendChild(this.$input)
  }
  this.render()
}
