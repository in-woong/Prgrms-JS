import { checkSelector } from '../utils/validation.js'
import TodoInputErrorModal from './modal/TodoInputErrorModal.js'

export default function TodoInput(props) {
  if (new.target !== TodoInput) {
    throw new Error('Please use \'new\' keyword')
  }
  const { selector } = props
  checkSelector(selector)

  this.render = () => {
    this.$inputSection = document.createElement('section')
    this.$inputSection.id = 'todo-input'

    this.$input = document.createElement('input')
    this.$input.type = 'text'
    this.$input.placeholder = '할 일을 입력하세요 :)'

    this.$inputButton = document.createElement('button')
    this.$inputButton.innerHTML = 'ADD'

    this.$inputSection.appendChild(this.$input)
    this.$inputSection.appendChild(this.$inputButton)
    const $app = document.querySelector(selector)
    $app.appendChild(this.$inputSection)

    this.$todoInputErrorModal = new TodoInputErrorModal({ selector: '#todo-input' })
    this.bindEvent()
  }

  this.bindEvent = () => {
    this.$input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        // todo add
        e.target.value = ''
        e.target.focus()
      }
    })
    this.$inputButton.addEventListener('click', () => {
      if (this.$input.value.trim()) {
        // todo add
        this.$input.value = ''
        this.$input.focus()
      } else {
        this.$todoInputErrorModal.setState(true) // modal on
      }
    })
  }

  this.render()
}
