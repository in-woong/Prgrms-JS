import { validateNewData } from '../utils/validation.js'

function TodoInput({ $app, onAddTodo, removeAll }) {
  this.$target = document.createElement('form')
  this.$target.className = 'todo__form'
  $app.appendChild(this.$target)

  this.render = function () {
    this.$target.innerHTML = `
      <input class="todo__input" type="text" name="todo input" maxlength="40" />
      <button class="todo__input-button" type="submit">추가</button>
      <button class="remove__todo__all-button" type="button">리셋</button>
    `
  }
  this.render()

  this.$todoInput = document.querySelector('.todo__input')

  this.onAddTodo = onAddTodo
  this.onSubmit = (e) => {
    try {
      e.preventDefault()
      validateNewData(this.$todoInput.value)
      this.onAddTodo(this.$todoInput.value)
      this.$target.reset()
      this.$todoInput.focus()
    } catch (err) {
      alert(err.message)
      console.error(err)
    }
  }

  this.$target.addEventListener('submit', this.onSubmit)

  this.$removeAllBtn = document.querySelector('.remove__todo__all-button')
  this.removeAll = removeAll
  this.removeAllEvent = new CustomEvent('removeAll')

  this.removeAllDispatcher = () => {
    this.$removeAllBtn.dispatchEvent(this.removeAllEvent)
  }

  this.onRemoveAll = () => {
    try {
      this.removeAll()
      this.$target.reset()
      this.$todoInput.focus()
      alert('할 일 목록이 초기화 되었습니다.')
    } catch (err) {
      alert(err.message)
      console.err(err)
    }
  }

  this.$removeAllBtn.addEventListener('removeAll', this.onRemoveAll)
  this.$removeAllBtn.addEventListener('click', this.removeAllDispatcher)
}

export default TodoInput
