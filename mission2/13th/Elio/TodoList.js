import { validateInstance, validateData } from './validation.js'

function TodoList({ $app, state, removeTodo, toggleTodo }) {
  validateInstance(this, TodoList)
  validateData(state)
  this.state = state

  this.$todoList = document.createElement('ul')
  $app.appendChild(this.$todoList)

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    // innerHTML 사용
    this.$todoList.innerHTML = `
    ${this.state
      .map(
        (todo, index) =>
          `<li index=${index}>
          <span class='todo-text'>
            ${todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`}
          </span><button class='remove-btn'>X</button>
        </li>`
      )
      .join('')}
     `
  }

  this.setEvent = () => {
    // Event delegate
    this.$todoList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        removeTodo(Number(e.target.parentNode.getAttribute('index')))
      }
      if (
        e.target.classList.contains('todo-text') ||
        e.target.parentNode.classList.contains('todo-text')
      ) {
        toggleTodo(Number(e.target.closest('li').getAttribute('index')))
      }
    })
  }

  this.setEvent()
  this.render()
}

export default TodoList
