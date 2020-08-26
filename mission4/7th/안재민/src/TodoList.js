import { REMOVE_BUTTON } from './constants.js'
import {
  isNotEmptyString,
  isBoolean,
  isArray,
  isNotEmpty,
} from './validator.js'

class TodoList {
  constructor(todoListId, onClickTodo, onClickRemove) {
    this.$todoList = this.getTodoListTag(todoListId)
    this.onClickTodo = onClickTodo
    this.onClickRemove = onClickRemove
    this.todos = []
    this.registerEventHanders()
  }

  getTodoListTag = (todoListId) => {
    const $todoList = document.getElementById(todoListId)
    isNotEmpty($todoList)
    return $todoList
  }

  registerEventHanders = () => {
    this.$todoList.addEventListener('click', (e) => {
      const isRemoveButton = e.target.className.includes(REMOVE_BUTTON)
      if (isRemoveButton) {
        e.stopPropagation()
        const todoId = e.target.closest('li').dataset.id
        this.onClickRemove(todoId)
      }
    })

    this.$todoList.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'LI') {
        e.stopPropagation()
        e.dataTransfer.setData('todoId', e.target.dataset.id)
        e.dataTransfer.setData('prevTodoCategory', e.target.closest('ul').id)
      }
    })

    this.$todoList.addEventListener('dragover', (e) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
    })

    this.$todoList.addEventListener('drop', (e) => {
      const targetTodoCategory = e.target.closest('ul').id
      const todoId = e.dataTransfer.getData('todoId')
      const prevTodoCategory = e.dataTransfer.getData('prevTodoCategory')
      if (targetTodoCategory !== prevTodoCategory) {
        this.onClickTodo(todoId)
      }
    })
  }

  render = () => {
    if (this.todos.length === 0) {
      this.$todoList.innerHTML = `<p class="empty-notice">등록한 할일이 없습니다. 새로운 할일을 입력해주세요.</p>`
    } else {
      const completedTodoList = this.todos.filter((todo) => todo.isCompleted)
      const inCompletedTodoList = this.todos.filter((todo) => !todo.isCompleted)
      const complemtedTodoListHTML = this.renderTodoList(completedTodoList)
      const inCompltedTodoListHTML = this.renderTodoList(inCompletedTodoList)

      this.$todoList.innerHTML = `
        <ul id="incompleted-todo-list">
          <li class="list-title"><p>할일 목록<p></li>
          ${inCompltedTodoListHTML.join('')}
        </ul>

        <ul id="completed-todo-list">
          <li class="list-title"><p>완료된 할일 목록<p></li>
          ${complemtedTodoListHTML.join('')}
        </ul>
        `
    }
  }

  renderTodoList = (todoList) => {
    return todoList.map((todo) => {
      const todoText = this.renderTodoText(todo)
      const todoElement = this.renderTodo(todo._id, todoText)
      return todoElement
    })
  }
  renderTodoText = (todo) => {
    const todoText = todo.isCompleted
      ? `<strike>${todo.content}</strike>`
      : todo.content

    return todoText
  }

  renderTodo = (todoId, todoText) => {
    const todo = `
              <li data-id="${todoId}" draggable="true">
                ${todoText}
                <button class="remove-button">Remove</button>
              </li>
            `
    return todo
  }

  validateTodoList = (todoList) => {
    isArray(todoList)
    todoList.every((todo) => this.validateTodo(todo))
  }

  validateTodo = (todo) => {
    isNotEmptyString(todo._id)
    isNotEmptyString(todo.content)
    isBoolean(todo.isCompleted)
    return true
  }

  setState = (todoList) => {
    this.validateTodoList(todoList)
    this.todos = todoList
    this.render()
  }
}

export default TodoList
