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
  }

  validate($element) {
    validateElement($element)
  }

  bindEvents() {
    this.todoInput
      .on('@addTodo', e => {
        this.todoList.addTodo(e.detail.inputValue)
      })
      .on('@removeAll', () => {
        this.todoList.removeAll()
      })

    this.todoList.on('@setCount', e => {
      this.todoCount.setState(e.detail)
    })
  }
}
