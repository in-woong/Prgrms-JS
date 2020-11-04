import { useNewKeyword, isArrayState, checkTypes } from './Validation.js'

/**
 * TodoList 컴포넌트
 * @param {Array} todoData
 * @param {String} targetId
 */
export default function TodoList1(todoData, targetId) {
  this.validData = (todoData) => {
    useNewKeyword(this)
    isArrayState(todoData)
    checkTypes(
      todoData,
      ({ text, isCompleted }) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  this.setState = (nextData, targetId) => {
    this.validData(nextData)
    this.todoData = nextData
    if (targetId) this.$target = document.getElementById(targetId)
    this.render()
  }

  this.render = () => {
    const htmlString = this.todoData
      .map(({ text, isCompleted }) =>
        isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      )
      .join('')

    this.$target.innerHTML = `<ul>${htmlString}</ul>`
  }

  this.setState(todoData, targetId)
}
