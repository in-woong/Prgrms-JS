import { createElementWithClass } from '../util/util.js'

export default function TodoInput({
  $parent,
  isShowComp,
  onAddTodo,
  onDeleteAllTodo,
}) {
  this.$target = createElementWithClass({
    tagName: 'div',
    className: 'TodoInput',
  })
  $parent.appendChild(this.$target)

  this.isShowComp = isShowComp
  this.onDeleteAllTodo = onDeleteAllTodo

  this.toggleShowHideComp = () => {
    this.$target.style.display = this.isShowComp ? 'flex' : 'none'
  }

  this.onAddTodo = ($todoInput) => {
    if ($todoInput.value !== '') {
      onAddTodo($todoInput.value)
      $todoInput.value = ''
      $todoInput.focus()
    } else {
      alert('할 일을 입력해주세요!')
    }
  }

  this.$target.addEventListener('keyup', (e) => {
    if (e.target.className === 'todo-text-input' && e.key === 'Enter') {
      this.onAddTodo(e.target)
    }
  })

  this.$target.addEventListener('click', (e) => {
    if (e.target.className === 'add-todo-btn') {
      const $todoInput = e.target.previousElementSibling
      this.onAddTodo($todoInput)
    }
  })

  this.$target.addEventListener('click', (e) => {
    if (e.target.className === 'delete-all-todo-btn') {
      this.onDeleteAllTodo()
    }
  })

  this.setState = (nextIsShowComp) => {
    this.isShowComp = nextIsShowComp
    this.toggleShowHideComp()
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `
      <input class="todo-text-input" type="text" title="할 일 입력" placeholder="할 일을 입력하세요" />
      <button class="add-todo-btn" title="할 일 추가">+</button>
      <button class="delete-all-todo-btn" title="할 일 전체 삭제">전체 삭제</button>`
  }

  this.toggleShowHideComp()
}
