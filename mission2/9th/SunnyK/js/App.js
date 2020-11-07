import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import { useNewKeyword, isArrayState, checkTypes } from './Validation.js'
import data from './data.js'

export default class App {
  constructor() {
    useNewKeyword(this)
    this.validData(data)

    this.todoData = data
    this.todoList = new TodoList({
      todoData: this.todoData,
      $target: document.querySelector('#todo-list'),
    })
    this.todoInput = new TodoInput({
      $target: document.querySelector('#todo-input'),
    })

    this.init()
  }

  setState(nextTodoData) {
    this.validData(nextTodoData)
    this.todoData = nextTodoData

    this.todoList.setState({ nextData: this.todoData })
  }

  init() {
    this.todoList.deleteTodo = this.deleteTodo.bind(this)
    this.todoInput.insertTodo = this.insertTodo.bind(this)
  }

  validData(todoData) {
    isArrayState(todoData)
    checkTypes(
      todoData,
      ({ text, isCompleted }) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  insertTodo(newTodoText) {
    const nextTodoData = [
      ...this.todoData,
      {
        text: newTodoText,
        isCompleted: false,
      },
    ]

    this.setState(nextTodoData)
  }

  deleteTodo(deleteTodoIndex) {
    const nextTodoData = this.todoData.slice()
    nextTodoData.splice(deleteTodoIndex, 1)

    this.setState(nextTodoData)
  }
}
