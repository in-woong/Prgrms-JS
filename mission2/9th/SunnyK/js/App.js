import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { getItem, setItem } from './localStorage.js'
import { useNewKeyword, isArrayState, checkTypes } from './validation.js'

const LOCAL_STORAGE_TODO_DATA_KEY = 'todos'

export default class App {
  constructor({ $app }) {
    useNewKeyword(new.target)

    this.$app = $app
    this.todoData = getItem({
      key: LOCAL_STORAGE_TODO_DATA_KEY,
      defaultValue: [],
    })
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

  setState(nextTodoData) {
    this.validData(nextTodoData)
    this.todoData = nextTodoData

    setItem({ key: LOCAL_STORAGE_TODO_DATA_KEY, item: this.todoData })

    this.components.forEach(
      (component) => component.setState && component.setState(this.todoData)
    )
  }

  validData(todoData) {
    try {
      isArrayState(todoData)
      checkTypes(
        todoData,
        ({ text, isCompleted }) =>
          typeof text === 'string' && typeof isCompleted === 'boolean'
      )
    } catch (e) {
      alert('할 일 데이터의 형식이 올바르지 않습니다.')
      console.error(e)
    }
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
