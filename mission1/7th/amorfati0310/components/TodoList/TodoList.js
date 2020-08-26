import {
  NotComponentsElement,
  NotArray,
  InvalidTodoItems,
} from '../../utils/error.js'
import { isObject, isString, isBoolean } from '../../utils/typeCheck.js'
import { todoListErrorHandler } from '../../utils/errorHandler.js'

import todoListTemplate from './template.js'

export default class TodoList {
  constructor({ element = '#todo-list', todos }) {
    try {
      this.setElement(element)
      this.setState(todos)
    } catch (error) {
      const { action, payload } = todoListErrorHandler(error)
      this[action](payload)
    }
  }

  initState() {
    this.todos = []
    this.element = null
  }

  isElementOptions(element) {
    return (
      typeof element === 'string' ||
      element.constructor.name === 'HTMLLIElement'
    )
  }

  isValidTodoItems(todos) {
    return todos.every(
      (todoItem) =>
        isObject(todoItem) &&
        isString(todoItem.text) &&
        isBoolean(todoItem.isCompleted)
    )
  }

  isValidTodos(todos) {
    return Array.isArray(todos)
  }

  setElement(element) {
    if (!this.isElementOptions(element)) {
      throw new NotComponentsElement()
    }

    this.element = document.querySelector(element)
  }

  setState(todos) {
    if (!this.isValidTodos(todos)) {
      throw new NotArray()
    }
    if (!this.isValidTodoItems(todos)) {
      throw new InvalidTodoItems(todos)
    }

    this.todos = todos

    this.render()
  }

  filterInvalidTodos(todos) {
    this.setState(
      todos.filter(
        (todoItem) =>
          isObject(todoItem) &&
          isString(todoItem.text) &&
          isBoolean(todoItem.isCompleted)
      )
    )
  }

  render() {
    this.element.innerHTML = todoListTemplate(this.todos)
  }
}
