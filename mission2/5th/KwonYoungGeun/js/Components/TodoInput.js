const constants = { INPUT: 0, SUBMIT: 1, REMOVE_ALL: 2 }

class TodoInput extends Component {
  constructor($element) {
    super($element)
    this.$input = this.$element.children[constants.INPUT]
    this.$submit = this.$element.children[constants.SUBMIT]
    this.$removeAll = this.$element.children[constants.REMOVE_ALL]
    this.validate([this.$element, this.$input, this.$submit, this.$removeAll])
    this.init()
  }

  init() {
    this.bindEvents()
  }

  validate(elements) {
    elements.forEach(element => validateElement(element))
  }

  bindEvents() {
    this.$input.addEventListener('keyup', e => this.onKeyup(e))
    this.$submit.addEventListener('click', e => this.submit(e))
    this.$removeAll.addEventListener('click', e => this.removeAll())
  }

  onKeyup(e) {
    const enterKey = 13

    if (!e.target.value.length) {
      return
    }

    if (e.keyCode !== enterKey) {
      return
    }

    this.emit('@submit', { inputValue: this.$input.value })
    this.$input.value = ''
  }

  submit() {
    this.emit('@submit', { inputValue: this.$input.value })
    this.$input.value = ''
  }

  removeAll() {
    this.emit('@removeAll')
  }
}
