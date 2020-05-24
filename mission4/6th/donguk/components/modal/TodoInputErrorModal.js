import ModalWrapper from './ModalWrapper.js'
import { checkSelector } from '../../utils/validation.js'

export default function TodoInputErrorModal({ selector }) {
  if (new.target !== TodoInputErrorModal) {
    throw new Error('Please use \'new\' Keyword')
  }
  checkSelector(selector)

  this.render = () => {
    const $modalContent = document.createElement('span')
    $modalContent.innerHTML = '할 일을 입력해주세요.'
    this.$todoInputErrorModal = new ModalWrapper({
      selector,
      modalContent: $modalContent,
    })
  }

  this.setState = (visible) => {
    this.$todoInputErrorModal.setState(visible)
  }

  this.render()
}
