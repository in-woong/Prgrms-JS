import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function TodoList({ target, onRemove, onToggle }) {
  this.init = () => {
    this.$element = $(target)
    this.username = ''
    this.todoListData = []
    this.completedListData = []

    this.validate(this.$element)
    this.bindEvents()
    this.render()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.bindEvents = () => {
    this.$element.addEventListener('click', e => this.onClick(e))
    this.$element.addEventListener('dragstart', e => this.onDragStart(e))
    this.$element.addEventListener('drop', e => this.onDrop(e)) // drop했을때 콜백함수
    this.$element.addEventListener('dragover', e => this.onDragover(e)) // 드래그 대상에게 요소가 drop 됐을 때 콜백함수
  }

  this.onClick = e => {
    const id = e.target.getAttribute('data-id')
    if (e.target.className === 'remove-button') {
      onRemove(id)
    }
  }

  /**
   * 현재 미니 트렐로 구현중
   * TODO: 미니 트렐로 구현이 완료되면 리팩토링하기
   */
  this.onDragStart = e => {
    if (e.target.className.includes('todo-item')) {
      e.dataTransfer.setData('text', e.target.getAttribute('data-id'))
    }
  }

  this.onDrop = e => {
    if (e.target.className.includes('todo-list')) {
      e.preventDefault()
      const id = e.dataTransfer.getData('text')
      const el = $(`[data-id="${id}"]`)
      onToggle(id)
      e.target.appendChild(el)
    }
  }

  this.onDragover = e => {
    if (e.target.className.includes('todo-list')) {
      e.preventDefault() // 드래그 앤 드랍시 발생하는 기본이벤트가 있다. 그 이벤트를 방지한다.
    }
  }

  this.setState = data => {
    this.username = data.username
    this.todoListData = data.todoListData.filter(
      todoItem => !todoItem.isCompleted
    )
    this.completedListData = data.todoListData.filter(
      todoItem => todoItem.isCompleted
    )
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `<h1 class="todo-list-title">${
      this.username
    }님의 TODO 리스트</h1>
    <h2>TODO</h2>
    <ul class="todo-list">${this.todoListData
      .map(
        todoItem =>
          `<li class="todo-item list-item" data-id=${todoItem._id} draggable="true" >${todoItem.content}<button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
      )
      .join('')}</ul>
      <h2>DONE</h2>
      <ul class="todo-list completed-list">${this.completedListData
        .map(
          todoItem =>
            `<li class="todo-item list-item" data-id=${todoItem._id} draggable="true" >${todoItem.content}<button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
        )
        .join('')}</ul>`
  }

  this.init()
}

export default TodoList
