import { checkTodos } from '../utils/validation.js'

export default function TodoList(props) {
  if (new.target !== TodoList) {
    throw new Error('Please use \'new\' keyword')
  }
  const { selector, todos } = props
  checkTodos(todos)
  this.todos = todos

  this.init = () => {
    const $target = document.querySelector(selector)
    this.$ul = document.createElement('ul')
    $target.appendChild(this.$ul)
    this.render()
  }

  this.render = () => {
    this.$ul.innerHTML = this.todos.map(({ _id, content, isCompleted }) => {
      return `<li data-id=${_id}>${isCompleted ? `<s>${content}</s>` : content}<button>삭제</button></li>`
    }).join('')
  }

  this.setState = (todos) => {
    checkTodos(todos)
    this.todos = todos
    this.render()
  }
  this.init()
}
