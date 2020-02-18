import Component from './Component.js'
import { fetchTodos, postTodo } from '../api/index.js'
import { $, makeID, validateElement, validateData } from '../Utils/index.js'
export default class TodoList extends Component {
  constructor($element) {
    super($element)
    this.data = fetchTodos()
    this.validate(this.data, this.$element)
    this.init()
  }

  init() {
    this.bindEvents()
    this.render(this.getMarkupString())
  }

  validate(data, $element) {
    validateData(data)
    validateElement($element)
  }

  bindEvents() {
    this.$element.addEventListener('click', e => this.onClick(e)) // ** Event Delegate **
  }

  onClick(e) {
    console.log(e.target)
    const logics = {
      'remove-button': id => this.removeTodo(id),
      'todo-title': id => this.toggle(id),
      'deleted-todo': id => this.toggle(id),
      'default': () => {},
    }

    const id = Number(e.target.parentNode.getAttribute('data-id'))
    const logic = logics[e.target.className] || logics['default']
    logic(id)
  }

  addTodo(itemValue) {
    const newTodo = {
      id: makeID(),
      text: itemValue,
      isCompleted: false,
    }

    this.data.push(newTodo)
    postTodo(this.data)
    this.setState(this.data)
  }

  removeTodo(id) {
    const removedData = this.data.filter(todo => id !== todo.id)

    postTodo(removedData)
    this.setState(removedData)
  }

  removeAll() {
    postTodo([])
    this.setState([])
  }

  toggle(id) {
    const toggledData = this.data.map(todo => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    })
    postTodo(toggledData)
    this.setState(toggledData)
  }

  sendCount() {
    this.emit('@setCount', {
      totalCount: this.data.length,
      completedCount: this.data.reduce((acc, todo) => {
        return acc + todo.isCompleted
      }, 0),
    })
  }

  setState(nextData) {
    validateData(nextData)
    this.data = nextData
    this.sendCount()
    this.render(this.getMarkupString())
  }

  getMarkupString() {
    return `<ul>${this.data
      .map(data =>
        data.isCompleted
          ? `<li class="todo-list-item" data-id="${data.id}"><span class="todo-title" data-id="${data.id}"><del class="deleted-todo">${data.text}</del></span><button class="remove-button">삭제</button></li>`
          : `<li class="todo-list-item" data-id="${data.id}"><span class="todo-title" data-id="${data.id}">${data.text}</span><button class="remove-button">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}
