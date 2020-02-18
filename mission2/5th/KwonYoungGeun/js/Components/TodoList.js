import Component from './Component.js'
import { validateElement, validateData } from '../Utils/index.js'

export default class TodoList extends Component {
  constructor({ $element, data, onRemoveTodo, onToggle }) {
    super($element)
    this.data = data
    this.onRemoveTodo = onRemoveTodo
    this.onToggle = onToggle
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
    const logics = {
      'remove-button': id => this.onRemoveTodo(id),
      'todo-title': id => this.onToggle(id),
      'deleted-todo': id => this.onToggle(id),
      'default': () => {},
    }

    const id = parseInt(e.target.parentNode.getAttribute('data-id'))
    const logic = logics[e.target.className] || logics['default']
    logic(id)
  }

  setState(nextData) {
    validateData(nextData)
    this.data = nextData
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
