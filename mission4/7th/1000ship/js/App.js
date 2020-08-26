import api, { TodoApi } from './api.js'
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'
import Users from './Users.js'

function App({
  defaultUsername = '1000ship',
  $userList,
  $todoName,
  $target,
  $todoInput,
  $addTodoButton,
  $loading,
}) {
  this.defaultUsername = defaultUsername
  this.$userList = $userList
  this.$todoName = $todoName
  this.$target = $target
  this.$todoInput = $todoInput
  this.$addTodoButton = $addTodoButton
  this.$loading = $loading

  const todoApi = new TodoApi(defaultUsername)
  this.data = {
    todoList: [],
    userList: [],
    loading: false,
    error: null,
  }

  this.setState = (newData) => {
    this.data = newData
    this.users.setState({
      ...this.users.data,
      userList: this.data.userList,
      loading: this.data.loading,
    })
    this.todoList.setState({
      ...this.todoList.data,
      todoList: this.data.todoList,
      loading: this.data.loading,
    })
    this.render()
  }

  this.render = () => {
    this.$loading.style.display = this.data.loading ? 'block' : 'none'
  }

  // Methods
  const loadUserList = async () => {
    const userList = await api.getUserList()
    this.setState({ ...this.data, userList, loading: false })
  }

  const refreshTodoList = async () => {
    const todoList = await todoApi.getTodoList()
    this.setState({ ...this.data, todoList, loading: false })
  }

  const onTodoItemClick = async (id) => {
    if (this.data.loading) return
    this.setState({ ...this.data, loading: true })
    await todoApi.toggleTodoItem(id)
    await refreshTodoList()
  }

  const onTodoItemRemove = async (id) => {
    if (this.data.loading) return
    this.setState({ ...this.data, loading: true })
    await todoApi.removeTodoItem(id)
    await refreshTodoList()
  }

  const openTodoList = async (username) => {
    if (this.data.loading) return
    this.setState({ ...this.data, loading: true })
    todoApi.changeUsername(username)
    await refreshTodoList()
  }

  const moveItemToOtherTodo = async (targetTodo, originalItemId) => {
    if(this.data.loading) return
    this.setState({ ...this.data, loading: true })
    const originalItem = this.data.todoList.find(item => item._id === originalItemId)
    await todoApi.removeTodoItem(originalItemId)
    await api.addTodoItem(targetTodo, originalItem.content)
    await refreshTodoList()
  }

  // Components
  this.users = new Users({
    $userList,
    data: { userList: [], loading: false, error: null },
    openTodoList,
    todoApi,
    moveItemToOtherTodo,
  })

  this.todoList = new TodoList({
    $todoName,
    $target,
    data: { todoList: [], loading: false, error: null },
    todoApi,
    onTodoItemClick,
    onTodoItemRemove,
  })

  this.todoForm = new TodoForm({
    $todoInput,
    $addTodoButton,
    todoApi,
    refreshTodoList,
  })

  loadUserList()
  refreshTodoList()
  this.render()
}

export default App
