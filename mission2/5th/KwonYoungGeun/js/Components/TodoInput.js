// 컴포넌트 내 자식 요소(children) 인덱스
import Component from './Component.js'
import { $, validateElement } from '../Utils/index.js'

const constants = { INPUT: 0, SUBMIT: 1, REMOVE_ALL: 2 }

export default class TodoInput extends Component {
  constructor($element) {
    super($element)
    this.$input = $(`.${this.$element.className} > .todo-input`)
    this.$submit = $(`.${this.$element.className} > .submit-button`)
    this.$removeAll = $(`.${this.$element.className} > .remove-all-button`)
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
    this.$removeAll.addEventListener('click', () => this.removeAll())
  }

  onKeyup(e) {
    const enterKey = 13

    if (!e.target.value.length) {
      return
    }

    if (e.keyCode !== enterKey) {
      return
    }

    this.submit()
  }

  submit() {
    if (!this.$input.value.length) {
      return
    }

    this.emit('@submit', { inputValue: this.$input.value })
    this.$input.value = ''
  }

  removeAll() {
    this.emit('@removeAll')
  }
}
