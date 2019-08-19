import App from './src/App.js'
import { mockTodoData } from './src/data/index.js'
import { $ } from './src/util/index.js'
import Model from './src/model/index.js'

window.onload = function() {
  const $wrapperElement = $('#todo-list')

  const todoList = new App({
    wrapperElement: $wrapperElement,
    initData: mockTodoData,
    ProxyModel: Model,
  })
}
