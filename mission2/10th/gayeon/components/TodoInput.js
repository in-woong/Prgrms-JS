export default function TodoInput(formElement, inputElement, addNewData) {
  this.formElement = formElement
  this.inputElement = inputElement

  this.formElement.addEventListener('submit', e => {
    e.preventDefault()

    if (this.inputElement.value) {
      addNewData(`${this.inputElement.value}`)
      this.inputElement.value = ''
    }
  })
}
