import { isValidation, conditionalTemplate } from './util/index.js'
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
    this.attachEvent({
      $target: this.$wrapper,
      model: this.model,
    })
  }

  setState({ target, prevData, newData }) {
    prevData[target] = newData
  }

  attachEvent({ $target, model }) {
    const eventList = ['click', 'keyup']

    eventList.forEach(eventType =>
      $target.addEventListener(
        eventType,
        function({ target }) {
          const [actionName] = target.className.split('__')
          const selectedAction = ACTION_TYPE[actionName.toUpperCase()]

          if (!selectedAction) {
            return
          }

          const payload = reducer[selectedAction](model.todo)
          this.setState({
            target: 'todo',
            prevData: model,
            newData: payload,
          })
        }.bind(this)
      )
    )
  }

  render = () => {
    const {
      $wrapper,
      model: { todo },
    } = this
    const strikeTemplateCreator = conditionalTemplate('strike')

    $wrapper.innerHTML = `
      ${TodoInput()}
      ${TodoList(todo, strikeTemplateCreator)}
      ${TodoCount()}
    `
  }
}

export default App
