import { isNew } from '../common/validateData.js'

function LoadingUI({ $App, initProgressing }) {
  if (isNew(new.target)) {
    this.isProgressing = initProgressing

    this.$loadingDOM = document.createElement('div')
    this.$loadingDOM.classList = 'loading-gif on'

    $App.appendChild(this.$loadingDOM)
  }

  this.setState = (nextState) => {
    this.isProgressing = nextState
    this.render()
  }

  this.render = () => {
    this.isProgressing ? this.$loadingDOM.classList.add('on') : this.$loadingDOM.classList.remove('on')
  }

  this.render()
}

export default LoadingUI
