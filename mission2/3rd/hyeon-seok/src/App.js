import {
  isValidation,
  conditionalTemplate,
  getParentElement,
  getDataIndex,
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
    this.model.todo = initData
    this.attachEvent()
  }

  setState({ target, newData }) {
    this.model[target] = newData
  }

  attachEvent() {
    const { $wrapper } = this
    const eventList = ['click', 'keyup']

    eventList.forEach(eventType =>
      $wrapper.addEventListener(
        eventType,
        function({ target }) {
          const [actionName] = target.className.split('__')
          const selectedAction = ACTION_TYPE[actionName.toUpperCase()]

          if (!selectedAction) {
            return
          }
          const todoIndex = getDataIndex(
            getParentElement(target, '.todo__item')
          )

          const payload = reducer[selectedAction](this.model.todo, todoIndex)
          this.setState({
            target: 'todo',
            newData: payload,
          })
        }.bind(this)
      )
    )
  }

  getActiveTodoCount() {
    return this.model.todo.filter(({ isCompleted }) => !isCompleted).length
  }

  getCompletedTodoCount() {
    return this.model.todo.filter(({ isCompleted }) => isCompleted).length
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
  }
}

export default App
