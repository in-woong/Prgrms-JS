export default class InputField {
  constructor({ domId, onSubmit }) {
    this.onSubmit = onSubmit
    this.domId = domId
    this.render()
  }

  render() {
    const inputComponent = document.querySelector(this.domId)
    inputComponent.innerHTML = `<input id="input-field" type="text" autofocus />
    <button id='input-submit-button' type='button'>추가</button>`

    const submitButton = document
      .querySelector(this.domId)
      .querySelector('#input-submit-button')
    submitButton.addEventListener('click', () => this.submit())

    const inputField = document
      .querySelector(this.domId)
      .querySelector('#input-field')
      .addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          submitButton.click()
        }
      })
  }

  submit() {
    const inputElement = document
      .querySelector(this.domId)
      .querySelector('#input-field')
    const value = inputElement.value
    this.onSubmit({ text: value, isCompleted: false })
    inputElement.value = ''
    inputElement.focus()
  }
}
