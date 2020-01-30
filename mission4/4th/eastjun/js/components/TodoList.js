import { todoItemTemplate, loadingSkeletonTemplate } from '../utils/templates.js'
import TodoCount from './TodoCount.js'
import api from '../api/api.js'
import { DEFAULT_USER } from '../utils/utils.js'

export default function TodoList() {
  this._$todoList = document.querySelector('#todo-list')
  this._todoItems = []

  this.render = (items) => {
    const template = items.map((item) => todoItemTemplate(item))
    this._$todoList.innerHTML = template.join('')
  }

  this._loadTodoItems = async () => {
    this.renderSkeleton()
    try {
      await this._fetchData()
      this.render(this._todoItems)
      this.renderTodoCount(this._todoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

  this._fetchData = async () => {
    const $targetUser = document.querySelector('#user-title')
    this._todoItems = await api.todoItem.get($targetUser.dataset.username || DEFAULT_USER)
  }

  this.renderSkeleton = () => {
    this._$todoList.innerHTML = loadingSkeletonTemplate()
  }

  this.renderTodoCount = (todoItems) => {
    const todoCount = new TodoCount(todoItems)
    todoCount.init()
  }

  this._toggleTodoItem = async (event) => {
    const $targetTodoItem = event.target.closest('li')
    const itemId = $targetTodoItem.dataset.id
    try {
      await api.todoItem.complete(itemId)
      await this._fetchData()
      $targetTodoItem.classList.toggle('completed')
      this.renderTodoCount(this._todoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

  this._removeTodoItem = async (event) => {
    const $targetTodoItem = event.target.closest('li')
    const itemId = $targetTodoItem.dataset.id
    try {
      await api.todoItem.remove(itemId)
      $targetTodoItem.remove()
      await this._fetchData()
      this.renderTodoCount(this._todoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

  this._initEventListener = () => {
    this._$todoList.addEventListener('click', (event) => {
      const { classList } = event.target
      if (classList.contains('toggle')) this._toggleTodoItem(event)
      if (classList.contains('delete')) this._removeTodoItem(event)
    })
  }

  this.init = () => {
    this._initEventListener()
    this._loadTodoItems()
  }
}
