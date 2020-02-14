class App extends Component {
  constructor(selector) {
    if (typeof select === 'string' && selector[0] !== '#') {
      throw new Error('id 선택자를 입력해주세요.')
    }

    super($(selector))
    this.todoInput = new TodoInput($(`${selector}>.input-container`))
    this.todoList = new TodoList(
      todoData,
      $(`${selector}>.todo-list-container`)
    )
    this.todoCount = new TodoCount($(`${selector}>.todo-count-container`))
    this.init()
  }

  init() {
    this.bindEvents()
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
