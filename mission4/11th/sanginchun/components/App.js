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
      currentUser: null,
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

    this.uncompletedTodoList = new TodoList({
      $app,
      initialState: {
        todoItems: this.state.todoItems.filter(({ isCompleted }) => isCompleted === false),
      },
      isCompletedList: false,
      onTodoItemClick: this.onTodoItemClick.bind(this),
    })

    this.completedTodoList = new TodoList({
      $app,
      initialState: {
        todoItems: this.state.todoItems.filter(({ isCompleted }) => isCompleted === true),
      },
      isCompletedList: true,
      onTodoItemClick: this.onTodoItemClick.bind(this),
    })

    this.loader = new Loader({
      $app,
      initialState: this.state.isLoading,
    })

    /* Drag & Drop */
    $app.addEventListener('mousedown', (e) => {
      if (!e.target.closest('button.todo-item-move-button')) return

      this.$draggingItem = e.target.closest('li.todo-item')
      this.$draggingItem.setAttribute('draggable', 'true')
    })

    $app.addEventListener('dragend', () => {
      this.$draggingItem.setAttribute('draggable', 'false')
      this.$draggingItem = null
    })

    $app.addEventListener('dragover', (e) => {
      e.preventDefault()

      if (e.target.closest('section.todo-list')) e.dataTransfer.dropEffect = 'move'
      else e.dataTransfer.dropEffect = 'none'
    })

    $app.addEventListener('drop', (e) => {
      e.preventDefault()

      if (e.target.closest('section.todo-list')) {
        this.onTodoItemDrop(this.$draggingItem, e.target.closest('section.todo-list'))
      }
    })

    this.initUser()
  }

  async initUser() {
    const users = await getUsers()
    if (users === null) {
      this.handleError('유저 목록을 불러오는 데 실패했습니다')
      return
    }

    let currentUser = DEFAULT_USER

    if (!users.includes(currentUser)) {
      const createUserConfirmed = window.confirm(`유저 '${currentUser}'를 찾지 못했습니다. 새로 생성할까요?`)

      if (createUserConfirmed) {
        await addTodoItem('Sample', currentUser)

        this.initUser()
        return
      } else {
        currentUser = users[0]
      }
    }

    this.setState({
      ...this.state,
      users,
      currentUser,
    })

    this.setNextTodoItems()
  }

  setState(nextState) {
    this.state = nextState

    this.userSelect.setState({
      users: this.state.users,
      currentUser: this.state.currentUser,
    })

    this.uncompletedTodoList.setState({
      todoItems: this.state.todoItems.filter(({ isCompleted }) => isCompleted === false),
    })

    this.completedTodoList.setState({
      todoItems: this.state.todoItems.filter(({ isCompleted }) => isCompleted === true),
    })

    this.loader.setState(this.state.isLoading)
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
    e.preventDefault()

    this.setState({
      ...this.state,
      isLoading: true,
    })

    const $content = e.target.querySelector('input#content')

    const result = await addTodoItem($content.value, this.state.currentUser)
    if (result === null) {
      this.handleError('할 일 추가에 실패했습니다')
      return
    }

    await this.setNextTodoItems()

    $content.value = ''
    $content.focus()
  }

  async onTodoItemClick(e) {
    const todoItemId = e.target.closest('li.todo-item').dataset.id

    if (e.target.closest('label.todo-item-toggle')) {
      this.setState({
        ...this.state,
        isLoading: true,
      })

      const result = await toggleTodoItem(todoItemId, this.state.currentUser)
      if (result === null) {
        this.handleError('처리에 실패했습니다')
        return
      }

      this.setNextTodoItems()
      return
    }

    if (e.target.closest('button.todo-item-delete-button')) {
      this.setState({
        ...this.state,
        isLoading: true,
      })

      const result = await deleteTodoItem(todoItemId, this.state.currentUser)
      if (result === null) {
        this.handleError('삭제에 실패했습니다')
        return
      }

      this.setNextTodoItems()
      return
    }
  }

  async onTodoItemDrop($todoItem, $todoListSection) {
    if ($todoItem === null) return

    const todoItem = this.state.todoItems.find((todoItem) => todoItem._id === $todoItem.dataset.id)
    const isCompletedList = $todoListSection.classList.contains('completed')

    if (todoItem.isCompleted === isCompletedList) return

    this.setState({
      ...this.state,
      isLoading: true,
    })

    const result = await toggleTodoItem(todoItem._id, this.state.currentUser)
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
