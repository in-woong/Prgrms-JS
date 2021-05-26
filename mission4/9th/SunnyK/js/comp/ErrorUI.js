import { createElementWithClass } from '../util/util.js'

export default function ErrorUI({ $parent, isShowComp, errorMessage }) {
  this.$target = createElementWithClass({
    tagName: 'div',
    className: 'ErrorUI',
  })
  $parent.insertAdjacentElement('afterbegin', this.$target)

  this.isShowComp = isShowComp
  this.errorMessage = errorMessage

  this.setState = ({ nextIsShowComp, nextErrorMessage }) => {
    this.isShowComp = nextIsShowComp
    this.errorMessage = nextErrorMessage ? nextErrorMessage : ''
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.isShowComp
      ? `<div class="error-ui-message-box">${this.errorMessage}</div>`
      : ''
  }

  this.render()
}
