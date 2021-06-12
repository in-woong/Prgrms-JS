import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoList from './components/TodoList.js'
import validator from './validators/todoValidator.js'
import { getLocalStorageItem, setLocalStorageItem } from './utils/localStorage.js'

function App($app, initialState) {
  this.state = getLocalStorageItem('todoItems') ? getLocalStorageItem('todoItems') : initialState

  this.todoList = new TodoList({
    $app,
    initialState: this.state,
    deleteTodo: (todoID) => {
      const nextTodos = this.state.filter((todo) => todo.id !== todoID)
      this.setState(nextTodos)
    },
    toggleTodo: (todoID) => {
      const nextTodos = this.state.map((todo) => (todo.id === todoID ? { ...todo, isCompleted: !todo.isCompleted } : todo))
      this.setState(nextTodos)
    },
    removeAllTodo: () => {
      this.setState([])
    },
  })
  this.todoCount = new TodoCount({ $app, initialState: this.state })
  this.todoInput = new TodoInput({
    $app,
    addTodo: (newTodo) => {
      this.setState([...this.state, newTodo])
    },
  })

  this.setState = (nextState) => {
    validator(nextState)
    setLocalStorageItem('todoItems', nextState)
    this.state = nextState
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
    this.render()
  }

  this.render = () => {
    this.todoList.render()
    this.todoCount.render()
    this.todoInput.render()
  }
}

export default App
