export default class TodoInput {
  constructor({ onAddTodo, onRemoveAll }) {
    this.$form = document.querySelector('#todo-form')
    this.$input = document.querySelector('#todo-input')
    this.$addBtn = document.querySelector('#add-todo-btn')
    this.$removeAllBtn = document.querySelector('#remove-todo-btn')

    this.onAddTodo = onAddTodo
    this.onRemoveAll = onRemoveAll

    this.$form.addEventListener('submit', this.handleSubmit)
    this.$removeAllBtn.addEventListener('click', this.handleClickRemoveBtn)
  }

  handleSubmit = event => {
    event.preventDefault()
    const todoText = this.$input.value
    if (todoText.length > 0) {
      this.onAddTodo(todoText)
      this.$input.value = ''
    }
  }

  handleClickRemoveBtn = () => {
    const eventRemoveAll = new CustomEvent('removeAll')
    this.onRemoveAll(eventRemoveAll)
  }
}
