var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)
