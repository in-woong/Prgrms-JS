class Component {
  constructor($element) {
    this.$element = $element
  }

  // Abstract
  validate() {
    throw new Error('각 컴포넌트마다 validate() 메서드는 꼭 구현해주세요!')
  }

  on(event, handler) {
    this.$element.addEventListner(event, handler)
    return this
  }

  emit(event, data) {
    return this
  }

  render(markup) {
    this.$element.innerHTML = markup
  }
}
