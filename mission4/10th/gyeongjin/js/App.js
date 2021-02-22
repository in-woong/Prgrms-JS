import Users from './Users.js'
import TodoInput from './TodoInput.js'
import Loading from './Loading.js'
import Trello from './Trello.js'
import { fetchUsers, fetchTodos, createTodo, deleteAllTodo, deleteTodo, toggleTodo } from './api.js'

export default function App($app, defaultUserName) {
  this.state = {
    isLoading: false,
    users: [],
    todos: [],
    selectedName: defaultUserName,
  }

  const $container = document.createElement('div')
  const $contents = document.createElement('div')

  $app.append($container)
  $container.append($contents)
  $container.className = 'container'
  $contents.className = 'contents'

  const initialize = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    })

    const users = await fetchUsers()
    const todos = await fetchTodos(this.state.selectedName)

    this.setState({
      ...this.state,
      users,
      todos,
      isLoading: false,
    })
  }

  const loading = new Loading({
    $target: $app,
    initialState: { isLoading: this.state.isLoading },
  })

  const users = new Users({
    $target: $container,
    users: this.state.users,
    onCheckout: async (selectedName) => {
      this.setState({
        ...this.state,
        selectedName,
        isLoading: true,
      })

      const todos = await fetchTodos(this.state.selectedName)
      this.setState({
        ...this.state,
        todos,
        isLoading: false,
      })
    },
  })

  const todoInput = new TodoInput({
    $target: $contents,
    onSubmit: async (todoItem) => {
      if (todoItem.length > 0) {
        this.setState({
          ...this.state,
          isLoading: true,
          todos: [
            ...this.state.todos,
            {
              content: todoItem,
              isCompleted: false,
            },
          ],
        })

        await createTodo(this.state.selectedName, todoItem)
        await initialize()
      }
    },
    onDeleteAll: async () => {
      await deleteAllTodo(this.state.selectedName)
      await initialize()
    },
  })

  const trello = new Trello({
    $target: $contents,
    initialState: {
      isLoading: true,
      todos: [],
      selectedName: this.state.selectedName,
    },
    onDelete: async (target) => {
      await deleteTodo(this.state.selectedName, target)
      await initialize()
    },
    onToggle: async (target) => {
      await toggleTodo(this.state.selectedName, target)
      await initialize()
    },
  })

  this.setState = (nextState) => {
    this.state = nextState

    loading.setState({
      isLoading: this.state.isLoading,
    })

    users.setState({
      users: this.state.users,
      isLoading: this.state.isLoading,
    })

    trello.setState({
      isLoading: this.state.isLoading,
      todos: this.state.todos,
      selectedName: this.state.selectedName,
    })

    todoInput.setState({
      isLoading: this.state.isLoading,
    })
  }

  initialize()
}
