import { Core } from './Core.js'
import { STORAGE_KEY, TODO_ITEM_STATUS_ENUM } from '../constants/index.js'
import { TodoInput } from './TodoInput.js'
import { TodoItems } from './TodoItems.js'
import { $ } from '../utils/$.js'
import { TodoCount } from './TodoCount.js'
import { getStorageItem } from '../utils/storage.js'

export default class TodoList extends Core {
  setup() {
    this.$state = getStorageItem(STORAGE_KEY) || []
  }

  template() {
    return `
      <form data-component="todo-input"></form>
      <div data-component="todo-items"></div>
      <div data-component="todo-count"></div>
    `
  }

  componentDidMount() {
    const $todoInput = $('[data-component="todo-input"]')
    const $todoItems = $('[data-component="todo-items"]')
    const $todoCount = $('[data-component="todo-count"]')

    new TodoInput($todoInput, {
      addTodo: this.addTodo.bind(this),
      removeAllTodo: this.removeAllTodo.bind(this),
    })
    new TodoItems($todoItems, {
      todos: this.$state,
      deleteTodo: this.deleteTodo.bind(this),
      updateTodo: this.updateTodo.bind(this),
    })
    new TodoCount($todoCount, {
      todos: this.$state,
    })
  }

  addTodo(text) {
    const todos = this.$state
    const id = todos.length !== 0 ? Math.max(...todos.map((v) => v.id)) + 1 : 1
    const todo = {
      id,
      text,
      isCompleted: false,
      status: TODO_ITEM_STATUS_ENUM['TODO'],
    }

    this.setState([...todos, todo])
  }

  deleteTodo(todoId) {
    const todos = [...this.$state]

    todos.splice(
      todos.findIndex((v) => v.id === +todoId),
      1
    )
    this.setState(todos)
  }

  updateTodo(todoId, status) {
    const todos = [...this.$state]
    const todo = todos.find((v) => v.id === +todoId)

    todo.status = status
    todo.isCompleted = status === TODO_ITEM_STATUS_ENUM['DONE']
    this.setState(todos)
  }

  removeAllTodo() {
    this.setState([])
  }
}
