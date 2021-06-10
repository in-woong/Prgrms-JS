import TodoInput from './components/todoInput.js'
import TodoList from './components/TodoList.js'

let data = [
  {
    id: 1,
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const $app = document.querySelector('#app')

const todoList = new TodoList($app, data)
const todoInput = new TodoInput($app, todoList.addTodo)

todoList.render()
todoInput.render()
