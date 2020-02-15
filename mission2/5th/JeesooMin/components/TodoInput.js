function TodoInput($element, onInput) {
  this.$element = $element

  this.render = function() {
    this.$element.addEventListener('keypress', e => {
      if (e.key === 'Enter' && e.target.value) {
        onInput(e.target.value)
        this.$element.value = ''
      }
    })
  }

  this.render()
}
