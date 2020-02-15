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
      .on('@submit', event => this.onSubmit(event))
      .on('@removeAll', () => this.onRemoveAll())

    this.todoList.on('@setCount', event => this.onSetCount(event))
  }

  onSubmit(event) {
    this.todoList.addTodo(event.detail.inputValue)
  }

  onRemoveAll() {
    this.todoList.removeAll()
  }

  onSetCount(event) {
    this.todoCount.setState(event.detail)
  }
}
