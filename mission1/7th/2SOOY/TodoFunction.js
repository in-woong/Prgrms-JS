import { isValidTarget, isValidData, displayError } from './utils/validation.js'

export default function TodoList($target, data) {
  try {
    if (!new.target) throw new Error('New Keyword Error')

    isValidTarget($target)
    isValidData(data)

    this.$target = $target
    this.data = data
    this.render()
  } catch (err) {
    displayError(document.querySelector('#error-message'), err)
  }
}

TodoList.prototype.render = function () {
  this.$target.innerHTML = this.getTodosHTML(this.data)
}

TodoList.prototype.getTodosHTML = function (todos) {
  return (
    todos.reduce((html, item) => {
      html += this.getTodoHTML(item)
      return html
    }, '<ul>') + '</ul>'
  )
}

TodoList.prototype.getTodoHTML = function ({ text, isComplete }) {
  return isComplete ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
}

TodoList.prototype.setState = function (nextData) {
  try {
    isValidData(nextData)

    this.data = nextData
    this.render()
  } catch (err) {
    displayError(document.querySelector('#error-message'), err)
  }
}
