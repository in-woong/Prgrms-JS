import App from './App.js'

;(async function () {
  new App({
    $userList: document.querySelector('#user-list'),
    $todoName: document.querySelector('#todo-name'),
    $target: document.querySelector('#todo-list'),
    $todoInput: document.querySelector('#todo-input'),
    $addTodoButton: document.querySelector('#add-todo-button'),
    $loading: document.querySelector('#loading'),
  })
})()
