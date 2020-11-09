export default class InputField {
  constructor({ onSubmit, todoList, domElement }) {
    this.onSubmit = onSubmit
    this.todoList = todoList
    this.domElement = domElement
    this.inputComponent = domElement.querySelector('#input-component')

    const clickButtonsHandler = (e) => {
      if (e.target.id === 'input-submit-button') {
        this.submit()
      }
      if (e.target.id === 'input-remove-all-button') {
        e.currentTarget.dispatchEvent(
          new CustomEvent('removeAll', {
            bubbles: true,
          })
        )
      }
    }

    const keyUpHandler = (e) => {
      if (e.target.id === 'input-field') {
        if (e.keyCode === 13) {
          this.submit()
        }
      }
      e.stopPropagation()
    }

    this.domElement.addEventListener('click', clickButtonsHandler)
    this.domElement.addEventListener('keyup', keyUpHandler)
    this.render()
  }

  render() {
    this.inputComponent.innerHTML = `<input id="input-field" type="text" autofocus />
    <button id='input-submit-button' class="button input-submit-button" type='button'>추가</button>
    <button id='input-remove-all-button' class="button input-remove-all-button" type='button'>모두 지우기</button>`
  }

  submit() {
    const inputElement = this.inputComponent.querySelector('#input-field')
    const value = inputElement.value
    this.onSubmit({ text: value, isCompleted: false })
    inputElement.value = ''
    inputElement.focus()
  }
}
