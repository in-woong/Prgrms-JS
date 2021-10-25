import TodoList from './TodoList.js'

let todos = [
  {
    text: 'todo text',
    isCompleted: false,
  },
]

const todoListOne = new TodoList({
  selector: '#todo-list-one',
  data: todos,
})

const input = document.querySelector('#inputBox input')
const button = document.querySelector('#inputBox button')

const focusInput = () => {
  input.focus()
}

const addTodo = () => {
  if (input.value === '') {
    alert('할일을 입력해주세요 ! ')
    focusInput()
    return
  }

  const newTodo = {
    text: input.value,
    isCompleted: false,
  }

  todos = [newTodo, ...todos]

  todoListOne.setState(todos)

  input.value = ''

  focusInput()
}

input.addEventListener('keypress', ({ key }) => {
  if (key === 'Enter') {
    addTodo()
  }
})

button.addEventListener('click', () => {
  addTodo()
})
