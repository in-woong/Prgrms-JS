import TodoList from './component/todo/TodoList.js'

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  }
]

const todoList = document.querySelector('#todo-list')

const standardTodoList = new TodoList(todoList, data)

