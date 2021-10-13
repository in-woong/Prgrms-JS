import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoStorage from './TodoStorage.js'

const STORAGE_NAME = 'TODO'

function App() {
  this.storage = new TodoStorage(STORAGE_NAME)
  this.data = this.storage.get() || []

  this.removeBtnElement = document.querySelector('#remove-all')

  this.todoList = new TodoList(this.data, '#todo-list')
  this.todoInput = new TodoInput('#todo-input')
  this.todoCount = new TodoCount('#todo-count', this.data)

  this.todoInput.addEvent((item) => {
    if (item) {
      this.data.push({ text: item, isCompleted: false })
      this.todoList.setState(this.data)
      this.todoCount.render()
      this.storage.set(this.data)
    }
  })

  this.removeBtnElement.addEventListener('click', (e) => {
    if (this.data.length) {
      this.data.splice(0, this.data.length)
      this.todoList.setState(this.data)
      this.storage.clear()
      this.todoCount.render()
    }
  })

  this.todoList.element.addEventListener('click', (event) => {
    const dataId = event.target.getAttribute('data-id')
    if (dataId != null) {
      this.data.splice(dataId, 1)
      this.todoList.setState(this.data)
      this.todoCount.render()
    }
  })
}

export default App