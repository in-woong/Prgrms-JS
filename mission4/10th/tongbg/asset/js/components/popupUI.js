import { isNew } from '../common/validateData.js'

function popupUI({ $App, initPopupVisible, initPopupTitle, initPopupMsg, onClickPopupCls }) {
  if (isNew(new.target)) {
    this.state = {
      isPopupVisible: initPopupVisible,
      popupTitle: initPopupTitle,
      popupMsg: initPopupMsg,
    }

    this.$popupDOM = document.createElement('div')
    this.$popupDOM.classList = 'popup'
    this.$popupDOM.innerHTML = `<div class="popup-header"><div class="popup-title">${this.state.popupTitle}</div></div><p>${this.state.popupMsg}</p>`

    this.$popupClsBtn = document.createElement('button')
    this.$popupClsBtn.classList = 'popup-close '
    this.$popupClsBtn.innerText = 'X'

    this.$popupClsBtn.addEventListener('click', onClickPopupCls)

    this.$popupDOM.appendChild(this.$popupClsBtn)
    $App.appendChild(this.$popupDOM)
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    document.querySelector('.popup-title').innerHTML = this.state.popupTitle
    document.querySelector('.popup p').innerHTML = this.state.popupMsg

    this.state.isPopupVisible ? this.$popupDOM.classList.add('on') : this.$popupDOM.classList.remove('on')
  }

  this.render()
}

export default PopupUI
