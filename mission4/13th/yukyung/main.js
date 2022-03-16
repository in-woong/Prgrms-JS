import Loading from './components/Loading.js'
import Users from './components/Users.js'
import UserTodoList from './components/UserTodoList.js'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import todoApi from './util/api/todoApi.js'
import userApi from './util/api/userApi.js'
import { $ } from './util/helper.js'

class App {
  constructor() {
    this.state = {
      users: [],
      todos: [],
    }
    this.fetchData()
  }

  setState(nextState) {
    this.state = nextState
    this.init()
  }

  async fetchData() {
    this.setState({
      users: await userApi.fetchUsers(),
      todos: await todoApi.fetchTodo(),
    })
  }

  init() {
    const loading = new Loading({
      $target: $('#loading'),
      initialState: {
        isLoading: true,
      },
    })
    loading.setState({
      isLoading: this.state.todos.isLoading,
    })

    const users = new Users({
      $target: $('#user-list'),
      initialState: this.state.users,
      onClick: async (userName) => {
        const todoList = await userApi.userTodoList(userName)
        userTodoList.setState({ userName, todoList })
      },
    })

    const userTodoList = new UserTodoList({
      $target: $('#user-todo'),
    })

    const todoForm = new TodoForm({
      $target: $('#todo-form'),
      $input: $('#todo-input'),
      onSubmit: async (todoText) => {
        await todoApi.addTodo(todoText)
        const updatedData = await todoApi.fetchTodo()
        todoList.setState(updatedData)
      },
    })

    const todoList = new TodoList({
      $target: $('#todo-list'),
      initialState: this.state.todos,
      onClick: async (id) => {
        await todoApi.completedTodo(id)
        const updatedData = await todoApi.fetchTodo()
        todoList.setState(updatedData)
      },
      onRemove: async (id) => {
        await todoApi.removeTodo(id)
        const updatedData = await todoApi.fetchTodo()
        todoList.setState(updatedData)
      },
    })
    todoList.setState(this.state.todos)
  }
}

const app = new App()
