function TodoInput({ $target, onAddTodo }) {
  const $todoInput = document.createElement('input')
  $todoInput.type = 'text'

  $target.appendChild($todoInput)

  this.render = () => {

  }

  this.render()

  $todoInput.addEventListener('keyup', (e) => {
    const { key, target } = e
    if (key === 'Enter') {
      const { value } = target

      if (value.length > 0) {
        // 뭔가를 합니다
        e.target.value = ''
      }
    }
  })
}