import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { useNewKeyword, isArrayState, checkTypes } from './validation.js'

const LOCAL_STORAGE_TODO_DATA_NAME = 'todoData'

export default class App {
  constructor({ $app }) {
    useNewKeyword(new.target)

    this.$app = $app
    this.todoData = this.initTodoData()
    this.validData(this.todoData)

    this.todoInput = new TodoInput({
      $app: this.$app,
      onAddTodo: this.insertTodo.bind(this),
      onDeleteAllTodo: this.deleteAllTodo.bind(this),
    })

    this.todoCount = new TodoCount({
      $app: this.$app,
      numOfTodo: this.todoData.length,
      numOfCompleteTodo: this.todoData.filter((todo) => todo.isCompleted)
        .length,
    })

    this.todoList = new TodoList({
      $app: this.$app,
      todoData: this.todoData,
      onToggleTodo: this.toggleTodo.bind(this),
      onDeleteTodo: this.deleteTodo.bind(this),
    })
  }

  initTodoData() {
    try {
      const todoDataInLocalStorage = localStorage.getItem(
        LOCAL_STORAGE_TODO_DATA_NAME
      )

      if (todoDataInLocalStorage) {
        try {
          const todoData = JSON.parse(todoDataInLocalStorage)
          this.validData(todoData)

          return todoData
        } catch (error2) {
          console.error(error2)
        }
      }
    } catch (error1) {
      alert('할 일 데이터를 가져오는 중에 오류가 발생했습니다!')
      console.error(error1)
    }

    return []
  }

  setState(nextTodoData) {
    try {
      try {
        this.validData(nextTodoData)
        this.todoData = nextTodoData
      } catch (error2) {
        console.error(error2)
      }

      localStorage.setItem(
        LOCAL_STORAGE_TODO_DATA_NAME,
        JSON.stringify(this.todoData)
      )

      this.todoList.setState({ nextData: this.todoData })
      this.todoCount.setState({
        numOfTodo: this.todoData.length,
        numOfCompleteTodo: this.todoData.filter((todo) => todo.isCompleted)
          .length,
      })
    } catch (error1) {
      alert('할 일 데이터를 업데이트하는 중에 오류가 발생했습니다!')
      console.error(error1)
    }
  }

  validData(todoData) {
    isArrayState(todoData)
    checkTypes(
      todoData,
      ({ text, isCompleted }) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  insertTodo(newTodoText) {
    const nextTodoData = [
      {
        text: newTodoText,
        isCompleted: false,
      },
      ...this.todoData,
    ]

    this.setState(nextTodoData)
  }

  toggleTodo(toggleTodoIndex) {
    const nextTodoData = this.todoData.slice()

    nextTodoData.splice(toggleTodoIndex, 1, {
      text: nextTodoData[toggleTodoIndex].text,
      isCompleted: !nextTodoData[toggleTodoIndex].isCompleted,
    })

    this.setState(nextTodoData)
  }

  deleteTodo(deleteTodoIndex) {
    const nextTodoData = this.todoData.slice()
    nextTodoData.splice(deleteTodoIndex, 1)

    this.setState(nextTodoData)
  }

  deleteAllTodo() {
    this.setState([])
  }
}
