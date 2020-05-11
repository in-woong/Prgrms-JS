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

const standardTodoList = new TodoList('#todo-list', data)

document.querySelector("#todo-add").addEventListener('click', function(){
  standardTodoList.addTodo(document.querySelector("#todo-input"))
})

//  default App