export default class TodoInput {
  constructor(targetEl) {
    this.formEl = document.getElementById(targetEl)
    this.inputEl = this.formEl.querySelector('input')
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
