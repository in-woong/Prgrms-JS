import TodoList from './components/todoList.js'

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const $app = document.querySelector('#todo-app')
const todoList = new TodoList($app, data)

todoList.render()
