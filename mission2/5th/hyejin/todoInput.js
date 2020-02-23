function TodoInput($target, onEnter) {
  $target.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      onEnter(e.target.value)
      e.target.value = ''
    }
  })
}
