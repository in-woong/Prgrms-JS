import TodoList from './TodoList.js'

const todoList = new TodoList({ target: document.getElementById('todo-list') })
const elInput = document.getElementById('input-todo')
elInput.addEventListener('keypress', (e) => {
  if (e.key !== 'Enter') return
  if (elInput.value.length === 0) return
  todoList.setState([
    ...todoList.state,
    { text: elInput.value, isCompleted: false },
  ])
  elInput.value = ''
})
