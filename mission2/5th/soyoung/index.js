const $todolist = document.querySelector('#todo-list')
const $todoAdd = document.querySelector('#todo-add')
const $todoInput = document.querySelector('#todo-input')
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
const todoList = new TodoList($todolist, data)

$todoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    todoList.addItem($todoInput.value)
    $todoInput.value = ''
  }
})
$todoAdd.addEventListener('click', () => {
  todoList.addItem($todoInput.value)
  $todoInput.value = ''
})
