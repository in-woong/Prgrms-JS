const constants = { INPUT: 0, REMOVE_ALL: 1 }

/**
 * TODO: 한글 입력시 이벤트가 2번 발생하는 문제 해결하기
 */
class TodoInput extends Component {
  constructor($element) {
    super($element)
    this.$input = this.$element.children[constants.INPUT]
    this.$removeAll = this.$element.children[constants.REMOVE_ALL]
    this.validate(this.$element, this.$input, this.$removeAll)
    this.init()
  }

  init() {
    this.bindEvents()
  }

  validate($element, $input, $removeAll) {
    const elements = [$element, $input, $removeAll] // eslint: no-unexpected-multiline
    elements.forEach(target => validateElement(target))
  }

  bindEvents() {
    this.$input.addEventListener('keyup', e => this.onKeyup(e))
    this.$removeAll.addEventListener('click', e => this.removeAll())
  }

  onKeyup(e) {
    const enterKey = 13

    if (!e.target.value.length) {
      alert('내용 없음')
      return
    }

    if (e.keyCode !== enterKey) {
      return
    }

    this.emit('@submit', { inputValue: this.$input.value })
    this.$input.value = ''
  }

  removeAll() {
    this.emit('@removeAll')
  }
}
