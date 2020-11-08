import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Data from './Data.js'

export default class App {
  constructor() {
    this.list = new TodoList('todo-list', Data.todos)
    this.input = new TodoInput()
    this.input.addSubmitEvent(this.addNewItem.bind(this))
    this.addListClickEvent()
  }

  addNewItem(value) {
    Data.todos = [{ text: value, isCompleted: false }, ...Data.todos]
    this.list.setState(Data.todos)
  }

  removeItem(tartgetText) {
    Data.todos = Data.todos.filter(
      (item) => item.text.replaceAll(' ', '') !== tartgetText
    )
    this.list.setState(Data.todos)
  }

  completeItem(targetText) {
    Data.todos = Data.todos.map((item) =>
      item.text.replaceAll(' ', '') === targetText
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    )
    this.list.setState(Data.todos)
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
