function TodoInput($element, onInput) {
  if (!(this instanceof TodoInput)) {
    throw new Error('[TodoInput] new 키워드로 실행되지 않았습니다.')
  }

  if (!isEventHandlerValid(onInput)) {
    throw new Error('[TodoInput] 이벤트 핸들러가 정의되지 않았습니다.')
  }

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
