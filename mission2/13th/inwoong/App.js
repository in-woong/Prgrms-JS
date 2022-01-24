import * as DataRepository from './src/data.js'
import TodoList from './src/Todolist.js'
import TodoInput from './src/TodoInput.js'
import TodoCount from './src/TodoCount.js'
import Storage from './src/storage.js'

const DB = new Storage()

export default function App() {
  // this.state = DataRepository.data

  this.state = [DB.getItem()][0]
  const event = new CustomEvent('RemoveAll')
  const App = document.querySelector('.App')
  const btn = document.createElement('button')
  btn.innerText = 'Remove'
  btn.addEventListener('click', () => {
    App.dispatchEvent(event)
  })
  App.appendChild(btn)
  App.addEventListener('RemoveAll', () => {
    this.state = ''
    DB.clear()
    this.render()
  })

  this.onComplete = (index) => {
    const nextState = [...this.state]
    nextState[index].isCompleted = !nextState[index].isCompleted
    this.setState(nextState)
  }

  this.onSubmit = (inputValue) => {
    this.setState([{ text: inputValue, isCompleted: false }, ...this.state])
  }

  const todolist = new TodoList(this.state, 'todo-list', this.onComplete)
  const todocount = new TodoCount(this.state, 'todo-list')
  const todoinput = new TodoInput(this.state, 'todo-list', this.onSubmit, event)

  this.setState = function (nextState) {
    this.state = nextState
    DB.setItem(this.state)
    //여기서 DB.setItem(this.state)와 DB.setItem(nextState)가 다른데 이유가 무엇일까
    this.render()
  }

  this.render = function () {
    todolist.setState(this.state)
    todocount.setState(this.state)
  }
}
