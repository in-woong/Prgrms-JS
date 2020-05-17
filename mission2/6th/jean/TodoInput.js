function TodoInput ($target, { onAddTodo }) {

  $target.addEventListener('keydown', e => {
    const ENTER_KEY_CODE = 13
    if (e.keyCode === ENTER_KEY_CODE) {
      onAddTodo(e.target.value)
      e.target.value = ''
    }
  })
}
