export default class TodoInput {
  constructor({ addTodo, eventTrigger }) {
    this.$form = document.querySelector('#input')
    this.$input = document.querySelector('.add-text')
    this.$addBtn = document.querySelector('.add-btn')
    this.$removeAllBtn = document.querySelector('.remove-btn')

    this.addTodo = addTodo
    this.eventTrigger = eventTrigger

    this.$form.addEventListener('submit', e => this.handleSubmit(e))
    this.$removeAllBtn.addEventListener('click', e =>
      this.handleClickRemoveBtn(e)
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.$input.value === '') return false
    const newData = {
      text: this.$input.value,
      isCompleted: false,
    }
    this.addTodo(newData)
    this.$input.value = ''
  }

  handleClickRemoveBtn() {
    const eventRemoveAll = new CustomEvent('removeAll')
    this.eventTrigger(eventRemoveAll)
  }
}
