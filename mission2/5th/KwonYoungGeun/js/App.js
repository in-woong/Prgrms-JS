class App extends Component {
  constructor(selector) {
    if (typeof select === 'string' && selector[0] !== '#') {
      throw new Error('id 선택자를 입력해주세요.')
    }

    super($(selector))
    this.todoList = new TodoList(todoData, $(`${selector}>.todo-list`))
    this.todoInput = new TodoInput($(`${selector}>.todo-input`))
    this.todoCount = new TodoCount($(`${selector}>.todo-count`))
    this.bindEvents()
  }

  bindEvents() {}
}
