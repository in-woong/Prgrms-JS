import TodoApp from './TodoApp.js'

const todoApp = new TodoApp('todoData', {
  $containerEl: document.querySelector('#todo-container'),
  $listEl: document.querySelector('#todo-list'),
  $inputEl: document.querySelector('#todo-input'),
  $submitEl: document.querySelector('#todo-submit'),
  $countEl: document.querySelector('#todo-count'),
  $clearEl: document.querySelector('#todo-clear'),
})

const homeworkApp = new TodoApp('homeworkData', {
  $containerEl: document.querySelector('#homework-container'),
  $listEl: document.querySelector('#homework-list'),
  $inputEl: document.querySelector('#homework-input'),
  $submitEl: document.querySelector('#homework-submit'),
  $countEl: document.querySelector('#homework-count'),
  $clearEl: document.querySelector('#homework-clear'),
})

const wishApp = new TodoApp('wishData', {
  $containerEl: document.querySelector('#wish-container'),
  $listEl: document.querySelector('#wish-list'),
  $inputEl: document.querySelector('#wish-input'),
  $submitEl: document.querySelector('#wish-submit'),
  $countEl: document.querySelector('#wish-count'),
  $clearEl: document.querySelector('#wish-clear'),
})
