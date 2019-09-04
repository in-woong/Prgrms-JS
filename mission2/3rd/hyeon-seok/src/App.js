import { isValidation, conditionalTemplate, inputFocus } from './util/index.js'
import { TodoCount, TodoInput, TodoList } from './components/index.js'
import { createTodo, updateTodo } from './actions/index.js'

class App {
  constructor({ $wrapper, initData, ProxyModel }) {
    if (typeof new.target === 'undefined') {
      throw Error(ERROR_MSG.UNUSED_NEW)
    }

    this.$wrapper = $wrapper
    this.model = new ProxyModel({ callbackFunc: this.render })
    this.model.todo = isValidation(initData)
    this.attachEvent()
  }

  setState({ newData }) {
    this.model.todo = newData
  }

  attachEvent() {
    const { $wrapper } = this

    $wrapper.addEventListener('click', updateTodo.bind(this))
    $wrapper.addEventListener('keyup', createTodo.bind(this))
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
    inputFocus({ target: this.$wrapper, query: '.create__input' })
  }

  render = () => {
    const {
      $wrapper,
      model: { todo },
    } = this
    // computed Data
    const completedTodoCount = this.getCompletedTodoCount()
    const activeTodoCount = this.getActiveTodoCount()
    const strikeTemplateCreator = conditionalTemplate({ element: 'strike' })
    const strDOMCompletedTodoCount = TodoCount({
      isCompleted: true,
      count: completedTodoCount,
    })
    const strDOMActiveTodoCount = TodoCount({
      count: activeTodoCount,
    })
    const strDOMTodoInput = TodoInput()
    const strDOMTodoList = TodoList({
      data: todo,
      strkieTemplate: strikeTemplateCreator,
    })

    $wrapper.innerHTML = `
      ${strDOMTodoInput}
      ${strDOMTodoList}
      ${completedTodoCount ? strDOMCompletedTodoCount : ''}
      ${activeTodoCount ? strDOMActiveTodoCount : ''}
    `

    this.inputTodoFocus()
  }
}

export default App
