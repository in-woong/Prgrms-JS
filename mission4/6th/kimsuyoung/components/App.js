import UserList from './UserList.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoListDone from './TodoListDone.js'
import User from './User.js'
import {
  getUsers,
  //getTodoLists,
  postTodoList,
  deleteTodoList,
  toggleTodoList,
  getUserTodoLists,
} from '../api/index.js'

export default function App() {
  this.data = {
    user: 'suyoung',
    userList: [],
    todoList: [],
    todoListDone: [],
  }

  this.User = new User({
    $user: document.querySelector('#user'),
    user: this.data.user,
  })

  this.UserList = new UserList({
    $userList: document.querySelector('#user-list'),
    data: this.data.userList,
    onLoadUserList: async (user) => {
      await getUserTodoLists(user)
      this.setState(user)
    },
  })

  this.TodoList = new TodoList({
    $todoList: document.querySelector('#todo-list'),
    data: this.data.todoList,
    onDelete: async (id) => {
      await deleteTodoList({ id, user: this.data.user })
      this.setState(this.data.user)
    },
    onToggleCompleted: async (id) => {
      await toggleTodoList({ id, user: this.data.user })
      this.setState(this.data.user)
    },
  })

  this.TodoListDone = new TodoListDone({
    $todoListDone: document.querySelector('#todo-done-list'),
    data: this.data.todoListDone,
    onDelete: async (id) => {
      await deleteTodoList({ id, user: this.data.user })
      this.setState(this.data.user)
    },
    onToggleCompleted: async (id) => {
      await toggleTodoList({ id, user: this.data.user })
      this.setState(this.data.user)
    },
  })

  this.TodoInput = new TodoInput({
    $todoInput: document.querySelector('#todo-input'),
    onInput: async (text) => {
      await postTodoList({ text, user: this.data.user })
      this.setState(this.data.user)
    },
  })

  this.setState = async (user) => {
    this.data.user = user
    this.userListData = await getUsers()

    //this.todoListData = await getTodoLists()
    this.User.setState(user)
    this.todoListData = await getUserTodoLists(user)

    this.UserList.setState(this.userListData)

    this.TodoList.setState(
      this.todoListData.filter((value) => !value.isCompleted)
    )

    this.TodoListDone.setState(
      this.todoListData.filter((value) => value.isCompleted)
    )

    this.TodoInput.setState('')
  }

  this.setState(this.data.user)
}
