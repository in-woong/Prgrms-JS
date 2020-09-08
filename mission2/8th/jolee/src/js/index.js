var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const todoList = new TodoList(data, document.querySelector('#todo-list'))

// Mission2 필수구현
const todoItemInput = document.querySelector('#todo-input')
const todoItemAddButton = document.querySelector('#todo-add-button')
const todoItemDeleteButton = document.querySelectorAll('.todo-delete-button')
const todoItem = document.querySelectorAll('.todo-item')

todoItemAddButton.addEventListener('click', () => {
  addNewTodoItem(todoList)
})
todoItemDeleteButton.forEach((item) => {
  item.addEventListener('click', () => {
    deleteTodoItem(todoList, item.closest('li').getAttribute('key'))
  })
})

todoItem.forEach((item) => {
  item.addEventListener('click', () => {
    changeStatus(todoList, item.closest('li').getAttribute('key'))
  })
})
