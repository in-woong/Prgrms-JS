import {
  isValidation,
  conditionalTemplate,
  getParentElement,
  getDataIndex,
  inputFocus,
} from './util/index.js'
import { TodoCount, TodoInput, TodoList } from './components/index.js'
import ACTION_TYPE from '../src/actions/index.js'
import reducer from '../src/reducer/index.js'

class App {
  constructor({ wrapperElement, initData, ProxyModel }) {
    if (typeof new.target === 'undefined') {
      throw Error(ERROR_MSG.UNUSED_NEW)
    }

    this.$wrapper = wrapperElement
    this.model = new ProxyModel({ callback: this.render })
    this.model.todo = isValidation(initData)
    this.attachEvent()
  }

  setState({ newData }) {
    this.model.todo = newData
  }

  attachEvent() {
    const { $wrapper } = this

    $wrapper.addEventListener(
      'click',
      function({ target }) {
        const [actionName] = target.className.split('__')
        const selectedAction = ACTION_TYPE[actionName.toUpperCase()]

        if (!selectedAction || selectedAction === ACTION_TYPE.CREATE) {
          return
        }

        const todoIndex = getDataIndex(getParentElement(target, '.todo__item'))

        const payload = reducer[selectedAction](this.getTodo(), todoIndex)
        this.setState({ newData: payload })
      }.bind(this)
    )

    $wrapper.addEventListener(
      'keyup',
      function(e) {
        e.preventDefault()
        const [actionName] = e.target.className.split('__')
        const selectedAction = ACTION_TYPE[actionName.toUpperCase()]
        const { value } = e.target

        if (e.key !== 'Enter' || !value) {
          return
        }
        const payload = reducer[ACTION_TYPE.CREATE](this.getTodo(), value)

        this.setState({ newData: payload })
      }.bind(this)
    )
  }

  getTodo() {
    return this.model.todo
  }

  getActiveTodoCount() {
    return this.getTodo().filter(({ isCompleted }) => !isCompleted).length
  }

  getCompletedTodoCount() {
    return this.getTodo().filter(({ isCompleted }) => isCompleted).length
  }

  inputTodoFocus() {
    inputFocus('.create__input')
  }

  render = () => {
    const {
      $wrapper,
      model: { todo },
    } = this
    const completedTodoCount = this.getCompletedTodoCount()
    const activeTodoCount = this.getActiveTodoCount()
    const strikeTemplateCreator = conditionalTemplate('strike')
    const CompletedTodoCount = TodoCount({
      isCompleted: true,
      count: completedTodoCount,
    })
    const ActiveTodoCount = TodoCount({
      count: activeTodoCount,
    })

    $wrapper.innerHTML = `
      ${TodoInput()}
      ${TodoList(todo, strikeTemplateCreator)}
      ${completedTodoCount ? CompletedTodoCount : ''}
      ${activeTodoCount ? ActiveTodoCount : ''}
    `

    this.inputTodoFocus()
  }
}

export default App
