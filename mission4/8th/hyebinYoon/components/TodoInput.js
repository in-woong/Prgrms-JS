function TodoInput({ $target, onInsertTodo }) {
  if (!(this instanceof TodoInput))
    throw new Error('function 형태의 선언입니다.')

  this.render = function () {
    $target.addEventListener('submit', function (event) {
      const $insertInput = $target.querySelector('input')
      event.preventDefault()
      onInsertTodo($insertInput.value)
      $insertInput.value = ''
      $insertInput.focus()
    })
  }

  this.render()
}

export default TodoInput
