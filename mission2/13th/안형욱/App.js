class App {
  state
  constructor($target) {
    this.$target = $target
    this.setup()
    this.$todoInput = new TodoInput($target, {
      addTodo: this.addTodo.bind(this),
    })
    this.$todoList = new TodoList($target, this.state.todos, {
      toggleTodo: this.toggleTodo.bind(this),
      deleteTodo: this.deleteTodo.bind(this),
    })
    this.$todoCount = new TodoCount($target, {
      totalTodosNum: this.totalTodosNum,
      completedTodosNum: this.completedTodosNum,
    })
    this.bindEvents()
  }
  setup() {
    const todos = storage.getItem(TODOS_STORAGE_KEY)
    this.state = { todos }
  }
  setState(newState) {
    this.state = { ...this.state, ...newState }
    storage.setItem(TODOS_STORAGE_KEY, this.state.todos)
    this.$todoCount.setState({
      totalTodosNum: this.totalTodosNum,
      completedTodosNum: this.completedTodosNum,
    })
    this.$todoList.setState(this.state.todos)
  }
  addTodo(todo) {
    const { todos } = this.state
    const newTodos = [...todos, { text: todo, isCompleted: false }]
    this.setState({ todos: newTodos })
  }
  toggleTodo(todoIdx) {
    const { todos } = this.state
    const newData = todos.map((todo, idx) => {
      if (idx !== todoIdx) return todo
      return { ...todo, isCompleted: !todo.isCompleted }
    })
    this.setState({ todos: newData })
  }
  deleteTodo(todoIdx) {
    const { todos } = this.state
    const newData = todos.filter((_, idx) => idx !== todoIdx)
    this.setState({ todos: newData })
  }
  get totalTodosNum() {
    const { todos } = this.state
    return todos.length
  }
  get completedTodosNum() {
    const { todos } = this.state
    return todos.filter(({ isCompleted }) => isCompleted).length
  }
  bindEvents() {
    this.$target.addEventListener('removeAll', () => {
      this.setState({ todos: [] })
    })
  }
}
