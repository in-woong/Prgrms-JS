export default class InputField {
  constructor({ domId, onSubmit, todoList }) {
    this.onSubmit = onSubmit
    this.domId = domId
    this.todoList = todoList
    this.render()

    this.domElement = document.querySelector(this.domId)

    const clickButtonsHandler = (e) => {
      if (e.target.id === 'input-submit-button') {
        this.submit()
      }

      if (e.target.id === 'input-remove-all-button') {
        e.currentTarget.dispatchEvent(
          new CustomEvent('removeAll', {
            bubbles: true,
            detail: {
              todoListType: this.todoList,
            },
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
  }

  render() {
    const inputComponent = document.querySelector(this.domId)
    inputComponent.innerHTML = `<input id="input-field" type="text" autofocus />
    <button id='input-submit-button' class="button input-submit-button" type='button'>추가</button>
    <button id='input-remove-all-button' class="button input-remove-all-button" type='button'>모두 지우기</button>`
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
