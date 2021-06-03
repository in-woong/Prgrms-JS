import TodoApp from './components/todoApp.js'

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

const $app = document.querySelector('#app')
const todoApp = new TodoApp($app, data)

todoApp.render()
