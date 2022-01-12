import { $ } from '../utils/dom.js'
import { validateInstance } from '../utils/validation.js'

export default function TodoInput({ $target, addTodo, removeAllTodo }) {
  if (validateInstance(this, TodoInput)) return

  this.$target = $target
  this.addTodo = addTodo
  this.removeAllTodo = removeAllTodo

  this.render = () => {
    const formTemplate = `
      <h1>🦄 할 일 리스트 🦄</h1>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        class="todo-input"
        autofocus
      />
      <button type="submit" class="todo-add-button">추가</button>
      <button type="button" class="todo-remove-all-button">전체삭제</button>
    `
    this.$target.insertAdjacentHTML('afterbegin', formTemplate)
  }

  this.handleSubmit = (e) => {
    e.preventDefault()
    
    const newTodo = this.$input.value
    if(newTodo) {            // 공백 아닌 경우만 추가
      this.addTodo(newTodo)     
      this.$input.value = '' // 입력창 초기화
      this.$input.focus()  // 추가 후 입력창 포커스 지정
    }
  }

  this.handleFocus = () => {
    this.$input.focus()  // 추가 후 입력창 포커스 지정
  }

  this.loadEvents = () => {
    // 🚚이벤트 위임
    this.$target.addEventListener('submit', (e) => {
      this.handleSubmit(e)
    })

    this.$target.addEventListener('click', (e) => {
      if(e.target.classList.contains('todo-add-button')) {
        this.handleFocus()
      }
      if(e.target.classList.contains('todo-remove-all-button')) {
        this.removeAllTodo()
      }
    })

    this.$target.addEventListener('keydown', (e) => {  // 🗑Deprecated: keypress
      if(e.key === 'Enter') {
        this.handleFocus()
      }
    })
  }

  this.render()    // 인스턴스 생성 시 초기 렌더링
  this.$input = $('.todo-input')  // 렌더링 이후 생성되는 입력창
  this.loadEvents()   // 이벤트 바인딩
}

