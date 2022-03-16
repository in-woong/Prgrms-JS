function TodoInput($element, addTodo) {
  if (!$element) throw new Error('Element Invalid!')

  this._inputId = 'todo-input-box'

  this.render = () => {
    $element.innerHTML = `
    <span>Todo List 추가</span>
    <input type="text" id=${this._inputId} />
    <button onclick="customEventDispatch()">모두 삭제</button>
    `
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

      addTodo({ text: event.target.value, isCompleted: false })

      event.target.value = ''
    })

  this.event = new Event('removeAll', { bubbles: true })
  window.customEventDispatch = () => {
    $element.dispatchEvent(this.event)
  }
}

export default TodoInput
