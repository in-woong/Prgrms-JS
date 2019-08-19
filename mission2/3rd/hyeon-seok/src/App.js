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
        const dispatch = reducer[ACTION_TYPE.CREATE]
        const $todoItem = getParentElement({
          target: target,
          query: '.todo__item',
        })
        const selectedTodoIndex = getDataIndex({
          target: $todoItem,
        })

        const newTodoList = reducer[selectedAction]({
          prevTodoList: this.getTodo(),
          selectedTodoIndex: selectedTodoIndex,
        })
        this.setState({ newData: newTodoList })
      }.bind(this)
    )

    $wrapper.addEventListener(
      'keyup',
      function(e) {
        e.preventDefault()
        const isEnter = e.key !== 'Enter'
        const { value: newTodoText, className } = e.target
        const [actionName] = className.split('__')
        const selectedAction = ACTION_TYPE[actionName.toUpperCase()]

        if (!isEnter || !newTodoText) {
          return
        }

        const dispatch = reducer[ACTION_TYPE.CREATE]
        const newTodoList = dispatch({
          prevTodoList: this.getTodo(),
          newTodoText: newTodoText,
        })
        this.setState({ newData: newTodoList })
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
