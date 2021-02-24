function TodoInput({ $app, onAddTodo }) {
  const $todoInput = document.createElement('input')
  $app.appendChild($todoInput)

  $todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      onAddTodo(e.target.value)
      e.target.value = ''
    }
  })
  this.render = () => {}
}
