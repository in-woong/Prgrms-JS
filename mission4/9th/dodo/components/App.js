import TodoList from './TodoList.js'
import { checkCalledByNewKeyword, validateHTMLDOMElement, validateTodos } from '../validate.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import Loading from './Loading.js'

const NOT_FOUND = -1

export default function App({ target, API, todos, users }) {
  checkCalledByNewKeyword(new.target)
  validateHTMLDOMElement(target)
  validateTodos(todos)
  this.$root = target
  this.state = {
    todos,
    users,
    isLoading: false,
  }
  this.components = []

  this.addTodo = async (content) => {
    this.setState({ isLoading: true })
    const todo = await API.addTodo({ content })
    this.setState({ todos: [...this.state.todos, todo], isLoading: false })
  }

  this.deleteTodo = async (id) => {
    this.setState({ isLoading: true })
    await API.deleteTodo({ id })
    this.setState({ todos: this.state.todos.filter((todo) => todo._id !== id), isLoading: false })
  }

  this.toggleCompletion = async (id) => {
    this.setState({ isLoading: true })
    await API.toggleCompletion({ id })
    const todoIndex = this.state.todos.findIndex((todo) => todo._id === id)
    if (todoIndex === NOT_FOUND) return
    const { isCompleted, ...todo } = this.state.todos[todoIndex]
    this.setState({ todos: [...this.state.todos.slice(0, todoIndex), { ...todo, isCompleted: !isCompleted }, ...this.state.todos.slice(todoIndex + 1)], isLoading: false })
  }

  this.changeUser = async (username) => {
    API.setUsername(username)
    this.setState({ isLoading: true })
    this.setState({ todos: await API.getTodos(), isLoading: false })
  }

  this.init = () => {
    const $sectionLeft = document.createElement('section')
    $sectionLeft.id = 'section-users'
    const $sectionRight = document.createElement('section')
    $sectionRight.id = 'section-user-detail'
    const $todoForm = document.createElement('form')
    const $todoInput = document.createElement('input')
    $todoInput.type = 'text'
    const $todoList = document.createElement('ul')
    const $users = document.createElement('ul')
    const $loading = document.createElement('div')

    this.components.users = new Users({ $target: $users, users: this.state.users, selectedUser: API.getUsername(), changeUser: this.changeUser })
    this.components.todoInput = new TodoInput({ $target: $todoInput, addTodo: this.addTodo })
    this.components.todoList = new TodoList({ $target: $todoList, todos: this.state.todos, deleteTodo: this.deleteTodo, toggleCompletion: this.toggleCompletion })
    this.components.loading = new Loading({ $target: $loading })

    $sectionLeft.appendChild($users)
    $todoForm.appendChild($todoInput)
    $sectionRight.appendChild($todoForm)
    $sectionRight.appendChild($todoList)
    this.$root.appendChild($sectionLeft)
    this.$root.appendChild($sectionRight)
    this.$root.appendChild($loading)
  }

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  this.render = () => {
    this.components.todoList.setState(this.state.todos)
    this.components.users.setState({ users: this.state.users, selectedUser: API.getUsername() })
    this.components.loading.setState(this.state.isLoading)
  }

  this.init()
}
