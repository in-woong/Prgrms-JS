import { validateDOMElement } from './validator.js'

export default class TodoInput {
  constructor({ target, addTodo }) {
    try {
      validateDOMElement(target)
      this.$target = target
      this.$target.addEventListener('input', this.onInput.bind(this))
      this.$target.addEventListener('keypress', this.onSubmit.bind(this))
      this.state = ''
      this.addTodo = addTodo
      this.$target.focus()
    } catch (err) {
      console.log(err)
    }
  }

  onInput(e) {
    e.preventDefault()
    this.setState(e.target.value)
  }

  onSubmit(e) {
    if (e.key !== 'Enter') return
    if (this.state.length === 0) return
    this.addTodo({ text: this.state, isCompleted: false })
    this.setState('')
  }

  setState(newState) {
    this.state = newState
    this.render()
  }

  render() {
    this.$target.value = this.state
  }
}
