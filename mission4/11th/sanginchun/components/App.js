import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

import { getTodoItems, addTodoItem, deleteTodoItem, toggleTodoItem } from '../api/todoApi.js'

class App {
  constructor($app) {
    this.state = {
      todoItems: [],
      isLoading: true,
    }

    new TodoInput({
      $app,
      onSubmit: this.onTodoInputSubmit.bind(this),
    })

    this.todoList = new TodoList({
      $app,
      initialState: {
        todoItems: this.state.todoItems,
        isLoading: this.state.isLoading,
      },
      onTodoItemClick: this.onTodoItemClick.bind(this),
      onDeleteButtonClick: this.onDeleteButtonClick.bind(this),
    })

    this.setNextTodoItems()
  }

  setState(nextState) {
    this.state = nextState

    this.todoList.setState({
      todoItems: this.state.todoItems,
      isLoading: this.state.isLoading,
    })
  }

  async setNextTodoItems() {
    const nextTodoItems = await getTodoItems()
    if (nextTodoItems === null) {
      this.handleError('Todo 리스트를 불러오는 데 실패했습니다.')
      return
    }

    this.setState({
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

    const result = await addTodoItem($content.value)
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

    const result = await deleteTodoItem(todoItemId)
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

    const result = await toggleTodoItem(todoItemId)
    if (result === null) {
      this.handleError('처리에 실패했습니다')
      return
    }

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
