import { validateData, validateInstance } from '../validator.js'

export default function TodoList(data, {onRemove, onToggle}) {
  validateInstance(this, TodoList)

  this.data = data || []
  const $todoList = document.querySelector('#todo-list')


  $todoList.addEventListener('click', e => {
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

  this.getTodoHtml = function () {
    return this.data.reduce((acc, {content, isCompleted, _id}) => (
        `${acc}<li data-id="${_id}"><span class="text">${isCompleted ? `<s>${content}</s>` : content}</span><button type="button" class="button-delete">Remove</button></li>`
    ), '')
  }

  this.render = function () {
    $todoList.innerHTML = `<ul class="todos">${this.getTodoHtml()}</ul>`
  }

  this.setState = function (nextData) {
    this.data = validateData(nextData) && nextData
    this.render()
  }
}