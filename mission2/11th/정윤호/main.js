import TodoApp from './components/todoApp.js'
import { $ } from './utils/dom.js'

const todoApp = new TodoApp($('#app'))

todoApp.render()
