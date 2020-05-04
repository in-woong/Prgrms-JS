//래퍼런스 : https://github.com/learn-programmers/prgrms-fejs/pull/182/files
function ErrorView({ $selector, errorMessage = '' }) {
  this.$target = document.querySelector($selector)
  this.errorMessage = errorMessage

  this.render = () => {
    this.$target.innerHTML = this.errorMessage
  }

  this.setState = newErrorMsg => {
    this.errorMessage = newErrorMsg
    this.render()
  }
}
