import UserSelect from './UserSelect.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import Loader from './Loader.js'

import { getTodoItems, addTodoItem, deleteTodoItem, toggleTodoItem, getUsers } from '../api/todoApi.js'

const DEFAULT_USER = 'sanginchun'

class App {
  constructor($app) {
    this.state = {
      todoItems: [],
      users: [],
      currentUser: DEFAULT_USER,
      isLoading: true,
    }

    this.userSelect = new UserSelect({
      $app,
      initialState: {
        users: this.state.users,
        currentUser: this.state.currentUser,
      },
      onChange: this.onCurrentUserChange.bind(this),
    })

    new TodoInput({
      $app,
      onSubmit: this.onTodoInputSubmit.bind(this),
    })

    this.todoList = new TodoList({
      $app,
      initialState: {
        todoItems: this.state.todoItems,
      },
      onTodoItemClick: this.onTodoItemClick.bind(this),
      onDeleteButtonClick: this.onDeleteButtonClick.bind(this),
    })

    this.loader = new Loader({
      $app,
      initialState: this.state.isLoading,
    })

    this.init()
  }

  setState(nextState) {
    this.state = nextState

    this.userSelect.setState({
      users: this.state.users,
      currentUser: this.state.currentUser,
    })

    this.todoList.setState({
      todoItems: this.state.todoItems,
    })

    this.loader.setState(this.state.isLoading)
  }

  async init() {
    Promise.all([
      getUsers().then((nextUsers) => {
        this.setState({
          ...this.state,
          users: nextUsers,
        })
      }),
      getTodoItems(this.state.currentUser).then((nextTodoItems) => {
        this.setState({
          ...this.state,
          todoItems: nextTodoItems,
        })
      }),
    ]).then(() => {
      this.setState({
        ...this.state,
        isLoading: false,
      })
    })
  }

  async setNextTodoItems() {
    const nextTodoItems = await getTodoItems(this.state.currentUser)
    if (nextTodoItems === null) {
      this.handleError('Todo 리스트를 불러오는 데 실패했습니다.')
      return
    }

    this.setState({
      ...this.state,
      todoItems: nextTodoItems,
      isLoading: false,
    })
  }

  async onTodoInputSubmit(e) {
    this.setState({
      ...this.state,
      isLoading: true,
    })
    e.preventDefault()

    const $content = e.target.querySelector('input#content')

    const result = await addTodoItem($content.value, this.state.currentUser)
    if (result === null) {
      this.handleError('할 일 추가에 실패했습니다')
      return
    }

    this.setNextTodoItems().then(() => {
      $content.value = ''
      $content.focus()
    })
  }

  async onDeleteButtonClick(e) {
    this.setState({
      ...this.state,
      isLoading: true,
    })

    const todoItemId = e.target.closest('li.todo-item').dataset.id

    const result = await deleteTodoItem(todoItemId, this.state.currentUser)
    if (result === null) {
      this.handleError('삭제에 실패했습니다')
      return
    }

    this.setNextTodoItems()
  }

  async onTodoItemClick(e) {
    this.setState({
      ...this.state,
      isLoading: true,
    })

    const todoItemId = e.target.closest('li.todo-item').dataset.id

    const result = await toggleTodoItem(todoItemId, this.state.currentUser)
    if (result === null) {
      this.handleError('처리에 실패했습니다')
      return
    }

    this.setNextTodoItems()
  }

  onCurrentUserChange(e) {
    this.setState({
      ...this.state,
      isLoading: true,
      currentUser: e.target.value,
    })

    this.setNextTodoItems()
  }

  handleError(errorMessage) {
    alert(errorMessage)

    this.setState({
      ...this.state,
      isLoading: false,
    })
  }
}

export default App
