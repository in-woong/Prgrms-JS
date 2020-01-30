import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import ErrorViewer from './ErrorViewer.js'
import { api } from './api.js'

export default function App(params) {
  let username = params.username
  const $targetTodoList = params.$targetTodoList
  const $targetTodoInput = params.$targetTodoInput
  const $targetRemoveBtn = params.$targetRemoveBtn
  const $targetUserList = params.$targetUserList
  const $targetUserName = params.$targetUserName
  let data = params.data || []
  let userList = params.userList
  const todoList = new TodoList({
    $target: $targetTodoList,
    data: data,
    onClick: async id => {
      await api.toggleTodo(username, id)
      const updatedData = await api.getTodosJson(username)
      this.setState(updatedData)
    },
    onRemove: async id => {
      await api.removeTodo(username, id)
      const updatedData = await api.getTodosJson(username)
      this.setState(updatedData)
    },
  })
  const todoInput = new TodoInput({
    $target: $targetTodoInput,
    $targetRemoveBtn: $targetRemoveBtn,
    onClick: async todoText => {
      if (todoText.length > 0) {
        await api.addTodo(username, todoText)
        const updatedData = await api.getTodosJson(username)
        this.setState(updatedData)
      }
    },
  })
  const users = new Users({
    $target: $targetUserList,
    data: userList,
    onClick: async clickedUserName => {
      username = clickedUserName
      const updatedData = await api.getTodosJson(username)
      this.setState(updatedData)
    },
  })

  this.setState = nextData => {
    data = nextData
    todoList.setState(data)
    this.render()
  }

  this.render = () => {
    todoList.render()
    users.render()
    $targetUserName.innerHTML = `${username}'s TodoList`
  }

  this.render()
}
