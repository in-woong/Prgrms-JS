import UserList from './UserList.js'
import TodoList from './TodoList.js'
import { getUsers, getTodoLists } from '../api/index.js'

export default function App() {
  this.data = {
    userList: [],
    todoList: [],
  }

  this.UserList = new UserList({
    $userList: document.querySelector('#user-list'),
    data: this.data.userList,
  })

  this.TodoList = new TodoList({
    $todoList: document.querySelector('#todo-list'),
    data: this.data.todoList,
  })

  this.setState = async (nextData) => {
    this.userListData = await getUsers()
    this.todoListData = await getTodoLists()

    this.UserList.setState(this.userListData)
    this.TodoList.setState(this.todoListData)
  }

  this.setState()
}
