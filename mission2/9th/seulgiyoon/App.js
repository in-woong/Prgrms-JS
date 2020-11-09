import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

export default class App {
  constructor(el) {
    this.el = document.getElementById(el)
    this.data = JSON.parse(localStorage.getItem('data')) || []
    this.input = new TodoInput('todo-form')
    this.list = new TodoList('todo-list', this.data)
    this.counter = new TodoCount('todo-counter', this.data)
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

  reRender(data) {
    this.data = data
    this.list.setState(data)
    this.counter.setState(data)
    localStorage.setItem('data', JSON.stringify(data))
  }

  addNewItem(value) {
    const newData = [{ text: value, isCompleted: false }, ...this.data]
    this.reRender(newData)
  }

  removeItem(tartgetText) {
    const newData = this.data.filter(
      (item) => item.text.replaceAll(' ', '') !== tartgetText
    )
    this.reRender(newData)
  }

  completeItem(targetText) {
    const newData = this.data.map((item) =>
      item.text.replaceAll(' ', '') === targetText
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    )
    this.reRender(newData)
  }

  addCustomResetEvent(event) {
    this.el.addEventListener(event, () => {
      const newData = []
      this.reRender(newData)
    })
  }
}
