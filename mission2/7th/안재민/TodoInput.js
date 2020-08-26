class TodoInput {
  constructor(inputId, context, addTodos) {
    this.inputTag = this.getInputTag(inputId)
    this.addTodos = addTodos
    this.context = context
    this.addSubmitEvent()
  }

  getInputTag(inputId) {
    const inputTag = document.getElementById(inputId)
    if (!inputTag) throw new Error(`Invalid input tag id: ${inputId}`)
    return inputTag
  }

  addSubmitEvent() {
    this.inputTag.addEventListener(
      'keypress',
      function (event) {
        const { keyCode } = event
        const { value } = event.target
        if (keyCode === 13) {
          if (!value || value.trim().length === 0) throw new Error('Empty Text')
          this.resetInput()
          this.addTodos.call(this.context, value)
        }
      }.bind(this)
    )
  }

  resetInput() {
    this.inputTag.value = ''
  }
}
