import { onAddTodo, onChangeToggle, onDeleteAllTodo, onDeleteTodo, onGetTodoList, onGetUserList } from './api.js'
import ButtonToDeleteAll from './components/ButtonToDeleteAll.js'
import CurrentName from './components/CurrentName.js'
import SearchNameInput from './components/SearchNameInput.js'
import TodoInput from './components/TodoInput.js'
import Trello from './components/Trello.js'
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
        this.setState({ ...this.state, isLoading: true })
        const todos = await onGetTodoList(name)
        this.setState({ ...this.state, name, todos, isLoading: false })
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
      this.setState({ ...this.state, isLoading: true })
      const todos = await onGetTodoList(name)
      this.setState({
        ...this.state,
        name,
        todos,
        isLoading: false,
      })
    },
  })

  const trello = new Trello({
    $app: this.$app,
    initialState: { todos: this.state.todos, isLoading: this.state.isLoading },
    onRemove: async (todo_id) => {
      try {
        const res = await onDeleteTodo(this.state.name, todo_id)
        if (res) {
          const updateTodos = this.state.todos.filter((todo) => todo._id !== todo_id)
          this.setState({ ...this.state, todos: updateTodos })
        }
      } catch (error) {
        console.error(error)
      }
    },
    onClick: async (todo_id) => {
      try {
        const res = await onChangeToggle(this.state.name, todo_id)
        if (res) {
          const updateTodos = this.state.todos.map((todo) => {
            if (todo._id !== todo_id) {
              return todo
            } else {
              return {
                ...todo,
                isCompleted: !todo.isCompleted,
              }
            }
          })
          this.setState({ ...this.state, todos: updateTodos })
        }
      } catch (error) {
        console.error(error)
      }
    },
  })

  this.setState = (nextState) => {
    this.state = nextState
    currentName.setState(this.state.name)
    trello.setState({ todos: this.state.todos, isLoading: this.state.isLoading })
    users.setState(this.state.users)
  }

  this.init()
}
