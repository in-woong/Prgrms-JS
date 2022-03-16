function TodoInput($element, addTodo) {
  if (!$element) throw new Error('Element Invalid!')

  this._inputId = 'todo-input-box'

  this.render = () => {
    $element.innerHTML = `
    <form>
      <label>Todo List 추가
        <input type="text" id=${this._inputId} placeholder="할 일을 입력해주세요">
        <button onclick="customEventDispatch()">모두 삭제</button>
      </label>
    </form>`
  }
  this.render()
  document.getElementById(this._inputId).focus()

  document
    .getElementById(this._inputId)
    .addEventListener('keypress', (event) => {
      if (event?.key !== 'Enter') return
      if (!event?.target?.value) {
        alert('할일을 입력해주세요!')
        return
      }
      event.preventDefault()
      addTodo(event.target.value)
      event.target.value = ''
    })

  this.event = new Event('removeAll', { bubbles: true })
  window.customEventDispatch = () => {
    event.preventDefault()
    $element.dispatchEvent(this.event)
  }
}

export default TodoInput
