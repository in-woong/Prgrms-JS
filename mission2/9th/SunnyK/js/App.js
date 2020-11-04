import TodoList from './TodoList.js'
import { data } from './data.js'

const todoList = new TodoList(data, 'todo-list')

document.querySelector('#todo-text-input').addEventListener('keypress', (e) => {
  const ENTER_KEY_CODE = 13
  if (e.keyCode === ENTER_KEY_CODE) addTodo(e.target)
})

document
  .querySelector('#todo-input-btn')
  .addEventListener('click', (e) =>
    addTodo(document.querySelector('#todo-text-input'))
  )

function addTodo($todoTextInput) {
  todoList.setState([
    ...todoList.data,
    {
      text: $todoTextInput.value,
      isCompleted: false,
    },
  ])

  $todoTextInput.value = ''
  $todoTextInput.focus()
}
