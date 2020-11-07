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
    const DELETE_BTN_HTML_STRING = '<button>삭제</button>'
    return `
      <li data-id=${index}>
        <label>
          <input type="checkbox" ${isCompleted ? 'checked' : ''}/>
          ${text}
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
    if (e.target.tagName === 'LABEL') {
      this.toggleTodo(e.target.parentNode.dataset.id)
    }
  })

  this.render()
}
