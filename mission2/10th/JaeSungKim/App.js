import TodoList from './Components/TodoList.js'
import TodoInput from './Components/TodoInput.js'
import TodoCount from './Components/TodoCount.js'

function App() {
  if (!(this instanceof App)) {
    return new App()
  }

  if (!localStorage.getItem('todoData')) {
    window.localStorage.setItem('todoData', JSON.stringify([]))
  }
  let todoData = JSON.parse(window.localStorage.getItem('todoData'))

  this.addItem = (newItem) => {
    todoData = [...todoData, newItem]
    window.localStorage.setItem('todoData', JSON.stringify(todoData))
    this.updateItems(todoData)
  }

  this.toggleItem = (toggleId) => {
    todoData = todoData.map((item, index) => {
      if (index === toggleId) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    window.localStorage.setItem('todoData', JSON.stringify(todoData))
    this.updateItems(todoData)
  }

  this.removeAllItems = () => {
    todoData = []
    window.localStorage.clear()
    this.updateItems(todoData)
  }

  this.updateItems = (newData) => {
    this.todoList.setState(newData)
    this.todoCount.refreshCount(newData)
  }

  this.todoList = new TodoList(document.querySelector('#todo-list'), todoData, this.toggleItem)
  this.todoInput = new TodoInput(document.querySelector('#todo-form'), this.addItem)
  this.todoCount = new TodoCount(document.querySelector('#todo-count'), todoData)

  const $todoList = document.querySelector('#todo-list')
  const $removeAllBtn = document.querySelector('#todo-remove-all')

  const removeAllEvent = new Event('remove-all-items')
  $removeAllBtn.addEventListener('click', (event) => {
    if (confirm('전체 삭제 하시겠습니까?')) {
      $todoList.dispatchEvent(removeAllEvent)
    }
  })
  $todoList.addEventListener('remove-all-items', this.removeAllItems)
}

export default App
