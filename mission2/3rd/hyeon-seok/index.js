import App from './src/App.js'
import Model from './src/model/index.js'

import { $ } from './src/util/index.js'
import { mockTodoData } from './src/data/index.js'

window.onload = function() {
  const $wrapper = $('#todo-list')

  const todoList = new App({
    $wrapper: $wrapper,
    initData: mockTodoData,
    ProxyModel: Model,
  })
}
