import { validateTypeOfDataArray, validateDOMElement } from './validator.js'

const validateTypeOfTodo = ({ text, isCompleted }) => {
  return typeof text === 'string' && typeof isCompleted === 'boolean'
}

const validateTypeOfTodoList = validateTypeOfDataArray(validateTypeOfTodo)

export default class TodoList {
  constructor({ target, initialData = [] }) {
    try {
      if (!validateDOMElement(target)) throw Error('target is not found')
      this.$target = target
      this.$target.addEventListener('click', this.onClick.bind(this))
      if (validateTypeOfTodoList(initialData)) this.state = initialData
      this.render()
    } catch (err) {
      console.log(err)
    }
  }

  toggleComplete(target) {
    if (target.classList[0] === 'complete') {
      target.classList.remove('complete')
    } else {
      target.classList.add('complete')
    }
  }

  delete(target) {
    target.parentNode.remove()
  }

  onClick(event) {
    const action =
      event.target.dataset.action || event.currentTarget.dataset.action
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
        (htmlString, { text, isCompleted }) =>
          htmlString +
          `<li><span data-action="toggleComplete" class=${
            isCompleted ? 'complete' : ''
          }>${text}</span><button data-action="delete">삭제</button></li>`,
        ''
      ) || ''
  }
}
