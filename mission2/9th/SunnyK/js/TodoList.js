import { useNewKeyword } from './validation.js'

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
export default function TodoList({
  $app,
  todoData,
  onToggleTodo,
  onDeleteTodo,
}) {
  useNewKeyword(new.target)

  const $target = document.createElement('div')
  $target.className = 'TodoList'
  this.$target = $target
  $app.appendChild($target)

  this.todoData = todoData
  this.$target = $target
  this.onToggleTodo = onToggleTodo
  this.onDeleteTodo = onDeleteTodo

  this.setState = (nextData) => {
    this.todoData = nextData
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

  $target.addEventListener('click', (e) => {
    if (e.target.className === TODOLIST_CALSS_NAMES.todoDeleteBtn) {
      this.onDeleteTodo(e.target.parentNode.dataset.id)
    }

    if (e.target.className === TODOLIST_CALSS_NAMES.todoCheckbox) {
      this.onToggleTodo(e.target.parentNode.parentNode.dataset.id)
    }
  })

  this.render()
}
