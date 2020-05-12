import TodoList from './component/todo/TodoList.js'

const data = []

const todoList = document.querySelector('#todo-list')

const standardTodoList = new TodoList(todoList, data)

document.querySelector("#todo-add").addEventListener('click', function(){
  standardTodoList.addTodo(document.querySelector("#todo-input"))
})

