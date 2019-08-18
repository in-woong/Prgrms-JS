import { isValidation, conditionalTemplate } from './util/index.js'
import { TodoCount, TodoInput, TodoList } from './components/index.js'

class App {
  constructor({ wrapperElement, todoData }) {
    if (typeof new.target === 'undefined') {
      throw Error(ERROR_MSG.UNUSED_NEW)
    }

    this.$wrapper = wrapperElement
    this.data = isValidation(todoData)
  }

  setState(nextState) {
    this.data = isValidation(nextState)
    this.render()
  }

  render() {
    const { $wrapper, data } = this
    const strikeTemplateCreator = conditionalTemplate('strike')

    $wrapper.innerHTML = `
      ${TodoInput()}
      ${TodoList(data, strikeTemplateCreator)}
      ${TodoCount()}
    `
  }
}

export default App
