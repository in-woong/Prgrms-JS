import { onAddTodo, onDeleteAllTodo, onGetTodoList, onGetUserList } from './api.js'
import ButtonToDeleteAll from './components/ButtonToDeleteAll.js'
import CurrentName from './components/CurrentName.js'
import SearchNameInput from './components/SearchNameInput.js'
import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'
import Users from './components/Users.js'

export default function App({ $main }) {
  this.state = {
    isLoading: true,
    users: [],
    todos: [],
    name: 'Giseok',
  }
  this.$app = document.createElement('div')
  $main.appendChild(this.$app)

  this.init = async () => {
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

  const currentName = new CurrentName({
    $app: this.$app,
    name: this.state.name,
  })

  const searchNameInput = new SearchNameInput({
    $app: this.$app,
    onSearch: async (name) => {
      try {
        const todos = await onGetTodoList(name)
        this.setState({ ...this.state, name, todos })
      } catch (error) {
        console.error(error)
      }
    },
  })

  const todoInput = new TodoInput({
    $app: this.$app,
    onAddTodo: async (content) => {
      onAddTodo(this.state.name, content)
    },
    init: this.init,
  })

  const buttonToDeleteAll = new ButtonToDeleteAll({
    $app: this.$app,
    onDeleteAll: async () => {
      onDeleteAllTodo(this.state.name)
    },
    init: this.init,
  })
  const users = new Users({
    $app: this.$app,
    userList: this.state.users,
    onClickName: async (name) => {
      const todos = await onGetTodoList(name)
      this.setState({
        ...this.state,
        name,
        todos,
      })
    },
  })

  const todoList = new TodoList({ $app: this.$app, initialState: { todos: this.state.todos, isLoading: this.state.isLoading } })

  this.setState = (nextState) => {
    this.state = nextState
    currentName.setState(this.state.name)
    todoList.setState({ todos: this.state.todos, isLoading: this.state.isLoading })
    users.setState(this.state.users)
  }

  this.init()
}
