import Component from './Component.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { $, makeID, validateElement, validateData } from '../Utils/index.js'
import { fetchTodos, postTodo } from '../api/index.js'

export default class App extends Component {
  constructor(selector) {
    super($(selector))
    this.data = fetchTodos() || []
    this.validate(this.$element)
    this.todoInput = new TodoInput({
      $element: $(`${selector}>.input-container`),
      $App: this.$element,
      onSubmit: this.onSubmit.bind(this),
    })
    this.todoList = new TodoList({
      $element: $(`${selector}>.todo-list-container`),
      data: this.data,
      onRemoveTodo: this.onRemoveTodo.bind(this),
      onToggle: this.onToggle.bind(this),
    })
    this.todoCount = new TodoCount($(`${selector}>.todo-count-container`))
    this.init()
  }

  init() {
    this.bindEvents()
    this.setCount()
  }

  validate($element) {
    validateElement($element)
  }

  bindEvents() {
    this.$element.addEventListener('@removeAll', () => this.onRemoveAll())
  }

  onSubmit(itemValue) {
    if (!itemValue) {
      return
    }

    const newTodo = {
      id: makeID(),
      text: itemValue,
      isCompleted: false,
    }

    const nextData = [...this.data, newTodo]

    postTodo(nextData)
    this.setState(nextData)
    this.todoList.setState(nextData)
    this.setCount()
    this.todoInput.setInputValue('')
  }

  onRemoveTodo(id) {
    const nextData = this.data.filter(todo => id !== todo.id)
    postTodo(nextData)
    this.setState(nextData)
    this.todoList.setState(nextData)
    this.setCount()
  }

  onRemoveAll() {
    postTodo([])
    this.setState([])
    this.todoList.setState([])
    this.setCount()
  }

  onToggle(id) {
    const nextData = this.data.map(todo => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    })

    postTodo(nextData)
    this.setState(nextData)
    this.todoList.setState(nextData)
    this.setCount()
  }

  setCount() {
    this.todoCount.setState({
      totalCount: this.data.length,
      completedCount: this.data.filter(data => data.isCompleted).length,
    })
  }

  setState(nextData) {
    validateData(nextData)
    this.data = nextData
  }
}
