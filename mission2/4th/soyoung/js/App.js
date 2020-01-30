import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { isElement, throwError, setAttr } from './utils.js'

export default class App {
  constructor(element, title = 'Todo') {
    if (!isElement(element)) throwError('Invalid element')

    // data
    this.todoItems = []
    this.getTodoCount = () => ({
      totalCount: this.todoItems.length,
      completedCount: this.todoItems.filter(item => item.isCompleted).length,
    })

    // components
    this.$appComponent = element
    this.title = title
    this.TodoInput = new TodoInput({
      addTodo: this.addTodo.bind(this),
      eventTrigger: this.eventTrigger.bind(this),
    })
    this.TodoList = new TodoList({
      toggleTodo: this.toggleTodo.bind(this),
      removeTodo: this.removeTodo.bind(this),
      removeAllTodo: this.removeAllTodo.bind(this),
    })
    this.TodoCount = new TodoCount(this.getTodoCount())

    this.init()
    this.render()
  }

  init() {
    const $section = document.createElement('section')
    setAttr($section, 'class', 'container')
    $section.innerHTML = `<h1>${this.title}</h1>`

    $section.appendChild(this.TodoInput.$form)
    $section.appendChild(this.TodoList.$ul)
    $section.appendChild(this.TodoCount.$p)
    this.$appComponent.appendChild($section)

    this.getData()
  }

  addTodo(newData) {
    actionWithRender(() => this.todoItems.push(newData))
  }

  toggleTodo(index) {
    actionWithRender(
      () =>
        (this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted)
    )
  }

  removeTodo(index) {
    actionWithRender(() => this.todoItems.splice(index, 1))
  }

  eventTrigger(event) {
    this.TodoList.$ul.dispatchEvent(event)
  }

  removeAllTodo() {
    actionWithRender(() => (this.todoItems = []))
  }

  render() {
    this.TodoList.setState(this.todoItems)
    this.TodoCount.setState(this.getTodoCount())
    this.TodoList.render()
    this.TodoCount.render()
  }

  getData() {
    const data = localStorage.getItem(this.title)
    this.todoItems = data ? JSON.parse(data) : []
  }

  setData() {
    localStorage.setItem(this.title, JSON.stringify(this.todoItems))
  }

  actionWithRender(callback) {
    if (typeof callback !== 'function') {
      throwError('callback is not a function')
    }
    callback()
    this.render()
    this.setData()
  }
}
