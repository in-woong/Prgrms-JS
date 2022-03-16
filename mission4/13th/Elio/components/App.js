import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import Users from './Users.js'
import { validateData } from '../utils/validation.js'
import {
  getTodoData,
  addTodoData,
  removeTodoData,
  removeAllTodoData,
  toggleTodoData,
  getUsersData,
} from '../apis/api.todo.js'
import { USER_NAME } from '../commons/constants.js'

function App($app) {
  this.$target = $app
  this.state = {
    currentUser: USER_NAME,
    todos: [],
    users: [],
  }

  // App에서 removeAll 이라는 이벤트를 받기
  $app.addEventListener('removeAll', async () => {
    await removeAllTodoData(this.state.currentUser)
    this.setState({ todos: [] })
  })

  const todoUsers = new Users({
    $target: this.$target,
    state: this.state,
    changeUser: (clickedUser) => {
      this.setState({
        ...this.state,
        currentUser: clickedUser,
      })
      // currentUser 변경 후 todo data 업데이트
      this.getTodos()
    },
  })

  const todoInput = new TodoInput({
    $target: this.$target,
    addTodo: async (newContent) => {
      const newTodo = await addTodoData(this.state.currentUser, newContent)
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          { content: newContent, isCompleted: false, _id: newTodo._id },
        ],
      })
      console.log(this.state)
    },
  })

  const todoList = new TodoList({
    $target: this.$target,
    state: this.state,
    removeTodo: async (id) => {
      await removeTodoData(this.state.currentUser, id)
      this.setState({
        ...this.state,
        todos: this.state.todos.filter((todo) => todo._id !== id),
      })
    },
    toggleTodo: async (id) => {
      await toggleTodoData(this.state.currentUser, id)
      this.setState({
        ...this.state,
        todos: this.state.todos.map((todo) =>
          todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      })
    },
  })

  const todoCount = new TodoCount({
    $target: this.$target,
    state: this.state.todos,
  })

  this.setState = (newState) => {
    validateData(newState.todos)
    this.state = newState
    todoList.setState(newState)
    todoUsers.setState(newState)
    todoCount.setState(newState.todos)
  }

  this.getTodos = async () => {
    todoList.setisLoading(true)
    const todoData = await getTodoData(this.state.currentUser)
    todoList.setisLoading(false)
    console.log(todoData)
    this.setState({ ...this.state, todos: todoData })
  }

  this.getUsers = async () => {
    const usersData = await getUsersData()
    this.setState({ ...this.state, users: usersData })
  }

  this.init = () => {
    this.getUsers()
    this.getTodos()
  }
  this.init()
}

export default App
