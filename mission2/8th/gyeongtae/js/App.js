import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'

export default function App() {
  this.render = () => {
    let data = window.localStorage.getItem('todoList')
    data = JSON.parse(data)
    if (!data) {
      data = []
    }
    this.todoList = new TodoList('#todo-list', data)
    this.todoCount = new TodoCount('#todo-count', data)
    this.todoInput = new TodoInput()
    this.TodoRemoveAll = new TodoRemoveAll()
  }
  this.render()
}
