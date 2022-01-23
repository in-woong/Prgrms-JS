import * as DataRepository from './src/data.js'
import TodoList from './src/Todolist.js'
import TodoInput from './src/TodoInput.js'

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

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = function () {
    todolist.setState(this.state)
  }
}
