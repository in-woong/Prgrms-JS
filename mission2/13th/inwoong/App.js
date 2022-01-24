import * as DataRepository from './src/data.js'
import TodoList from './src/Todolist.js'
import TodoInput from './src/TodoInput.js'
import TodoCount from './src/TodoCount.js'

export default function App() {
  this.state = DataRepository.data

  this.onComplete = (index) => {
    const nextState = [...this.state]
    nextState[index].isCompleted = !nextState[index].isCompleted
    this.setState(nextState)
  }

  this.onSubmit = (inputValue) => {
    this.setState([{ text: inputValue, isCompleted: false }, ...this.state])
  }

  const todolist = new TodoList(this.state, 'todo-list', this.onComplete)
  const todoinput = new TodoInput(this.state, 'todo-list', this.onSubmit)
  const todocount = new TodoCount(this.state, 'todo-list')

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = function () {
    todolist.setState(this.state)
    todocount.setState(this.state)
  }
}
