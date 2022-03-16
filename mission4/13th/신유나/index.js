import { $ } from './utils/$.js'
import TodoApp from './components/TodoApp.js'

document.addEventListener('DOMContentLoaded', () => {
  new TodoApp($('#app'))
})
