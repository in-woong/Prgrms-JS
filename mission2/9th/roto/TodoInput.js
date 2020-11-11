export default function TodoInput({ $app, onAddTodo }) {
  const $target = document.createElement('input')
  $target.className = 'TodoInput'
  this.$target = $target
  $app.appendChild($target)

  this.onAddTodo = onAddTodo

  this.render = () => {}

  this.initEvent = () => {
    this.$target.addEventListener('keydown', (e) => {
      const { value } = e.target

      if (value.length > 0 && e.key === 'Enter') {
        this.onAddTodo(value)
        this.$target.value = ''
      }
    })
  }

  this.render()
  this.initEvent()
}
