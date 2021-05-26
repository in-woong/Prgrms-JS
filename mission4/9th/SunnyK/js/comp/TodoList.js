import { createElementWithClass } from '../util/util.js'

export default function TodoList({
  $parent,
  todos,
  status,
  onDeleteTodo,
  onToggleTodo,
}) {
  this.$target = createElementWithClass({
    tagName: 'div',
    className: 'TodoList',
  })
  $parent.appendChild(this.$target)

  this.$title = createElementWithClass({
    tagName: 'h3',
    className: 'todolist-title',
  })
  this.$target.insertAdjacentElement('afterbegin', this.$title)

  this.$list = createElementWithClass({
    tagName: 'ul',
    className: 'todolist-list',
  })
  this.$target.appendChild(this.$list)

  this.todos = todos
  this.status = status
  this.onDeleteTodo = onDeleteTodo
  this.onToggleTodo = onToggleTodo

  this.createTitleString = () => {
    if (this.status === 'complete') {
      return '완료된 할 일'
    }
    if (this.status === 'uncomplete') {
      return '진행중인 할 일'
    }
    return ''
  }

  this.dragoverHandler = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  this.dropHandler = (e) => {
    e.preventDefault()

    const draggedEleId = e.dataTransfer.getData('text/plain')
    const draggedEleParent = document.getElementById(draggedEleId).parentElement

    if (this.$list !== draggedEleParent) {
      this.onToggleTodo(draggedEleId)
    }
  }

  this.$target.addEventListener('drop', this.dropHandler)
  this.$target.addEventListener('dragover', this.dragoverHandler)

  this.$target.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const clickTodoId = e.target.parentElement.id
      this.onDeleteTodo(clickTodoId)
    }
  })

  this.$target.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      const clickTodoId = e.target.parentElement.parentElement.id
      this.onToggleTodo(clickTodoId)
    }
  })

  this.setState = ({ nextTodos }) => {
    this.todos = nextTodos
    this.render()
  }

  this.createListHTMLString = (todo) => {
    return `
      <li id="${todo._id}" draggable="true">
        <label>
          <input type="checkbox" ${todo.isCompleted ? 'checked' : ''}/>
          <span>${todo.content}</span>
        </label>
        <button title="할 일 삭제">삭제</button>
      </li>
    `
  }

  this.render = () => {
    this.$title.textContent = this.createTitleString()
    this.$list.innerHTML =
      this.todos.length === 0
        ? '<li>할 일 목록이 없습니다</li>'
        : this.todos.map((todo) => this.createListHTMLString(todo)).join('')
  }
}
