import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

function App(targetElement, state) {
  this.state = state
  // todoInput
  const formElement = document.querySelector('#form-container')
  const inputElement = document.querySelector('#todo-input')

  // removeAll
  const removeAllBtn = document.createElement('button')
  const btnText = document.createTextNode('RemoveAll')
  removeAllBtn.appendChild(btnText)
  formElement.appendChild(removeAllBtn)

  removeAllBtn.addEventListener('click', e => {
    this.state = []
    this.todoList.setState(this.state)
    this.countData = new TodoCount(countElement, todoElement)
  })

  // count
  const countElement = document.createElement('div')
  targetElement.appendChild(countElement)

  // todoList
  const todoElement = document.createElement('ul')
  todoElement.classList.add('todo-list')
  targetElement.appendChild(todoElement)

  this.todoList = new TodoList(todoElement, this.state, data => {
    this.state = data
    this.countData = new TodoCount(countElement, todoElement)
    this.todoList.setState(this.state)
  })

  this.countData = new TodoCount(countElement, todoElement)

  this.todoInput = new TodoInput(formElement, inputElement, text => {
    const newData = {}
    newData.text = text
    newData.isCompleted = false

    this.state = [...this.state, newData]
    this.todoList.setState(this.state)
    this.countData = new TodoCount(countElement, todoElement)
  })
}

// const data = [
//   {
//     text: 'JS 공부하기',
//     isCompleted: true,
//   },
//   {
//     text: 'JS 복습하기',
//     isCompleted: false,
//   },
// ]

const targetElement = document.querySelector('#main')
const todoData = localStorage.getItem('data')
new App(targetElement, todoData || [])
