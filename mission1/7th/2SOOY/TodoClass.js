import { isValidData, isValidTarget, displayError } from './utils/validation.js'

export default class TodoList {
  constructor($target, data) {
    try {
      isValidTarget($target)
      isValidData(data)

      this.$target = $target
      this.data = data
      this.render()
    } catch (err) {
      displayError(document.querySelector('#error-message'), err)
    }
  }

  render() {
    const resultHTML = this.data
      .map(({ text, isComplete }) => {
        return isComplete ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      })
      .join('')
    this.$target.innerHTML = `<ul>${resultHTML}</ul>`
  }

  setState(nextData) {
    try {
      isValidData(nextData)

      this.data = nextData
      this.render()
    } catch (err) {
      displayError(document.querySelector('#error-message'), err)
    }
  }
}
