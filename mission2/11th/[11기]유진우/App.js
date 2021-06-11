import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoList from './components/TodoList.js'
import validator from './validators/todoValidator.js'

function App(initialState) {
  this.$app = document.querySelector('#app')
  this.state = initialState

  this.todoList = new TodoList(this.$app, this.state)
  this.todoCount = new TodoCount(this.$app, this.state)
  this.todoInput = new TodoInput(this.$app, this.todoList.addTodo)

  this.setState = (nextState) => {
    validator(nextState)
    this.state = nextState
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
  }

  this.render = () => {
    this.todoList.render()
    this.todoCount.render()
    this.todoInput.render()
  }
}

export default App
