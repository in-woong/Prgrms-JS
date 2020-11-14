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
    this.initCustomEvent()

    this.components = [
      new TodoInput({
        $app: this.$app,
        onAddTodo: this.insertTodo.bind(this),
      }),
      new TodoCount({
        $app: this.$app,
        todoData: this.todoData,
      }),
      new TodoList({
        $app: this.$app,
        todoData: this.todoData,
        onToggleTodo: this.toggleTodo.bind(this),
        onDeleteTodo: this.deleteTodo.bind(this),
      }),
    ]
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
          alert('할 일 데이터의 형식이 올바르지 않습니다.')
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
        alert('할 일 데이터의 형식이 올바르지 않습니다.')
        console.error(error2)
      }

      localStorage.setItem(
        LOCAL_STORAGE_TODO_DATA_NAME,
        JSON.stringify(this.todoData)
      )

      this.components.forEach(
        (component) => component.setState && component.setState(this.todoData)
      )
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

  initCustomEvent() {
    window.addEventListener('removeAll', () => this.setState([]))
  }
}
