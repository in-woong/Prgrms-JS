export default class TodoInput {
  constructor() {
    this.formEl = document.querySelector('form')
    this.inputEl = document.querySelector('input')
  }

  addSubmitEvent(callback) {
    this.formEl.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.inputEl.value !== '') {
        callback(this.inputEl.value)
        this.inputEl.value = ''
        this.inputEl.focus()
      }
    })
  }
}
