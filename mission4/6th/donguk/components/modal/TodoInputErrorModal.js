import ModalWrapper from './ModalWrapper.js'
import { checkSelector } from '../../utils/validation.js'

export default function TodoInputErrorModal({ selector }) {
  if (new.target !== TodoInputErrorModal) {
    throw new Error('Please use \'new\' Keyword')
  }
  checkSelector(selector)

  this.render = () => {
    const $children = document.createElement('div') // input error modal box
    $children.className = 'input-error-box'
    const $title = document.createElement('h2')
    $title.innerHTML = '입력 오류'

    const $modalContent = document.createElement('div')
    $modalContent.className = 'modal-content'
    $modalContent.innerHTML = '할 일을 입력해주세요!!'

    this.$closeButton = document.createElement('button')
    this.$closeButton.className = 'modal-close'
    this.$closeButton.innerHTML = '닫기'

    $children.appendChild($title)
    $children.appendChild($modalContent)
    $children.appendChild(this.$closeButton)
    this.$todoInputErrorModal = new ModalWrapper({
      selector,
      $children,
    })
    this.bindEvent()
  }

  this.setState = (visible) => {
    this.$todoInputErrorModal.setState(visible)
  }

  this.bindEvent = () => {
    this.$closeButton.addEventListener('click', () => {
      this.setState(false) // modal off
    })
  }

  this.render()
}
