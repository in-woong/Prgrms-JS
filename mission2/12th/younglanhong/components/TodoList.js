import { $ } from '../utils/dom.js'
import { validateInstance } from '../utils/validation.js'

export default function TodoList({ $target, initialState, removeTodo, checkTodo }) {
  if (validateInstance(this, TodoList)) return

  this.state = initialState
  this.$target = $target 
  this.removeTodo = removeTodo
  this.checkTodo = checkTodo
  
  this.setState = (nextState) => {
    this.state = nextState  
    this.render()
  }

  this.render = () => {
    const template = `
    <ul class='todo-list-items'>
      ${this.state && this.state
        .map(({ text, isCompleted }, index) => {
          return `
            <li data-todo-id=${index} class='todo-list-item'>
              <input type='checkbox' id='${text}' ${isCompleted && 'checked'} />
              <label for='${text}'>
                ${isCompleted ?`<s>${text}</s>`:text}
              </label>
              <span>
                <button type='button' class='todo-remove-button'>
                  삭제
                </button>
              </span>
            </li>
          `
        }).join('')
      }
    </ul>`
    this.$target.innerHTML = template
  }

  this.handleRemoveClick = (e) => {
    const todoId = Number(e.target.closest('li').dataset.todoId);
    if(confirm(`${this.state[todoId].text}를 삭제하시겠습니까?`)) {
      this.removeTodo(todoId)
    }
  }

  this.handleCheckToggle = (e) => {
    const todoId = Number(e.target.closest('li').dataset.todoId);
    this.checkTodo(todoId)
  }

  this.loadEvents = () => {
    // 🚚이벤트 위임
    this.$target.addEventListener('click', (e) => {
      if(e.target.classList.contains('todo-remove-button')) {
        this.handleRemoveClick(e)
      }
      if(e.target.type === 'checkbox') {
        this.handleCheckToggle(e)
      }
    })
  }
  this.render()  // 인스턴스 생성 시 초기 렌더링
  this.loadEvents()  // 이벤트 바인딩
}


