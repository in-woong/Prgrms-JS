import { BASE_URL } from './constants.js'
import { isNotEmptyString, isPositiveNumber, isNotEmpty } from './validator.js'

export const GET_TODO_LIST = 'getTodoList'
export const ADD_TODO = 'addTodo'
export const TOGGLE_TODO = 'toggleTodo'
export const REMOVE_TODO = 'removeTodo'

class API {
  constructor(username, loadingNoticeId, delay) {
    isNotEmptyString(username)
    isPositiveNumber(delay)
    this.username = username
    this.delay = delay
    this.isLoading = false
    this.$loadingNotice = this.getLoadingNotice(loadingNoticeId)
  }

  setUsername = (username) => {
    isNotEmpty(username)
    this.username = username
  }

  getLoadingNotice = (loadingNoticeId) => {
    const $loadingNotice = document.getElementById(loadingNoticeId)
    isNotEmpty($loadingNotice)
    return $loadingNotice
  }

  setLoadingText = (label) => {
    this.isLoading = true
    this.$loadingNotice.innerHTML = `<p>Now wait for ${label}</p>`
  }

  resetLoading = () => {
    this.isLoading = false
    this.$loadingNotice.innerHTML = ''
  }

  callAPI = async (apiName, params) => {
    if (this.isLoading) return
    this.setLoadingText(apiName)
    let result = null
    switch (apiName) {
      case ADD_TODO: {
        await this.addTodo(params.todoText)
        break
      }
      case GET_TODO_LIST: {
        result = await this.getTodoList()
        break
      }
      case TOGGLE_TODO: {
        await this.toggleTodo(params.todoId)
        break
      }
      case REMOVE_TODO: {
        await this.removeTodo(params.todoId)
        break
      }
      default: {
        throw new Error(`Invalid api name: ${apiName}`)
      }
    }
    this.resetLoading()
    if (result !== null) return result
  }

  getTodoList = async () => {
    const response = await fetch(
      `${BASE_URL}/${this.username}?delay=${this.delay}`
    )
    return await response.json()
  }

  toggleTodo = async (todoId) => {
    this.setLoadingText('togglTodo')
    await fetch(
      `${BASE_URL}/${this.username}/${todoId}/toggle?delay=${this.delay}`,
      {
        method: 'PUT',
      }
    )
  }

  removeTodo = async (todoId) => {
    await fetch(`${BASE_URL}/${this.username}/${todoId}?delay=${this.delay}`, {
      method: 'DELETE',
    })
  }

  addTodo = async (todoText) => {
    isNotEmptyString(todoText)
    const stringFiedTodo = JSON.stringify({
      content: todoText,
    })

    await fetch(`${BASE_URL}/${this.username}?delay=${this.delay}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringFiedTodo,
    })
  }
}

export default API
