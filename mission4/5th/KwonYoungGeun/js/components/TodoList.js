import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function TodoList({ target, onRemove, onToggle }) {
  this.init = () => {
    this.username = ''
    this.todoListData = []
    this.completedListData = []
    this.$element = $(target)

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
      e.dataTransfer.setData('text', e.target.id)
    }
  }

  /**
   * FIXME: 사용자가 드랍한 부분에 따라 사소하게 분기 판단 대상이 바뀌는데, 이 때문에 중복이 많아졌다. 중복 제거하기
   * TODO: 리팩토링 하기, 모듈화 고민하기
   * 사용자가 아이템 위에 드랍하는지, 리스트 안에 드랍하는지에 따라 동일 리스트에 드랍하였는지 판단하는 분기 판단 대상이 달라진다.
   * 아이템 위 드랍 -> targetParent === sourceParent
   * 아이템 밖 드랍 -> target === sourceParent
   */
  this.onDrop = e => {
    if (
      e.target.className.includes('item-list') ||
      e.target.className.includes('todo-item')
    ) {
      /* e.preventDefault()
      const id = e.dataTransfer.getData('text')
      const el = $(`[data-id="${id}"]`)
      onToggle(id)
      e.target.appendChild(el) */

      e.preventDefault()
      const sourceId = e.dataTransfer.getData('text')
      const $sourceEl = document.getElementById(sourceId) // querySelector는 digit으로 시작하는 id는 가져오지 못한다.
      const $sourceParentEl = $sourceEl.parentElement

      const $targetEl = document.getElementById(e.target.id)
      const $targetParentEl = $targetEl.parentElement

      // 아이템 위에 드랍하였는지 확인
      if ($targetEl.className === $sourceEl.className) {
        console.log('아이템 위')
        // 같은 리스트에 드랍했는지 확인
        if ($targetParentEl.id === $sourceParentEl.id) {
          console.log('같은 리스트')
          // 같은 리스트에 드랍한 경우
        } else {
          console.log('다른 리스트')
          //다른 리스트에 드랍한 경우
        }
      } else {
        // 리스트에 드랍한 경우(아이템 밖)
        console.log('아이템 밖 드랍')

        // 같은 리스트에 드랍했는지 확인
        if ($targetEl.id === $sourceParentEl.id) {
          // 같은 리스트에 드랍한 경우
          console.log('같은 리스트')
        } else {
          //다른 리스트에 드랍한 경우
          console.log('다른 리스트')
        }
      }
    }
  }

  this.onDragover = e => {
    if (
      e.target.className.includes('item-list') ||
      e.target.className.includes('todo-item')
    ) {
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
    <ul class="item-list" id="todo-list">${this.todoListData
      .map(
        todoItem =>
          `<li class="todo-item list-item" id=${todoItem._id} draggable="true" >${todoItem.content}<button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
      )
      .join('')}</ul>
      <h2>DONE</h2>
      <ul class="item-list" id="completed-list">${this.completedListData
        .map(
          todoItem =>
            `<li class="todo-item list-item" id=${todoItem._id} draggable="true" >${todoItem.content}<button class="remove-button" data-id=${todoItem._id}>삭제</button></li>`
        )
        .join('')}</ul>`
  }

  this.init()
}

export default TodoList
