import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import Users from './Users.js'
import Loading from './Loading.js'
import { validateTodo } from './validator.js'
import {
  getTodoFetch,
  addTodoFetch,
  removeTodoFetch,
  resetTodoFetch,
  toggleFetch,
  getUsersFetch,
} from './api.js'

export default function App($target) {
  this.$target = $target
  this.todoData = {
    currentUser: 'jinist',
    todos: [],
  }
  this.isLoading = false
  this.usersData = []

  this.setState = (nextData) => {
    validateTodo(nextData)
    this.todoData = nextData

    const todos = this.todoData.todos.filter(
      (todo) => todo.isCompleted !== true
    )
    const completed = this.todoData.todos.filter(
      (todo) => todo.isCompleted !== false
    )
    const currentUser = this.todoData.currentUser

    todoInput.setState(this.todoData.currentUser)
    todoList.setState({ currentUser, todos })
    completedTodoList.setState({ currentUser, todos: completed })
    loading.setState(false)
  }

  this.init = async () => {
    loading.setState(true)
    try {
      const [todos, userData] = await Promise.all([
        getTodoFetch(this.todoData.currentUser),
        getUsersFetch(),
      ])
      console.log(userData)
      users.setState(userData)
      this.setState({ ...this.todoData, todos })
    } catch (error) {
      console.log(error)
    }
  }

  const updateTodoData = async (currentUser) => {
    loading.setState(true)
    try {
      const todos = await getTodoFetch(currentUser)
      this.setState({ currentUser, todos })
    } catch (error) {
      console.log(error)
    }
  }

  const onAddTodo = async (todoText) => {
    try {
      if (todoText.length > 0) {
        await addTodoFetch(this.todoData.currentUser, todoText)
        updateTodoData(this.todoData.currentUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onToggleTodo = async (id) => {
    try {
      await toggleFetch(this.todoData.currentUser, id)
      updateTodoData(this.todoData.currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  const onRemoveTodo = async (id) => {
    try {
      await removeTodoFetch(this.todoData.currentUser, id)
      updateTodoData(this.todoData.currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  const onResetTodo = async () => {
    try {
      await resetTodoFetch(this.todoData.currentUser)
      updateTodoData(this.todoData.currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  const onClickUser = (currentUser) => {
    updateTodoData(currentUser)
  }

  const todoList = new TodoList({
    $target: this.$target,
    todoData: this.todoData,
    isCompleted: false,
    onToggleTodo,
    onRemoveTodo,
  })

  const completedTodoList = new TodoList({
    $target: this.$target,
    todoData: this.todoData,
    isCompleted: true,
    onToggleTodo,
    onRemoveTodo,
  })

  const todoInput = new TodoInput({
    $target: this.$target,
    onAddTodo,
    onResetTodo,
    currentUser: this.todoData.currentUser,
  })

  const users = new Users({
    $target: this.$target,
    usersData: this.usersData,
    onClickUser,
  })

  const loading = new Loading({ $target, isLoading: this.isLoading })

  this.init()
}
