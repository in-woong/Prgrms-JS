import {
  fetchData,
  putData,
  deleteData,
  postData,
  deleteDataAll,
  fetchUserList,
} from './api.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import Loding from './Loding.js'

export default function App({ target }) {
  this.username = 'lygggg'
  this.state = []
  this.users = []

  const loding = new Loding({
    app: target,
  })

  this.getData = async (name) => {
    loding.setState(false)

    const data = await fetchData(name, 3000)
    this.setState(data)
    this.setName(name)
    loding.setState(true)
  }

  this.getUsers = async () => {
    const data = await fetchUserList()
    this.setUsers(data)
  }

  this.getData(this.username)
  this.getUsers()

  const todoList = new TodoList({
    app: target,
    data: this.state,
    onClick: async (id) => {
      await putData(this.username, id)
      this.getData(this.username)
    },
    onRemove: async (id) => {
      await deleteData(this.username, id)
      this.getData(this.username)
    },
  })

  const todoInput = new TodoInput({
    app: target,
    onAddTodo: async (todoText) => {
      await postData(this.username, todoText)
      this.getData(this.username)
    },
    onRemoveAllTodo: async () => {
      await deleteDataAll(this.username)
      this.getData(this.username)
    },
  })

  const users = new Users({
    app: target,
    data: this.users,
    onClick: async (name) => {
      this.getData(name)
      users.setName(name)
    },
    name: this.username,
  })

  this.setState = (nextData) => {
    this.state = nextData
    todoList.setState(nextData)
  }

  this.setUsers = (nextData) => {
    this.users = nextData
    users.setState(nextData)
  }

  this.setName = (nextData) => {
    this.username = nextData
  }
}
