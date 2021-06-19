import { onGetTodoList } from './api.js'
import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'

export default function App({ $main }) {
  this.state = []
  this.$app = document.createElement('div')
  $main.appendChild(this.$app)

  const todoInput = new TodoInput({
    $app: this.$app,
    onSearch: async (name) => {
      const data = await onGetTodoList(name)
      this.setState(data)
    },
  })
  const todoList = new TodoList({ $app: this.$app, initialState: this.state })

  this.setState = (nextState) => {
    this.state = nextState
    todoList.setState(this.state)
  }
}
