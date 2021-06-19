import { onGetTodoList, onGetUserList } from './api.js'
import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'
import Users from './components/Users.js'

export default function App({ $main }) {
  this.state = {
    isLoading: true,
    users: [],
    todos: [],
    name: '권기석',
  }
  this.$app = document.createElement('div')
  $main.appendChild(this.$app)

  const init = async () => {
    try {
      const users = await onGetUserList()
      const todos = await onGetTodoList(this.state.name)
      this.setState({
        ...this.state,
        users,
        todos,
        isLoading: false,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const todoInput = new TodoInput({
    $app: this.$app,
    onSearch: async (name) => {
      try {
        const data = await onGetTodoList(name)
        this.setState({ ...this.state, name, todos: data })
      } catch (error) {
        console.error(error)
      }
    },
  })

  const users = new Users({ $app: this.$app, userList: this.state.users })

  const todoList = new TodoList({ $app: this.$app, initialState: this.state.todos })

  this.setState = (nextState) => {
    this.state = nextState
    todoList.setState(this.state.todos)
    users.setState(this.state.users)
  }

  init()
}
