import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function TodoList({ target, onRemove, onToggle }) {
  this.init = () => {
    this.$element = $(target)
    this.username = ''
    this.todoList = []

    this.validate(this.$element)
    this.bindEvents()
    this.render()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.bindEvents = () => {
    this.$element.addEventListener('click', e => this.onClick(e))
  }

  this.onClick = e => {
    const logics = {
      'remove-button': id => onRemove(id),
      'todo-item': id => onToggle(id),
      'deleted-todo': id => onToggle(id),
      default: () => {},
    }

    const id = e.target.getAttribute('data-id')
    const logic = logics[e.target.className] || logics['default']

    logic(id)
  }

  this.setState = data => {
    this.username = data.username
    this.todoList = data.todoListData
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `<div>${this.username}님의 TODO 리스트</div>
    <ul>${this.todoList
      .map(todoItem =>
        todoItem.isCompleted
          ? `<li class="todo-item" data-id=${todoItem._id}><del class="deleted-todo" data-id=${todoItem._id}>${todoItem.content}</del><button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
          : `<li class="todo-item" data-id=${todoItem._id}>${todoItem.content}<button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
      )
      .join('')}</ul>`
  }

  this.init()
}

export default TodoList
