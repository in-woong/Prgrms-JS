let todoData = [
  {
    id: 1,
    text: '방 청소하기',
    isCompleted: false,
  },
  {
    id: 2,
    text: '치과 예약하기',
    isCompleted: true,
  },
]

// 인스턴스 생성 및 render
const todoList = new TodoList({ data: todoData, tagID: 'todo' })
// Todo 추가
const $insertForm = document.querySelector('#insert-form')
const $insertInput = document.querySelector('#insert-form input')
function insertTodo(event) {
  event.preventDefault()
  todoList.todos.push({
    id: todoList.todos[todoList.todos.length - 1].id + 1,
    text: $insertInput.value,
    isCompleted: false,
  })
  $insertInput.value = ''
  $insertInput.focus()
  todoList.setState(todoList.todos)
}
$insertForm.addEventListener('submit', insertTodo)
