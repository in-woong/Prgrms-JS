var data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: true,
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)

// Mission2
const $inputTodoText = document.querySelector('#todo-input-text')
const $addTodoButton = document.querySelector('#todo-add-button')

$addTodoButton.addEventListener('click', () => {
  addNewTodoItem()
})
$inputTodoText.addEventListener('keydown', (event) => {
  if(event.keyCode === 13) {
    addNewTodoItem()
  }
})

function addNewTodoItem() {
  todoList.addTodoItem({ todoText: $inputTodoText.value })
  $inputTodoText.value = ''
}
