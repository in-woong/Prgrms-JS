import { useNewKeyword } from './Validation.js'

const TODOLIST_CALSS_NAMES = {
  todoDeleteBtn: 'todo-delete-btn',
  todoLabel: 'todo-label',
  todoCheckbox: 'todo-checkbox',
  todoText: 'todo-text',
}

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
    return `
      <li data-id=${index}>
        <label class="${TODOLIST_CALSS_NAMES.todoLabel}">
          <input class="${TODOLIST_CALSS_NAMES.todoCheckbox}" 
            type="checkbox" ${isCompleted ? 'checked' : ''}/>
          <span class="${TODOLIST_CALSS_NAMES.todoText}">${text}</span>
        </label>
        
        <button class="${TODOLIST_CALSS_NAMES.todoDeleteBtn}">X</button>
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
    if (e.target.className === TODOLIST_CALSS_NAMES.todoDeleteBtn) {
      this.deleteTodo(e.target.parentNode.dataset.id)
    }
  })

  this.toggleTodoEvent = $target.addEventListener('click', (e) => {
    if (
      e.target.className ===
      (TODOLIST_CALSS_NAMES.todoLabel &&
        TODOLIST_CALSS_NAMES.todoText &&
        TODOLIST_CALSS_NAMES.todoCheckbox)
    ) {
      // Internet Explorer는 closest() 지원 안함
      this.toggleTodo(e.target.closest('li').dataset.id)
    }
  })

  this.render()
}
