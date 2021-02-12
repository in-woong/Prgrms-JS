import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

function App(targetElement, state) {
  this.state = state
  const formElement = document.querySelector('#form-container')
  const inputElement = document.querySelector('#todo-input')

  const countElement = document.createElement('div')
  targetElement.appendChild(countElement)
  this.countData = new TodoCount(this.state, (todoCount, completedCount) => {
    countElement.innerHTML = `<div>${completedCount}/${todoCount}</div>`
  })

  const todoElement = document.createElement('ul')
  todoElement.classList.add('todo-list')
  targetElement.appendChild(todoElement)

  this.todoList = new TodoList(todoElement, this.state)

  this.todoInput = new TodoInput(formElement, inputElement, text => {
    const newData = {}
    newData.text = text
    newData.isCompleted = false

    this.state = [...this.state, newData]
    this.todoList.setState(this.state)
    this.countData = new TodoCount(this.state, (todoCount, completedCount) => {
      countElement.innerHTML = `<div>${completedCount}/${todoCount}</div>`
    })
  })
}

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

const targetElement = document.querySelector('#main')
new App(targetElement, data)
