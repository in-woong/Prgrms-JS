import TodoList from './components/todoList.js'
var data = [
  {
    text: 'JS 공부하기',
  },
  {
    text: 'JS 복습하기',
  },
]

const $app = document.querySelector('#todo-app')
const todoList = new TodoList($app, data)

todoList.render()
