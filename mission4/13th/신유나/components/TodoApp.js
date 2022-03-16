import {
  getTodos,
  addTodo,
  deleteTodo,
  deleteTodos,
  updateTodoIsCompleted,
} from '../api/index.js'
import { TodoInput } from './TodoInput.js'
import { TodoItems } from './TodoItems.js'
import { TodoCount } from './TodoCount.js'
import { Loading } from './Loading.js'
import { $ } from '../utils/$.js'
import { Users } from './Users.js'

export default class TodoApp {
  $state
  constructor($target) {
    this.$target = $target
    this.$state = { todos: [], isLoading: false, user: 'yunadev' }

    this.render()
    this.init()
  }

  appLayout() {
    return `
      <main class="container">
        <form data-component="todo-form"></form>
        <div data-component="todo-container"></div>
        <div data-component="todo-users"></div>
      </main>
    `
  }

  render() {
    this.$target.innerHTML = this.appLayout()
  }

  init() {
    const { todos, isLoading, user } = this.$state

    const $todoForm = $('[data-component="todo-form"]')
    const $todoContainer = $('[data-component="todo-container"]')
    const $todoUsers = $('[data-component="todo-users"]')

    new TodoInput($todoForm, {
      addTodo: this.addTodo.bind(this),
      removeAllTodo: this.removeAllTodo.bind(this),
    })
    this.loading = new Loading($todoContainer, {
      isLoading,
    })
    this.todoItems = new TodoItems($todoContainer, {
      todos,
      user,
      deleteTodo: this.deleteTodo.bind(this),
      updateTodoIsCompleted: this.updateTodoIsCompleted.bind(this),
    })
    this.todoCount = new TodoCount($todoContainer, {
      todos,
    })
    this.users = new Users($todoUsers, {
      isLoading,
      fetchSelectUserTodo: this.fetchSelectUserTodo.bind(this),
    })

    this.fetchTodos()
  }

  setState(newState) {
    this.$state = newState

    this.todoItems.setState({
      todos: this.$state.todos,
      user: this.$state.user,
    })
    this.todoCount.setState(this.$state.todos)
    this.loading.setState(this.$state.isLoading)
  }

  async fetchTodos(userName = this.$state.user) {
    try {
      this.setState({ ...this.$state, isLoading: true, user: userName })
      const todos = await getTodos(userName)
      this.setState({
        ...this.$state,
        todos: todos,
        isLoading: false,
      })
    } catch (error) {
      console.error('🚀 ~ fetchTodos ~ error', error)
    }
  }

  async addTodo(content) {
    try {
      await addTodo(content)
      await this.fetchTodos()
    } catch (error) {
      console.error('🚀 ~ error', error)
    }
  }

  async deleteTodo(todoId) {
    try {
      await deleteTodo(todoId)
      await this.fetchTodos()
    } catch (error) {
      console.error('🚀 ~ error', error)
    }
  }

  async updateTodoIsCompleted(todoId) {
    try {
      await updateTodoIsCompleted(todoId)
      await this.fetchTodos()
    } catch (error) {
      console.error('🚀 ~ error', error)
    }
  }

  async removeAllTodo() {
    try {
      await deleteTodos()
      await this.fetchTodos()
    } catch (error) {
      console.error('🚀 ~ error', error)
    }
  }

  async fetchSelectUserTodo(userName) {
    try {
      await this.fetchTodos(userName)
    } catch (error) {
      console.error('🚀 ~ error', error)
    }
  }
}
