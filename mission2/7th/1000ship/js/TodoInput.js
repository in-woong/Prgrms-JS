export default function TodoInput(app, $inputEl, $submitEl) {
  this.app = app
  this.$inputEl = $inputEl
  this.$submitEl = $submitEl

  this.submitEvent = function (e) {
    if (this.$inputEl.value.length <= 0) return
    this.app.todos.push({
      text: this.$inputEl.value,
      isCompleted: false,
    })
    this.$inputEl.value = ''
    this.app.setState(this.app.todos)
  }

  this.$inputEl.addEventListener('keydown', (e) =>
    e.code === 'Enter' ? this.submitEvent(e) : null
  )
  this.$submitEl.addEventListener('click', this.submitEvent.bind(this))
}
