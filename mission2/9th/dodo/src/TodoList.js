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
      if (validateTypeOfTodoList(initialData)) this.state = initialData
      this.render()
    } catch (err) {
      console.log(err)
    }
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
          htmlString + `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`,
        ''
      ) || ''
  }
}
