function TodoInput($target, { onTodoInput }) {
  this.$target = $target

  $target.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      onTodoInput(e.target.value)
      e.target.value = ''
    }
  })
}
