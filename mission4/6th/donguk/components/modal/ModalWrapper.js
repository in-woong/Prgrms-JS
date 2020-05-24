import { checkSelector, checkModalChildren } from '../../utils/validation.js'

export default function ModalWrapper({ selector, $children }) {
  checkSelector(selector)
  checkModalChildren($children)

  this.render = () => {
    this.$target = document.querySelector(selector)

    this.$grayBg = document.createElement('div')
    this.$grayBg.className = 'gray-bg'
    this.$grayBg.style.display = 'none'

    this.$modalWrapper = document.createElement('div')
    this.$modalWrapper.className = 'modal-wrapper'

    this.$modalWrapper.appendChild($children)
    this.$grayBg.appendChild(this.$modalWrapper)
    this.$target.appendChild(this.$grayBg)

    this.bindEvent()
  }

  this.setState = (visible) => {
    this.$grayBg.style.display = visible ? 'block' : 'none'
  }

  this.bindEvent = () => {
    this.$grayBg.addEventListener('click', (e) => {
      if (e.target.className === 'gray-bg') {
        this.setState(false) // modal off
      }
    })
  }

  this.render()
}
