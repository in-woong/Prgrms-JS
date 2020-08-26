function Spinner() {
  if (!(this instanceof Spinner)) {
    throw new Error('error: Spinner must be called with new!')
  }

  this.isCompletedLoadData = false

  this.render = () => {
    this.elementDom.innerHTML = this.isCompletedLoadData
      ? '<div class="spinner"></div>'
      : ''
  }

  this.setState = (element, status) => {
    if (element && status) {
      this.elementDom = document.querySelector(element)
      this.isCompletedLoadData = status
      this.render()
    }
  }
}

export default Spinner
