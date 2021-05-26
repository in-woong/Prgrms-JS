import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRemoveBtn from './components/TodoRemoveBtn.js'
import UserList from './components/UserList.js'
import * as api from './api.js'
import TodoListTitle from './components/TodoListTitle.js'
import Loading from './components/Loading.js'

export default function App() {
  this.data = []
  this.users = []
  this.currentUser = ''

  const $completedTodoList = document.querySelector('#completed-todo-list')
  const $inProgressTodoList = document.querySelector('#in-progress-todo-list')
  const $loading = document.querySelector('.loading')
  const $todoForm = document.querySelector('.todo-form')
  const $todoInput = document.querySelector('.todo-input')
  const $todoCount = document.querySelector('.todo-count')
  const $removeAllBtn = document.querySelector('.remove-all-btn')
  const $userList = document.querySelector('.user-list')
  const $todoListTitle = document.querySelector('.todo-list-title')

  this.countTodo = (data) => {
    const totalCount = data.length
    const completedCount = data.filter(({ isCompleted }) => isCompleted).length
    this.todoCount.setState(totalCount, completedCount)
  }

  this.setState = (newData) => {
    this.data = newData
    this.countTodo(newData)
    this.inProgressTodoList.setState(newData.filter((data) => !data.isCompleted))
    this.completedTodoList.setState(newData.filter((data) => data.isCompleted))
  }

  this.setUser = (user) => {
    this.currentUser = user
    this.todoListTitle.setState(user)
  }

  this.addTodo = async (content) => {
    const response = await api.addTodo(this.currentUser, content)
    if (response) {
      const { content, isCompleted, _id } = response
      const newData = this.data.concat([{ content, isCompleted, _id }])
      this.setState(newData)
    }
  }

  this.deleteTodo = async (_id) => {
    const response = await api.deleteTodo(this.currentUser, _id)
    if (response) {
      const newData = this.data.filter((data) => data._id !== _id)
      this.setState(newData)
    }
  }

  this.toggleTodo = async (_toggleId) => {
    const response = await api.toggleTodo(this.currentUser, _toggleId)
    if (response) {
      const newData = this.data.map(({ content, isCompleted, _id }) => {
        if (_id === _toggleId) {
          return { content, isCompleted: !isCompleted, _id }
        }
        return { content, isCompleted, _id }
      })
      this.setState(newData)
    }
  }

  this.loadTodo = async (user) => {
    this.loading.setState(true)
    this.setState([])
    const response = await api.loadTodoList(user)
    if (response) {
      this.setState(response)
      this.setUser(user)
    }
    this.loading.setState(false)
  }

  $removeAllBtn.addEventListener('removeAll', async () => {
    const response = await api.deleteAllTodo(this.currentUser)
    if (response) {
      this.setState([])
    }
  })

  this.init = async () => {
    const response = await api.loadUsers()
    if (response) {
      this.users = response
      // components
      this.completedTodoList = new TodoList({
        data: this.data,
        $todoList: $completedTodoList,
        $dragTarget: $inProgressTodoList,
        deleteTodo: this.deleteTodo,
        toggleTodo: this.toggleTodo,
      })
      this.inProgressTodoList = new TodoList({
        data: this.data,
        $todoList: $inProgressTodoList,
        $dragTarget: $completedTodoList,
        deleteTodo: this.deleteTodo,
        toggleTodo: this.toggleTodo,
      })
      this.todoCount = new TodoCount($todoCount, this.data)
      new TodoInput($todoInput, $todoForm, this.addTodo)
      new TodoRemoveBtn($removeAllBtn)
      this.userList = new UserList($userList, this.users, this.loadTodo)
      this.todoListTitle = new TodoListTitle($todoListTitle)
      this.loading = new Loading($loading)
    }

    this.setState(this.data)
  }

  this.init()
}
