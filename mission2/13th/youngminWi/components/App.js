import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { validateNewState } from '../utils/validation.js'
import { setStorage, clearStorage } from '../utils/storage.js'

function App({ $container, initState }) {
  this.$appContainer = $container
  this.state = initState

  this.todoInput = new TodoInput({
    $app: this.$appContainer,
    onAddTodo: (text) => {
      this.setState([
        ...this.state,
        { id: Date.now(), text: text, isCompleted: false },
      ])
    },
    removeAll: () => {
      this.setState([])
      clearStorage()
    },
  })

  this.todoList = new TodoList({
    $app: this.$appContainer,
    initState: this.state,
    onTodoClick: (clickedIdx) => {
      const newState = this.state.map((todo) =>
        todo.id === clickedIdx
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
      this.setState(newState)
    },
    onTodoRemove: (clickIdx) => {
      const newState = this.state.filter((todo) => todo.id !== clickIdx)
      this.setState(newState)
    },
  })

  this.todoCount = new TodoCount({
    $app: this.$appContainer,
    initState: this.state,
  })

  this.setState = (newState) => {
    validateNewState(newState)
    setStorage('todos', newState)
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
  }
}

export default App
