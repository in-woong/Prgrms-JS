import TodoList from './TodoList.js'

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

const todoList = new TodoList(document.querySelector('#todo-list'), data)

document.querySelector('#todo-input').addEventListener("submit", (event) => {
  event.preventDefault()

  const $input = event.target.querySelector('.todo-input-text')
  const text = $input.value

  // text validation 추가 필요
  if(!text) {
    alert('할 일을 입력하세요')
    return
  }

  todoList.addTodoItem(text)

  // reset
  $input.value = ''
  $input.focus()
})
