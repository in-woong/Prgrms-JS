import { todoValidate } from '../utils/Validation.js'
import ErrorMessage from '../utils/ErrorMessage.js'

function TodoList({ $target, state, onToggleTodo, onDeleteTodo }) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }

  todoValidate(state.todos)

  this.$target = $target
  this.$todoListUl = document.createElement('ul')
  this.$todoListUl.setAttribute('data-component-type', 'TodoUl')
  this.$todoListUl.classList.add('todoUl')
  this.$target.appendChild(this.$todoListUl)

  this.onToggleTodo = onToggleTodo
  this.onDeleteTodo = onDeleteTodo

  this.state = state

  this.todoClickHandler = (e) => {
    const { classList } = e.target

    if (classList.contains('toggle')) {
      this.onToggleTodo(e.target.closest('li').id)
    }

    if (classList.contains('remove')) {
      this.onDeleteTodo(e.target.closest('li').id)
    }
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString =
      this.state.todos.length < 1
        ? `<li>할 일을 입력하세요!</li>`
        : this.state.todos
            .map(
              (todo) => `<li id=${todo._id} class="complete_${todo.isCompleted}">
              <span class="toggle">${todo.content}</span>
              <span class="remove">X</span>
              </li>`
            )
            .join('')
    this.$todoListUl.innerHTML = htmlString
  }

  this.render()

  this.$todoListUl.addEventListener('click', (e) => {
    this.todoClickHandler(e)
  })
}

export default TodoList
