import App from './src/App.js'
import { mockTodoData } from './src/data/index.js'
import { $ } from './src/util/index.js'

window.onload = function() {
  const todoList = new App({
    wrapperElement: $('#todo-list'),
    todoData: mockTodoData,
  })

  todoList.render()
}
