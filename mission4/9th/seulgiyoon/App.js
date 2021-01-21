import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

import {
  getTodoList,
  removeTodo,
  addTodo,
  toggleTodo,
  removeAllTodo,
  getUserList,
} from './util/api.js'
import UserList from './components/UserList.js'

const DEFAULT_USERNAME = 'seulgiyoon'

export default class App {
  constructor(targetEl) {
    this.el = document.getElementById(targetEl)
    this.state = {
      username: DEFAULT_USERNAME,
      todoData: [],
      userList: [],
    }
    this.components = {
      input: new TodoInput({
        targetEl: 'todo-form',
        onSubmitEvent: this.addNewItem,
      }),
      todoList: new TodoList({
        targetEl: 'todo-list',
        initialState: this.state.todoData,
        username: this.state.username,
        onClickEvents: {
          removeItem: this.removeItem,
          completeItem: this.completeItem,
        },
      }),
      counter: new TodoCount({
        targetEl: 'todo-counter',
        initialState: this.state.todoData,
      }),
      userList: new UserList({
        targetEl: 'user-list',
        initialState: this.state.userList,
        searchUserTodo: this.searchUserTodo,
      }),
      removeButton: document.getElementById('todo-reset'),
    }
    this.addCustomEvent(this.components.removeButton, '@reset', async () => {
      await removeAllTodo(this.state.username)
      this.getTodoListData()
    })
    this.getTodoListData()
    this.getUserList()
  }

  setState = (dataArray, username) => {
    this.state.todoData = dataArray
    this.components.todoList.setState(dataArray, username)
    this.components.counter.setState(dataArray)
  }

  searchUserTodo = async (username) => {
    this.state.username = username
    this.getTodoListData()
  }

  getUserList = async () => {
    const userListData = await getUserList()
    this.state.userList = userListData
    this.components.userList.setState(userListData)
  }

  getTodoListData = async () => {
    const todoListData = await getTodoList(this.state.username)
    this.setState(todoListData, this.state.username)
  }

  addNewItem = async (value) => {
    const newData = { content: value }
    await addTodo(this.state.username, newData)
    this.getTodoListData()
  }

  removeItem = async (id) => {
    await removeTodo(this.state.username, id)
    this.getTodoListData()
  }

  completeItem = async (id) => {
    await toggleTodo(this.state.username, id)
    this.getTodoListData()
  }

  addCustomEvent = (fireEventEl, eventName, event) => {
    fireEventEl.addEventListener('click', () => {
      this.el.dispatchEvent(new CustomEvent(eventName))
    })

    this.el.addEventListener(eventName, event)
  }
}
