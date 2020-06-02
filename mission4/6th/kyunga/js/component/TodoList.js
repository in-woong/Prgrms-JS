import { validateData, validateInstance } from '../validator.js'

export default function TodoList({ target, data, onRemove, onToggle }) {
  validateInstance(this, TodoList)

  this.data = data || []
  const $todoListWrap = target

  // 미완료 목록
  const $todoTitle = document.createElement('h2')
  $todoTitle.textContent = '미완료'
  const $todoList = document.createElement('div')

  $todoListWrap.appendChild($todoTitle)
  $todoListWrap.appendChild($todoList)

  // 완료 목록
  const $completedTitle = document.createElement('h2')
  $completedTitle.textContent = '완료'
  const $completedList = document.createElement('div')

  $todoListWrap.appendChild($completedTitle)
  $todoListWrap.appendChild($completedList)

  // 클릭 이벤트
  $todoListWrap.addEventListener('click', e => {
    const target = e.target
    const id = target.closest('li').dataset.id

    // 할 일 텍스트 클릭하여 완료
    if (target.closest('.text')) {
      onToggle(id)
    }

    // 할 일 삭제
    if (target.closest('.button-delete')) {
      onRemove(id)
    }
  })

  // 드래그 시작할 때
  $todoListWrap.addEventListener('dragstart', e => {
    const dragElementType = e.target.parentNode.classList.contains('is_completed') ? 'completed' : 'notCompleted'

    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('id', e.target.dataset.id)
    e.dataTransfer.setData('type', dragElementType)
  })

  // 적합한 드롭 대상 위로 지나갈 때
  $todoListWrap.addEventListener('dragover', e => {
    e.target.classList.add('over')
    e.preventDefault()
  })

  // 적합한 드롭 대상 위를 벗어났을 때
  $todoListWrap.addEventListener('dragleave', e => {
    e.target.classList.remove('over')
  })

  // 적합한 드롭 대상 위에 드롭 했을 때
  $todoListWrap.addEventListener('drop', e => {
    const dragElementId = e.dataTransfer.getData('id')

    const dragElementType = e.dataTransfer.getData('type')
    const dropElementType = e.target.parentNode.classList.contains('is_completed') ? 'completed' : 'notCompleted'

    if ((e.target.closest('.todos li') === null || (e.target.tagName === 'LI') && (dragElementType !== dropElementType))) {
      onToggle(dragElementId)
    }

    e.target.classList.remove('over')
    e.preventDefault()
  })

  this.getTodoHtml = function (data) {
    return data.reduce((acc, {content, isCompleted, _id}) => (
      `${acc}<li data-id="${_id}" draggable="true"><span class="text">${isCompleted ? `<s>${content}</s>` : content}</span><button type="button" class="button-delete">Remove</button></li>`
    ), '')
  }

  this.render = function () {
    const todoArray = this.data.filter(({isCompleted}) => !isCompleted)
    const completedArray = this.data.filter(({isCompleted}) => isCompleted)

    $todoList.innerHTML = `<ul class="todos">${this.getTodoHtml(todoArray)}</ul>`
    $completedList.innerHTML = `<ul class="todos is_completed">${this.getTodoHtml(completedArray)}</ul>`
  }

  this.setState = function (nextData) {
    this.data = validateData(nextData) && nextData
    this.render()
  }
}
