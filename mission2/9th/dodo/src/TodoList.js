import { validateTypeOfDataArray, validateDOMElement } from './validator.js'

const validateTypeOfTodo = ({ text, isCompleted }) => {
  return typeof text === 'string' && typeof isCompleted === 'boolean'
}

const validateTypeOfTodoList = validateTypeOfDataArray(validateTypeOfTodo)

export default class TodoList {
  constructor({ target, initialData = [] }) {
    try {
      validateDOMElement(target)
      this.$target = target
      this.$target.addEventListener('click', this.onClick.bind(this))
      if (validateTypeOfTodoList(initialData)) this.state = initialData
      this.render()
    } catch (err) {
      console.log(err)
    }
  }

  toggleComplete(target) {
    const index = Number(target.parentNode.dataset.index)
    const { text, isCompleted } = this.state[index]
    this.setState([
      ...this.state.slice(0, index),
      {
        text,
        isCompleted: !isCompleted,
      },
      ...this.state.slice(index + 1),
    ])
  }

  delete(target) {
    const index = Number(target.parentNode.dataset.index)
    this.setState([
      ...this.state.slice(0, index),
      ...this.state.slice(index + 1),
    ])
  }

  onClick(event) {
    const action = event.target.dataset.action
    if (!action) return
    this[action](event.target)
  }

  setState(newData) {
    const prevState = this.state
    try {
      if (validateTypeOfTodoList(newData)) this.state = newData
      this.render()
    } catch (err) {
      console.log(err)
      this.state = prevState
    }
  }

  render() {
    this.$target.innerHTML =
      this.state.reduce(
        (htmlString, { text, isCompleted }, index) =>
          htmlString +
          `<li data-index=${index}><span data-action="toggleComplete" class=${
            isCompleted ? 'complete' : ''
          }>${text}</span><button data-action="delete">삭제</button></li>`,
        ''
      ) || ''
  }
}
