import UserList from './UserList.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import { getUsers, getTodoLists, postTodoList } from '../api/index.js'

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

  this.TodoInput = new TodoInput({
    $todoInput: document.querySelector('#todo-input'),
    onInput: async (text) => {
      await postTodoList(text)
      this.setState()
    },
  })

  this.setState = async (nextData) => {
    this.userListData = await getUsers()
    this.todoListData = await getTodoLists()

    this.UserList.setState(this.userListData)
    this.TodoList.setState(this.todoListData)
    this.TodoInput.setState('')
  }

  this.setState()
}
