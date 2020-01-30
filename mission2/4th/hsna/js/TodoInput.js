class TodoInput {
  constructor($target, onAdd) {
    this.$target = $target
    this.$target.addEventListener('keydown', (e) => {
      const ENTER_KEY_CODE = 13
      if (e.keyCode === ENTER_KEY_CODE) {
        e.preventDefault()
        onAdd($target.value)
        $target.value = ''
      }
    })
  }
}
