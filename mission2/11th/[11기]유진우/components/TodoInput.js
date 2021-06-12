import generateUniqueID from '../utils/generateUniqueID.js'

function TodoInput({ $app, addTodo }) {
  this.$inputWrapper = document.createElement('div')

  $app.appendChild(this.$inputWrapper)

  this.render = () => {
    this.$inputWrapper.innerHTML = `
      <input class="todo-input" type="text" />
      <button class="todo-btn">Enter</button>
      <button class="todo-remove-all">Remove All</button>
    `

    const todoInput = document.querySelector('.todo-input')
    todoInput.focus()
    todoInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && e.target.value) {
        addTodo({ id: generateUniqueID(), text: e.target.value.trim(), isCompleted: false })
        e.target.value = ''
      }
    })

    const todoBtn = document.querySelector('.todo-btn')
    todoBtn.addEventListener('click', () => {
      if (todoInput.value) {
        addTodo({ id: generateUniqueID(), text: todoInput.value.trim(), isCompleted: false })
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
