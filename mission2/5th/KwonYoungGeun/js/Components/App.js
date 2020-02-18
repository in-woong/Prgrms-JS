import Component from './Component.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { $, makeID, validateElement } from '../Utils/index.js'
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
      onRemoveAll: this.onRemoveAll.bind(this),
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

    this.data.push(newTodo)
    postTodo(this.data)
    this.todoList.setState(this.data)
    this.setCount()
    this.todoInput.setInputValue('')
  }

  onRemoveTodo(id) {
    this.data = this.data.filter(todo => id !== todo.id)
    postTodo(this.data)
    this.todoList.setState(this.data)
    this.setCount()
  }

  onRemoveAll() {
    this.data = []
    postTodo([])
    this.todoList.setState([])
    this.setCount()
  }

  onToggle(id) {
    this.data = this.data.map(todo => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    })
    postTodo(this.data)
    this.todoList.setState(this.data)
    this.setCount()
  }

  setCount() {
    this.todoCount.setState({
      totalCount: this.data.length,
      completedCount: this.data.filter(data => data.isCompleted).length,
    })
  }
}
