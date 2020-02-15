class App extends Component {
  constructor(selector) {
    super($(selector))
    this.validate(this.$element)
    this.todoInput = new TodoInput($(`${selector}>.input-container`))
    this.todoList = new TodoList($(`${selector}>.todo-list-container`))
    this.todoCount = new TodoCount($(`${selector}>.todo-count-container`))
    this.init()
  }

  init() {
    this.bindEvents()
    this.todoList.sendCount()
  }

  validate($element) {
    validateElement($element)
  }

  bindEvents() {
    this.todoInput
      .on('@submit', e => this.onSubmit(e))
      .on('@removeAll', () => this.onRemoveAll())

    this.todoList.on('@setCount', e => this.onSetCount(e))
  }

  onSubmit(e) {
    this.todoList.addTodo(e.detail.inputValue)
  }

  onRemoveAll() {
    this.todoList.removeAll()
  }

  onSetCount(e) {
    this.todoCount.setState(e.detail)
  }
}
