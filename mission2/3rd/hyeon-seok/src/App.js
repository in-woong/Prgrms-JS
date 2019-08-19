import { isValidation, conditionalTemplate, inputFocus } from './util/index.js'
import { TodoCount, TodoInput, TodoList } from './components/index.js'
import { createTodo, updateTodo } from './actions/index.js'

class App {
  constructor({ wrapperElement, initData, ProxyModel }) {
    if (typeof new.target === 'undefined') {
      throw Error(ERROR_MSG.UNUSED_NEW)
    }

    this.$wrapper = wrapperElement
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
    inputFocus({ query: '.create__input' })
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
    // String DOM Template
    const $completedTodoCount = TodoCount({
      isCompleted: true,
      count: completedTodoCount,
    })
    const $activeTodoCount = TodoCount({
      count: activeTodoCount,
    })
    const $todoInput = TodoInput()
    const $todoList = TodoList({
      data: todo,
      strkieTemplate: strikeTemplateCreator,
    })

    $wrapper.innerHTML = `
      ${$todoInput}
      ${$todoList}
      ${completedTodoCount ? $completedTodoCount : ''}
      ${activeTodoCount ? $activeTodoCount : ''}
    `

    this.inputTodoFocus()
  }
}

export default App
