import { $, swapArrayElements, findIndex } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function TodoList({ target, onRemove, onToggle }) {
  this.init = () => {
    this.username = ''
    this.AllListData = []
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
   * TODO: 리팩토링, 모듈화 고민
   *
   * 변경된 순서를 api로 반영할 방법이 없어서, `새로고침`, `fetchTodoList한 데이터로 setState로 todoListdata 변경 시`, 다시 순서가 원래 순서로 돌아오는 한계가 있습니다.
   */
  this.onDrop = e => {
    if (
      e.target.className.includes('item-list') ||
      e.target.className.includes('todo-item')
    ) {
      e.preventDefault()
      const sourceId = e.dataTransfer.getData('text')
      const $sourceEl = document.getElementById(sourceId)
      const $sourceParentEl = $sourceEl.parentElement

      const $targetEl = document.getElementById(e.target.id)
      const $targetParentEl = $targetEl.parentElement

      // 아이템 위에 드랍하였는지 확인
      if ($targetEl.className === $sourceEl.className) {
        if ($targetParentEl.id === $sourceParentEl.id) {
          // 같은 리스트에 드랍한 경우
          const action = targetListData => {
            const sourceIndex = findIndex(targetListData, $sourceEl.id)
            const targetIndex = findIndex(targetListData, $targetEl.id)

            targetListData = swapArrayElements(
              targetListData,
              sourceIndex,
              targetIndex
            )

            return targetListData
          }

          const doAction = {
            'todo-list': () => (this.todoListData = action(this.todoListData)),
            'completed-list': () =>
              (this.completedListData = action(this.completedListData)),
          }

          doAction[$targetParentEl.id]()
        } else {
          //다른 리스트에 드랍한 경우
          onToggle($sourceEl.id)
        }
      } else {
        // 리스트에 드랍한 경우(아이템 밖)
        if ($targetEl.id === $sourceParentEl.id) {
          // 같은 리스트에 드랍한 경우
        } else {
          //다른 리스트에 드랍한 경우
          onToggle($sourceEl.id)
        }
      }

      this.render()
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
    this.AllListData = data.todoListData
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
