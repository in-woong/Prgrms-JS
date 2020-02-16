let data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const todoList = new TodoList(document.querySelector('#todo-list-1'), data)
const todoInput = new TodoInput(
  document.querySelector('#input-todo'),
  todoList,
  data
)
