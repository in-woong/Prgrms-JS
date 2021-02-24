import { fetchData, fetchUser, toggleTodo, deleteTodo, addTodo } from './api.js'

function App(initialUser, todoData, userData) {
  if (!(this instanceof App)) {
    return new App(initialState)
  }

  this.currentUser = initialUser

  const todoListPend = new TodoList({
    $target: document.querySelector('#todo-section-pend'),
    initialData: todoData,
    onEvent: {
      onToggle: async (id) => {
        toggleLoading()
        await toggleTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
      onRemove: async (id) => {
        toggleLoading()
        await deleteTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
      onDragDrop: async (id) => {
        toggleLoading()
        await toggleTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
    },
    listType: 'pend',
  })

  const todoListDone = new TodoList({
    $target: document.querySelector('#todo-section-done'),
    initialData: todoData,
    onEvent: {
      onToggle: async (id) => {
        toggleLoading()
        await toggleTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
      onRemove: async (id) => {
        toggleLoading()
        await deleteTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
      onDragDrop: async (id) => {
        toggleLoading()
        await toggleTodo(this.currentUser, id)
        await updateState(this.currentUser)
        toggleLoading()
      },
    },
    listType: 'done',
  })

  const todoInput = new TodoInput({
    $target: {
      input: document.querySelector('#todo-input'),
      submit: document.querySelector('#add-todo-button'),
    },
    onSubmit: async (newTodo) => {
      if (newTodo.length > 0) {
        toggleLoading()
        await addTodo(this.currentUser, newTodo)
        await updateState(this.currentUser)
        toggleLoading()
      }
    },
  })

  const userList = new UserList({
    $target: {
      list: document.querySelector('#user-section'),
      current: document.querySelector('#current-user'),
    },
    initialUser: this.currentUser,
    userData: userData,
    onUserClick: async (newUser) => {
      if (newUser != '') {
        toggleLoading()
        await updateState(newUser, 1000)
        toggleLoading()
      }
    },
  })

  const updateState = async (newUser, delay) => {
    this.currentUser = newUser
    this.todoData = await fetchData(newUser, delay)
    this.todoUsers = await fetchUser(delay)
    todoListPend.setState(this.todoData)
    todoListDone.setState(this.todoData)
    userList.setState(this.currentUser, this.todoUsers)
  }

  // 로딩되는 객체를 부분적으로 Loading 표시하도록 고민...
  const toggleLoading = () => {
    let $mask = document.querySelector('#loading-mask')
    $mask.className = $mask.className == 'show' ? 'hide' : 'show'
  }
}

export default App
