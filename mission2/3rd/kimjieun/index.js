import App from './App.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js';

import data from './dummyData.js'

(function() {
  const app = new App({
    todoList: new TodoList({
      $selector: document.querySelector("#todo-list")
    }),
    todoInput: new TodoInput({
      $selector: document.querySelector("#todo-input")
    }),
    todoCount: new TodoCount({
      $selector: document.querySelector("#todo-count")
    }),
    data
  })
})()
