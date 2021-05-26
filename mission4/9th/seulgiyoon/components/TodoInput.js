export default class TodoInput {
  constructor({ targetEl, onSubmitEvent }) {
    this.formEl = document.getElementById(targetEl)
    this.inputEl = this.formEl.querySelector('input')
    this.onSubmit = onSubmitEvent
    this.addSubmitEvent()
  }

  addSubmitEvent() {
    this.formEl.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.inputEl.value !== '') {
        this.onSubmit(this.inputEl.value)
        this.inputEl.value = ''
        this.inputEl.focus()
      }
    })
  }
}
