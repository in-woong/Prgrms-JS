import { validateString } from './validator.js'

export default function TodoInput({
  $target,
  currentUser,
  onAddTodo,
  onResetTodo,
}) {
  this.$target = $target
  this.currentUser = currentUser
  this.$todoForm = document.createElement('form')
  this.$target.append(this.$todoForm)

  const onSubmit = (e) => {
    e.preventDefault()
    const $todoInput = this.$todoForm.querySelector('#todo-input')
    if ($todoInput.value === '') {
      alert('값을 입력해주세요.')
      return
    }
    onAddTodo($todoInput.value)
    $todoInput.value = ''
  }

  const onClickRemoveAll = () => {
    onResetTodo()
  }
  this.setState = (nextData) => {
    validateString(nextData)
    this.currentUser = nextData
    this.render()
  }

  this.render = () => {
    if (!this.currentUser) {
      this.$todoForm.innerHTML = ''
      return
    }
    this.$todoForm.innerHTML = `<input id="todo-input" type="text"/><input type="submit" value="추가"><button class="remove-all" type="button">전체 삭제</button>`
    this.$todoForm
      .querySelector('.remove-all')
      .addEventListener('click', onClickRemoveAll)
    this.$todoForm.addEventListener('submit', onSubmit)
  }

  this.render()
}
