import TodoApp from './TodoApp.js'

new TodoApp(document.querySelector('#TodoApp'))





// let todoListComponent = new todoList(data, document.querySelector('#todo-item'))

// const addTodoItem = () => {
//   todoItemInput = document.querySelector('#todo-add-text')
//   todoItemInputText = todoItemInput.value
//   if (todoItemInputText) {
//     data.push({
//       text: todoItemInputText,
//       isCompleted: false
//     })
//   }
//   todoListComponent.setState(data)
//   todoItemInput.value = ''
// }
// document.querySelector('#todo-add-button').addEventListener('click', addTodoItem)

// new todoList(data2, document.querySelector('#todo-list-2'))
// new todoList(data3, document.querySelector('#todo-list-3'))

// testcase
// todoList(data)
// new todoList([1,2,3,4])
// new todoList(null)

// setTimeout(() => {
//   todoListComponent.setState([
//     {
//       text: 'ReasonML',
//       isCompleted: false,
//     },
//     {
//       text: 'lerna',
//       isCompleted: false,
//     },
//   ])
// }, 3000)
