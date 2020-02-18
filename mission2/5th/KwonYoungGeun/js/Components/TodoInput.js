import Component from './Component.js'
import { $, validateElement } from '../Utils/index.js'
const constants = { ENTER_KEY: 13 }
export default class TodoInput extends Component {
  constructor({ $element, $App, onSubmit, onRemoveAll }) {
    super($element)
    this.$App = $App
    this.$input = $(`.${this.$element.className} > .todo-input`)
    this.$submit = $(`.${this.$element.className} > .submit-button`)
    this.$removeAll = $(`.${this.$element.className} > .remove-all-button`)
    this.validate([this.$element, this.$input, this.$submit, this.$removeAll])
    this.onSubmit = onSubmit
    this.onRemoveAll = onRemoveAll
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
    this.$submit.addEventListener('click', e =>
      this.onSubmit(this.$input.value)
    )
    this.$removeAll.addEventListener('click', () => this.emitRemoveAll())
  }

  onKeyup(e) {
    if (!e.target.value.length) {
      return
    }

    if (e.keyCode !== constants.ENTER_KEY) {
      return
    }

    this.onSubmit(e.target.value)
  }

  setInputValue(value) {
    this.$input.value = value
  }

  emitRemoveAll() {
    const customEvent = new CustomEvent('@removeAll')
    this.$App.dispatchEvent(customEvent)
  }
}
