import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'
import {
  fetchTodosByUsername,
  postTodo,
  removeTodo,
  toggleTodo,
} from '../api/index.js'

function App({ target }) {
  this.init = () => {
    this.$element = $(target)
    this.username = 'KwonYoungGeun'
    this.todoListData = null
    this.todoInput = new TodoInput({
      target: '.todo-input-container',
      onSubmit: this.onSubmit,
    })
    this.todoList = new TodoList({
      target: '#todo-list',
      onRemove: this.onRemove,
      onToggle: this.onToggle,
    })

    this.validate(this.$element)
    this.setState(this.username)
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.onRemove = async id => {
    await removeTodo({ username: this.username, id })
    this.setState(this.username)
  }

  this.onToggle = async id => {
    await toggleTodo({ username: this.username, id })
    this.setState(this.username)
  }

  this.onSubmit = async todoText => {
    await postTodo({ username: this.username }, { todoText })
    this.setState(this.username)
  }

  this.setState = async username => {
    this.username = username
    this.todoListData = await fetchTodosByUsername({ username: this.username })

    this.todoInput.setState('')
    this.todoList.setState(this.todoListData)
  }

  this.init()
}

export default App
