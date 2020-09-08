function TodoInput({ $target, insertTodo }) {
  this.render = function () {
    $target.addEventListener('submit', function (event) {
      const $insertInput = document.querySelector('#insert-form input')
      event.preventDefault()
      insertTodo($insertInput.value)
      $insertInput.value = ''
      $insertInput.focus()
    })
  }

  this.render()
}

export default TodoInput
