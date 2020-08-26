function SearchInput(inputId, onChangeInput) {
  this.inputId = inputId
  this.onChangeInput = onChangeInput
  this.inputElment = null

  this.getinputElement = () => {
    const inputElement = document.getElementById(inputId)
    if (!inputElement) throw new Error(`Invalid input element id: ${inputId}`)
    return inputElement
  }

  this.init = () => {
    this.inputElement = this.getinputElement()
    this.inputElement.addEventListener('keyup', this.onChangeInput)
  }

  this.init()
}

export default SearchInput
