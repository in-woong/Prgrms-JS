import App from './src/components/App.js'

const todoListDay = document.querySelector('#todo-list-day')
const todoListWeek = document.querySelector('#todo-list-week')
const todoListMonth = document.querySelector('#todo-list-month')

App({ domElement: todoListDay })
App({ domElement: todoListWeek })
App({ domElement: todoListMonth })
