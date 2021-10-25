import TodoList from './TodoList.js'

let todos = [
  {
    id: '1',
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

const getMaxId = (todos) => {
  return Math.max(...todos.map((todo) => todo.id))
}

const focusInput = () => {
  input.focus()
}

const addTodo = () => {
  const { data: todos } = todoListOne

  if (input.value === '') {
    alert('할일을 입력해주세요 ! ')
    focusInput()
    return
  }

  const newTodo = {
    id: `${getMaxId(todos) + 1}`,
    text: input.value,
    isCompleted: false,
  }

  todoListOne.setState([newTodo, ...todos])

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
