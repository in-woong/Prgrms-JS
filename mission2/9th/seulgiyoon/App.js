import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import {
  getDataFromLocalStorage,
  storeToLocalStorage,
} from './util/localStorage.js'

const TODO_DATA_KEY = 'todoData'

export default class App {
  constructor(targetEl) {
    this.el = document.getElementById(targetEl)
    this.data = getDataFromLocalStorage(TODO_DATA_KEY) || []
    this.input = new TodoInput('todo-form')
    this.list = new TodoList('todo-list', this.data)
    this.counter = new TodoCount('todo-counter', this.data)
    this.removeButton = document.getElementById('todo-reset')
    this.init()
  }

  init() {
    this.input.addSubmitEvent(this.addNewItem.bind(this))
    this.list.addClickEvent(
      this.removeItem.bind(this),
      this.completeItem.bind(this)
    )
    this.addListClickEvent()
  }

  setState(dataArray) {
    this.data = dataArray
    this.list.setState(dataArray)
    this.counter.setState(dataArray)
    storeToLocalStorage('todoData', JSON.stringify(dataArray))
  }

  addNewItem(value) {
    const newData = [{ text: value, isCompleted: false }, ...this.data]
    this.setState(newData)
  }

  removeItem(tartgetText) {
    const newData = this.data.filter(
      (item) => item.text.replaceAll(' ', '') !== tartgetText
    )
    this.setState(newData)
  }

  completeItem(targetText) {
    const newData = this.data.map((item) =>
      item.text.replaceAll(' ', '') === targetText
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    )
    this.setState(newData)
  }

  addCustomEvent(fireEventEl, eventName, event) {
    fireEventEl.addEventListener('click', () => {
      this.el.dispatchEvent(new CustomEvent(eventName))
    })

    this.el.addEventListener(eventName, event)
  }

  addCustomEvent(event) {
    this.el.addEventListener(event, () => {
      const newData = []
      this.reRender(newData)
    })
  }
}
