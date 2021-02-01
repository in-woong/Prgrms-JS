var data = [
  {
    id:1,
    text: 'JS 공부하기',
    isCompleted: true,
    visible:true,
  },
  {
    id:2,
    text: 'JS 복습하기',
    isCompleted: false,
    visible:true,
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)

const $createTarget = document.querySelector('#create-todo')
const createTodoList = new CreateTodo($createTarget, 'create-todo')

let inputValue  //입력창

