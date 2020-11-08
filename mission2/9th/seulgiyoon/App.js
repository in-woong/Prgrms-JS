import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import Data from './Data.js'

export default class App {
  constructor() {
    this.input = new TodoInput('todo-form')
    this.list = new TodoList('todo-list', Data.todos)
    this.counter = new TodoCount('todo-counter', Data.todos)
    this.input.addSubmitEvent(this.addNewItem.bind(this))
    this.addListClickEvent()
  }

  reRender() {
    this.list.setState(Data.todos)
    this.counter.setState(Data.todos)
  }

  addNewItem(value) {
    Data.todos = [{ text: value, isCompleted: false }, ...Data.todos]
    this.reRender()
  }

  removeItem(tartgetText) {
    Data.todos = Data.todos.filter(
      (item) => item.text.replaceAll(' ', '') !== tartgetText
    )
    this.reRender()
  }

  completeItem(targetText) {
    Data.todos = Data.todos.map((item) =>
      item.text.replaceAll(' ', '') === targetText
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    )
    this.reRender()
  }

  addListClickEvent() {
    document.querySelector('ul').addEventListener('click', (e) => {
      if (e.target.className === 'close_btn') {
        this.removeItem(e.target.parentNode.dataset.text)
      } else if (e.target.className === 'text' || 'text_complete') {
        this.completeItem(e.target.parentNode.dataset.text)
      }
    })
  }
}
