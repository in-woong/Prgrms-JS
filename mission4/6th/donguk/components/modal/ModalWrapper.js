import { checkSelector, checkModalContent } from '../../utils/validation.js'

export default function ModalWrapper({ selector, modalContent }) {
  checkSelector(selector)
  checkModalContent(modalContent)

  this.render = () => {
    this.$target = document.querySelector(selector)

    this.$grayBg = document.createElement('div')
    this.$grayBg.className = 'gray-bg'
    this.$grayBg.style.display = 'none'

    this.$modalWrapper = document.createElement('div')
    this.$modalWrapper.className = 'modal-wrapper'

    this.$modalWrapper.appendChild(modalContent)
    this.$grayBg.appendChild(this.$modalWrapper)
    this.$target.appendChild(this.$grayBg)
  }

  this.setState = (visible) => {
    this.$grayBg.style.display = visible ? 'block' : 'none'
  }

  this.render()
}
