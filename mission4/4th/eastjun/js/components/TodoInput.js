import api from '../api/api.js'
import validator from '../utils/validator.js'
import { DEFAULT_USER } from '../utils/utils.js'
import TodoCount from './TodoCount.js'

export default function TodoInput(todoList) {
  const $input = document.getElementById('todo-input')

  this._add = async (event) => {
    const newTodoContents = event.target.value
    const $targetUser = document.querySelector('#user-title')
    if (validator.isEnterKey(event.which) && validator.isString(newTodoContents)) {
      try {
        await api.todoItem.add(newTodoContents)
        const updateTodoItems = await api.todoItem.get($targetUser.dataset.username || DEFAULT_USER)
        todoList.render(updateTodoItems)
        todoList.renderTodoCount(updateTodoItems)
        this._initValue()
      } catch (e) {
        throw new Error(e)
      }
    }
  }

  this._initValue = () => {
    $input.value = ''
  }

  this._initEventListener = () => {
    $input.addEventListener('keydown', this._add)
  }

  this.init = () => {
    this._initValue()
    this._initEventListener()
  }
}
