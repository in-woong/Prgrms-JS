import generateUniqueID from '../utils/generateUniqueID.js'

function TodoInput({ $app, addTodo }) {
  this.$inputWrapper = document.createElement('div')

  $app.appendChild(this.$inputWrapper)

  this.render = () => {
    this.$inputWrapper.innerHTML = `
      <form id="todo-form">
        <input autofocus class="todo-input" type="text" />
        <button class="todo-btn" type="submit">Enter</button>
      </form>
      <button class="todo-remove-all">Remove All</button>
    `

    const todoInput = document.querySelector('.todo-input')
    todoInput.focus()

    const todoForm = document.querySelector('#todo-form')
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const inputValue = todoInput.value
      if (inputValue.trim()) {
        addTodo({ id: generateUniqueID(), text: todoInput.value, isCompleted: false })
        todoInput.value = ''
      }
    })

    const todoRemoveAllBtn = document.querySelector('.todo-remove-all')
    todoRemoveAllBtn.addEventListener('click', () => {
      const removeAllEvent = new Event('removeAll')
      $app.dispatchEvent(removeAllEvent)
    })
  }
}

export default TodoInput
