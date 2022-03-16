import { validateInstance, validateData } from '../utils/validation.js'

function TodoList({ $target, state, removeTodo, toggleTodo }) {
  if (validateInstance(this, TodoList)) return
  validateData(state.todos)
  this.state = state
  this.isLoading = false

  this.$todoList = document.createElement('div')
  $target.appendChild(this.$todoList)

  this.setisLoading = (isLoadingState) => {
    this.isLoading = isLoadingState
    this.render()
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.$todoList.innerHTML = this.isLoading
      ? `<div class="loader"></div>`
      : `
    <ul>
    ${this.state.todos
      .map(
        (todo) =>
          `<li id=${todo._id}>
          <span class='todo-text'>
            ${todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`}
          </span><button class='remove-btn'>X</button>
        </li>`
      )
      .join('')}
      </ul>
     `
  }

  this.setEvent = () => {
    // Event delegate
    this.$todoList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        removeTodo(e.target.parentNode.getAttribute('id'))
      }
      if (
        e.target.classList.contains('todo-text') ||
        e.target.parentNode.classList.contains('todo-text')
      ) {
        toggleTodo(e.target.closest('li').getAttribute('id'))
      }
    })
  }

  this.setEvent()
  this.render()
}

export default TodoList
