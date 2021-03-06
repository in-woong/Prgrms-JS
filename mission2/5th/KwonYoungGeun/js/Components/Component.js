// 모든 컴포넌트가 상속받는 최상위 클래스
export default class Component {
  constructor($element) {
    this.$element = $element
  }

  // Abstract
  validate() {
    throw new Error('각 컴포넌트마다 validate() 메서드는 꼭 구현해주세요!')
  }

  render(markup) {
    this.$element.innerHTML = markup
  }
}
