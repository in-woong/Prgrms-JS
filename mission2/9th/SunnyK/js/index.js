import App from './App.js'
import { checkValidElement } from './validation.js'
import data from './data.js'

new App({
  $todoListTarget: checkValidElement('todo-list'),
  $todoCountTarget: checkValidElement('todo-count'),
  $todoInputTarget: checkValidElement('todo-input'),
  todoData: data,
})
