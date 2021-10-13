function TodoInput($input, onAdd) {
  this.$input = $input
  this.onAdd = onAdd

  $input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      this.onAdd(e.target.value)
      e.target.value = ''
    }
  })
}
