import UserList from './component/UserList.js'
import TodoTitle from './component/TodoTitle.js'
import TodoList from './component/TodoList.js'
import TodoCount from './component/TodoCount.js'
import TodoInput from './component/TodoInput.js'
import Loading from './component/Loading.js'
import { getTodoData, getUserData, addData, removeData, toggleData } from './api.js'

export default function App() {
  this.username = 'kyunga'
  this.todos = []
  this.users = []

  this.init = function () {
    this.loading = new Loading()

    this.userList = new UserList(this.users, {onClick: this.getFetchData})
    this.todoTitle = new TodoTitle(this.username)
    this.todoList = new TodoList({
      target: document.querySelector('#todo-list'),
      data: this.todos,
      onRemove: this.onRemoveTodo,
      onToggle: this.onToggleTodo
    })
    this.todoCount = new TodoCount(this.getTodoCount())
    this.todoInput = new TodoInput(this.onAddTodo)

    this.getFetchData()
    this.getFatchUserData()
  }

  this.render = () => {
    this.todoTitle.setState(this.username)
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.getTodoCount())
  }

  this.getTodoCount = () => {
    return {
      totalCount: this.todos.length,
      completedCount: this.todos.filter(todoItem => todoItem.isCompleted).length,
    }
  }

  this.getFatchUserData = async () => {
    this.users = await getUserData()
    this.userList.setState(this.users)
  }

  this.getFetchData = async (username = this.username) => {
    this.username = username

    const updateData = await this.setLoadingBeforeFetch(() =>
        getTodoData(this.username)
    )

    this.todos = updateData
    this.render()
  }

  this.onAddTodo = async (todoText) => {
    await addData(this.username, todoText)
    await this.getFetchData()
  }

  this.onRemoveTodo = async (id) => {
    await removeData(this.username, id)
    await this.getFetchData()
  }

  this.onToggleTodo = async (id) => {
    await toggleData(this.username, id)
    await this.getFetchData()
  }

  this.setLoadingBeforeFetch = async function (fetchApi) {
    this.loading.setState(true)
    const result = await fetchApi()
    this.loading.setState(false)
    return result
  }

  this.init()
}
