export default function TodoInput({ $app, onAddTodo, init }) {
  this.init = init
  this.$todoInput = document.createElement('input')
  this.$label = document.createElement('label')
  this.$label.innerHTML = 'Todo 추가하기'
  $app.appendChild(this.$label)
  $app.appendChild(this.$todoInput)

  this.$todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onAddTodo(e.target.value)
      e.target.value = ''
      this.init()
    }
  })
}
