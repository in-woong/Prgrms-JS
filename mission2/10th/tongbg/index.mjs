import TodoApp from './asset/js/TodoApp.js'

// localStorage.setItem(
//   'todoData',
//   JSON.stringify([
//     {
//       text: 'JS 공부하기',
//       isCompleted: true,
//     },
//     {
//       text: 'JS 복습하기',
//       isCompleted: false,
//     },
//   ])
// )
//localStorage.clear()
const todoData = JSON.parse(localStorage.getItem('todoData'))

new TodoApp(todoData, document.querySelector('#todo-list'), document.querySelector('#todo-input'), document.querySelector('#todo-count'), document.querySelector('#todo-removeAll'))
