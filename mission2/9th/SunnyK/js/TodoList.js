import { useNewKeyword } from './Validation.js'

/**
 * TodoList 컴포넌트
 * @param {Array} todoData
 * @param {String} targetId
 */
export default function TodoList({ todoData, $target }) {
  useNewKeyword(this)

  this.todoData = todoData
  this.$target = $target

  this.setState = ({ nextData, $target }) => {
    this.todoData = nextData
    if ($target) this.$target = $target
    this.render()
  }

  this.createTodoHTMLString = ({ text, isCompleted }, index) => {
    const DELETE_BTN_HTML_STRING = '<button class="todo-delete-btn">X</button>'
    return `
      <li data-id=${index}>
        <label class="todo-label">
          <input class="todo-checkbox" type="checkbox" ${
            isCompleted ? 'checked' : ''
          }/>
          <span class="todo-text">${text}</span>
        </label>
        
        ${DELETE_BTN_HTML_STRING}
      </li>
    `
  }

  this.render = () => {
    this.$target.innerHTML = `
      <ul>
        ${this.todoData.map(this.createTodoHTMLString).join('')}
      </ul>
    `
  }

  this.deleteTodoEvent = $target.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      this.deleteTodo(e.target.parentNode.dataset.id)
    }
  })

  this.toggleTodoEvent = $target.addEventListener('click', (e) => {
    if (
      e.target.className === ('todo-label' && 'todo-text' && 'todo-checkbox')
    ) {
      // Internet Explorer는 closest() 지원 안함
      this.toggleTodo(e.target.closest('li').dataset.id)
    }
  })

  this.render()
}
