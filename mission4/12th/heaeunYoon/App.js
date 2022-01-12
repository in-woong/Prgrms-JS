import { deleteFetch, getFetch, postFetch, putFetch } from './api/request.js'

import asyncFunction from './utils/asyncFunction.js'

import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Button from './Button.js'
import UserList from './UserList.js'
import LoadingModal from './LoadingModal.js'

export default function App({ $app }) {
  this.state = {
    userName: null,
    todos: [],
    isLoading: false,
    users: [],
  }

  const getTodos = async () => {
    const todos = await getFetch({ url: `/${this.state.userName}?delay=3000` })

    this.setState({ key: 'todos', value: todos })
  }

  this.init = () => {
    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: async () => {
        const users = await getFetch({ url: '/users/' })

        this.setState({ key: 'users', value: users })
      },
    })

    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: getTodos,
    })
  }

  this.setState = ({ key, value }) => {
    this.state = {
      ...this.state,
      [key]: value,
    }

    todoList.setState({
      userName: this.state.userName,
      todos: this.state.todos,
    })

    userList.setState(this.state.users)
    todoForm.setState({
      isActive: this.state.userName,
    })

    loadingModal.setState(this.state.isLoading)
  }

  const handleChange = async ({ value: content }) => {
    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: async () => {
        const newTodo = await postFetch({
          url: `/${this.state.userName}`,
          body: {
            content,
          },
        })

        if (!this.state.todos || !newTodo) {
          return
        }

        this.setState({ key: 'todos', value: [newTodo, ...this.state.todos] })
      },
    })
  }

  const handleTodoClick = async ({ clickedId }) => {
    putFetch({
      url: `/${this.state.userName}/${clickedId}/toggle`,
    })

    const updateTodos = this.state.todos.map((todo) => {
      const { isCompleted, _id } = todo

      return {
        ...todo,
        isCompleted: clickedId === _id ? !isCompleted : isCompleted,
      }
    })

    this.setState({ key: 'todos', value: updateTodos })
  }

  const handleDeleteButtonClick = ({ deletedId }) => {
    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: async () => {
        await deleteFetch({
          url: `/${this.state.userName}/${deletedId}`,
        })

        const updateTodos = this.state.todos.filter(
          ({ _id }) => _id !== deletedId
        )

        this.setState({ key: 'todos', value: updateTodos })
      },
    })
  }

  const handleAllDelete = () => {
    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: async () => {
        await deleteFetch({
          url: `/${this.state.userName}/all`,
        })

        this.setState({ key: 'todos', value: [] })
      },
    })
  }

  const handleUserNameClick = ({ userName }) => {
    if (userName === 'users') {
      return
    }

    this.setState({ key: 'userName', value: userName })

    asyncFunction({
      setLoading: (isLoading) => {
        this.setState({ key: 'isLoading', value: isLoading })
      },
      actionItem: getTodos,
    })
  }

  new Button({ $app, text: '전체 삭제', onClick: handleAllDelete })

  const todoForm = new TodoForm({
    $app,
    onChange: handleChange,
    isActive: this.state.userName,
  })

  const todoList = new TodoList({
    $app,
    initialState: this.state.todos,
    userName: this.state.userName,
    onTodoClick: handleTodoClick,
    onDeleteButtonClick: handleDeleteButtonClick,
  })

  const userList = new UserList({
    $app,
    initialState: this.state.users,
    onClick: handleUserNameClick,
  })

  const loadingModal = new LoadingModal({
    $app: document.querySelector('body'),
    initialState: this.state.isLoading,
  })

  this.init()
}
