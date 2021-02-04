
const ENTER_KEY_CODE = 13

function TodoInput({ $app, onTodoInput }) {
  const $todoInput = document.createElement('input')
  $app.appendChild($todoInput)

  $todoInput.addEventListener('keydown', (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      const text = e.target.value
      onTodoInput(text)
      e.target.value = ''
    }
  })

  this.render = () => {}
}