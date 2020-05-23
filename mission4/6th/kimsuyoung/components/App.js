import UserList from './UserList.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoListDone from './TodoListDone.js'
import {
  getUsers,
  getTodoLists,
  postTodoList,
  deleteTodoList,
  toggleTodoList,
} from '../api/index.js'

export default function App() {
  this.data = {
    userList: [],
    todoList: [],
    todoListDone: [],
  }

  this.UserList = new UserList({
    $userList: document.querySelector('#user-list'),
    data: this.data.userList,
  })

  this.TodoList = new TodoList({
    $todoList: document.querySelector('#todo-list'),
    data: this.data.todoList,
    onDelete: async (id) => {
      await deleteTodoList(id)
      this.setState()
    },
    onToggleCompleted: async (id) => {
      await toggleTodoList(id)
      this.setState()
    },
  })

  this.TodoListDone = new TodoListDone({
    $todoListDone: document.querySelector('#todo-done-list'),
    data: this.data.todoListDone,
    onDelete: async (id) => {
      await deleteTodoList(id)
      this.setState()
    },
    onToggleCompleted: async (id) => {
      await toggleTodoList(id)
      this.setState()
    },
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
    this.TodoList.setState(
      this.todoListData.filter((value) => !value.isCompleted)
    )
    this.TodoListDone.setState(
      this.todoListData.filter((value) => value.isCompleted)
    )
    this.TodoInput.setState('')
  }

  this.setState()
}
