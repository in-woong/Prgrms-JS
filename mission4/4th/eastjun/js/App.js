import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import UserList from './components/UserList.js'

export default function App() {
  this.init = () => {
    const todoList = new TodoList()
    todoList.init()
    const todoInput = new TodoInput(todoList)
    todoInput.init()
    const userList = new UserList(todoList)
    userList.init()
  }
}
