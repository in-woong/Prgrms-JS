import TodoListModule from './src/components/TodoListModule.js'

const todoListDay = document.querySelector('#todo-list-day')
const todoListWeek = document.querySelector('#todo-list-week')
const todoListMonth = document.querySelector('#todo-list-month')

TodoListModule({ domElement: todoListDay, dataId: 'todoListDay' })
TodoListModule({ domElement: todoListWeek, dataId: 'todoListWeek' })
TodoListModule({ domElement: todoListMonth, dataId: 'todoListMonth' })
