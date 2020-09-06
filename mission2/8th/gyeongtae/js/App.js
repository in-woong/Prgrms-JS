import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import { data, data2, data3, data4, data5 } from './data.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'

export default function App() {
  this.render = () => {
    this.todoList = new TodoList('#todo-list', data)
    this.todoCount = new TodoCount('#todo-count', data)
    this.todoInput = new TodoInput()
    this.TodoRemoveAll = new TodoRemoveAll()
  }
  this.render()
}
